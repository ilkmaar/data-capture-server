// db/batchInsert.js
import supabase from './supabase.js';
import { getNewDataTypeConfig } from '../config/apiConfig.js';
import { deduplicateData } from '../utils/dataDeduplication.js';
import { MAX_INSERTION_BATCH_SIZE, RETRY_LIMIT } from '../config/index.js';

const upsertBatch = async (batch, table, attempt = 1) => {
    try {
        const { data: result, error: upsertError } = await supabase
            .from(table)
            .upsert(batch)
            .select();

        if (upsertError) {
            throw upsertError;
        }

        console.log(`Successfully upserted ${result.length} items into table ${table}.`);
    } catch (error) {
        if (attempt <= RETRY_LIMIT) {
            console.warn(`Retrying batch upsert attempt ${attempt} for table ${table} due to error:`, error);
            return upsertBatch(batch, table, attempt + 1);
        } else {
            console.error(`Failed to upsert data after ${RETRY_LIMIT} attempts:`, error, batch[0]);
        }
    }
};

const batchInsertIntoSupabase = async (dataToLoad, dataType) => {
    const config = getNewDataTypeConfig(dataType);
    const table = config.table;
    const idField = config.idField;

    const uniqueData = deduplicateData(dataToLoad, idField);

    const batchCount = Math.ceil(uniqueData.length / MAX_INSERTION_BATCH_SIZE);

    const batchPromises = [];

    for (let i = 0; i < batchCount; i++) {
        const batchStart = i * MAX_INSERTION_BATCH_SIZE;
        const batchEnd = batchStart + MAX_INSERTION_BATCH_SIZE;
        const batch = uniqueData.slice(batchStart, batchEnd);

        batchPromises.push(upsertBatch(batch, table));
    }

    await Promise.all(batchPromises);
};

export default batchInsertIntoSupabase;