// src/scripts/batchDataProcessing.js
import { getOldDataTypeConfig, getNewDataTypeConfig } from '../src/config/apiConfig.js';
import { fetchPaginatedData } from '../src/utils/dataFetching.js';
import routeEvent from '../src/utils/routingLogic.js';
import { batchLookupIds } from '../src/utils/dbLookup.js';
import batchInsertIntoSupabase from '../src/db/batchInsert.js';
import { DATA_LOAD_ORDER } from '../src/config/index.js';

const saveTranslatedData = async (dataType, translatedData) => {
    await batchInsertIntoSupabase(translatedData, dataType);
    console.log(`Saved ${translatedData.length} items of type ${dataType}.`);
};

const processRoutedDataTypeInBatches = async (dataType, newDataType, allData, batchSize = 1000) => {
    console.log(`Processing ${allData.length} items of type ${dataType} to ${newDataType}`);

    const newConfig = getNewDataTypeConfig(newDataType);
    const translator = newConfig.translator;
    const schema = newConfig.schema;

    const lookups = await batchLookupIds(allData, dataType);

        // Translate batchData and await all translations
        const translatedData = await Promise.all(allData.map(async (item) => {
            return await translator(item, lookups);
        }));

        // Validate translated data
        let validatedData = [];
        translatedData.forEach(item => {
            const { error, value } = schema.validate(item, { abortEarly: false });
            if (error) {
                console.error('Validation error:', error);
            } else {
                validatedData.push(value);
            }
        })

        await saveTranslatedData(newDataType, validatedData);
};

const processOldDataTypeInBatches = async (dataType, allData, batchSize = 1000) => {
    const config = getOldDataTypeConfig(dataType);
    for(const newType of config.newTypes) {
        await processRoutedDataTypeInBatches(dataType, newType, allData, batchSize);
    }
};

const processRoutedEvents = async (dataType, events) => {
    let groupedEvents = {};
    for (const event of events) {
        try {
            const { newType } = routeEvent(dataType, event);
            if (!groupedEvents[newType]) {
                groupedEvents[newType] = [];
            }
            groupedEvents[newType].push(event);
        } catch (error) {
            console.error(`Error routing event in ${dataType}:`, error);
        }
    }

    // Process each group
    for (const [newDataType, data] of Object.entries(groupedEvents)) {
        await processRoutedDataTypeInBatches(dataType, newDataType, data);
    }
};

export const processDataInOrder = async (DATA_LOAD_ORDER) => {
    for (const dataType of DATA_LOAD_ORDER) {
        try {
            const config = getOldDataTypeConfig(dataType);
            const schema = config.schema;
            let data = [];

            if (config.externalUrl) {
                data = await fetchPaginatedData(config.externalUrl);
            } else {
                data = config.localData;
            }

            // Validate data
            const validatedData = [];
            data.forEach(item => {
                const { error, value } = schema.validate(item, { abortEarly: false });
                if (error) {
                    console.error('Validation error:', error);
                } else {
                    validatedData.push(value);
                }
            })

            if (['interaction-events', 'patches-events', 'items', 'item-definitions'].includes(dataType)) {
                await processRoutedEvents(dataType, validatedData);
            } else {
                await processOldDataTypeInBatches(dataType, validatedData);
            }
        } catch (error) {
            console.error(`Error processing ${dataType}:`, error);
        }
    }
};

// Main execution
(async () => {
    try {
        await processDataInOrder(DATA_LOAD_ORDER);
    } catch (error) {
        console.error('An error occurred during batch processing:', error);
    }
})();