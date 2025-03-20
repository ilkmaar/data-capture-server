// src/scripts/batchDataProcessing.js
import {
	getOldDataTypeConfig,
	getNewDataTypeConfig,
} from '../src/config/apiConfig.js';
import { fetchPaginatedData } from '../src/utils/dataFetching.js';
import routeEvent from '../src/utils/routingLogic.js';
import { batchLookupIds } from '../src/utils/dbLookup.js';
import batchInsertIntoSupabase from '../src/db/batchInsert.js';
import { DATA_LOAD_ORDER } from './config.js';

/**
 * Saves translated data to Supabase database
 * @param {string} dataType - Type of data being saved
 * @param {Array} translatedData - Array of processed data ready for insertion
 */
const saveTranslatedData = async (dataType, translatedData) => {
	await batchInsertIntoSupabase(translatedData, dataType);
	console.log(`Saved ${translatedData.length} items of type ${dataType}.`);
};

/**
 * Processes a batch of data for a specific route/type
 * @param {string} dataType - Original data type
 * @param {string} newDataType - Target data type after translation
 * @param {Array} allData - Array of data to process
 * @param {number} batchSize - Size of batches to process (default: 1000)
 */
const processRoutedDataTypeInBatches = async (
	dataType,
	newDataType,
	allData,
	batchSize = 1000,
) => {
	console.log(
		`Processing ${allData.length} items of type ${dataType} to ${newDataType}`,
	);

	const newConfig = getNewDataTypeConfig(newDataType);
	const translator = newConfig.translator;
	const schema = newConfig.schema;

	const lookups = await batchLookupIds(allData, dataType);

	// Translate batchData and await all translations
	const translatedData = await Promise.all(
		allData.map(async (item) => {
			return await translator(item, lookups);
		}),
	);

	// Validate translated data
	let validatedData = [];
	translatedData.forEach((item) => {
		const { error, value } = schema.validate(item, { abortEarly: false });
		if (error) {
			console.log('Error validating item: ', item);
			console.error('Validation error for output data:', error);
		} else {
			validatedData.push(value);
		}
	});

	console.log('Validated data length: ', validatedData.length);

	if (validatedData.length != allData.length) {
		console.log('Validation error for ', newDataType);
		// find the missing items
		const missingItems = allData.filter(
			(item) => !validatedData.includes(item),
		);
		console.log('Example missing item: ', missingItems[0]);
	}

	await saveTranslatedData(newDataType, validatedData);
};

/**
 * Processes old data type and routes it to multiple new types if needed
 * @param {string} dataType - Type of data to process
 * @param {Array} allData - Array of data to process
 * @param {number} batchSize - Size of batches to process
 */
const processOldDataTypeInBatches = async (
	dataType,
	allData,
	batchSize = 1000,
) => {
	const config = getOldDataTypeConfig(dataType);
	for (const newType of config.newTypes) {
		await processRoutedDataTypeInBatches(
			dataType,
			newType,
			allData,
			batchSize,
		);
	}
};

/**
 * Routes and processes events based on their type
 * @param {string} dataType - Type of events to process
 * @param {Array} events - Array of events to route and process
 */
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

/**
 * Main function to process all data types in the specified order
 * @param {Array} DATA_LOAD_ORDER - Array specifying the order of data types to process
 */
// src/scripts/batchDataProcessing.js
// ... (keep all other imports and functions the same)

export const processDataInOrder = async (DATA_LOAD_ORDER) => {
	for (const dataType of DATA_LOAD_ORDER) {
		try {
			console.log(`Processing ${dataType}`);
			const config = getOldDataTypeConfig(dataType);
			const schema = config.schema;
			let data = [];

			if (config.externalUrl) {
				console.log(`Fetching data from ${config.externalUrl}`);
				data = await fetchPaginatedData(config.externalUrl);
				console.log(`Fetched ${data.length} items of type ${dataType}`);
			} else {
				data = config.localData || [];
				console.log(
					`Processing ${data.length} local items of type ${dataType}`,
				);
			}

			if (!data.length) {
				console.log(`No data found for ${dataType}`);
				continue;
			}

			// Validate data
			const validatedData = [];
			data.forEach((item) => {
				const { error, value } = schema.validate(item, {
					abortEarly: false,
				});
				if (error) {
					console.error(
						'Validation error for input data type:',
						dataType,
						error,
					);
				} else {
					validatedData.push(value);
				}
			});

			if (!validatedData.length) {
				console.log(`No valid data after validation for ${dataType}`);
				continue;
			}

			if (
				[
					'interaction-events',
					'patches-events',
					'items',
					'item-definitions',
				].includes(dataType)
			) {
				await processRoutedEvents(dataType, validatedData);
			} else {
				await processOldDataTypeInBatches(dataType, validatedData);
			}
		} catch (error) {
			console.error(`Error processing ${dataType}:`, error);
			continue; // Continue with next data type on error
		}
	}
	console.log('Data processing completed');
};

// Main execution remains the same
(async () => {
	try {
		await processDataInOrder(DATA_LOAD_ORDER);
	} catch (error) {
		console.error('An error occurred during batch processing:', error);
	}
})();
