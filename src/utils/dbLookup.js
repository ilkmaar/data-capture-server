// utils/batchLookup.js
import supabase from '../db/supabase.js';
import { getIdValuesByField } from './idGathering.js';
import { MAX_LOOKUP_BATCH_SIZE, TABLES_BY_ID_FIELD } from '../config/index.js';

export const lookupIdsForSingle = async (item, dataType) => {
    return await batchLookupIds([item], dataType);
};

async function batchLookup(table, internalIdField, externalIdField, ids, worldId = null) {
    const batches = [];
    for (let i = 0; i < ids.length; i += MAX_LOOKUP_BATCH_SIZE) {
        batches.push(ids.slice(i, i + MAX_LOOKUP_BATCH_SIZE));
    }

    const results = [];
    for (const batch of batches) {

        let query = supabase
            .from(table)
            .select(`${internalIdField}, ${externalIdField}`)
            .in(externalIdField, batch);

        const { data, error } = await query;

        if (table === 'data_tables') {
            console.log(`Looking up ${table} for items`, batch);
            console.log('Results:', data);
        }

        if (error) {
            console.error(`Error in batch lookup for ${table}:`, error);
        } else {
            results.push(...data);
        }
    }

    return results;
}

export const batchLookupIds = async (items, dataType) => {
    const idsByField = getIdValuesByField(items, dataType);
    const lookups = {};

    for (const [field, ids] of Object.entries(idsByField)) {
        if (TABLES_BY_ID_FIELD[field]) {
            if (ids.withoutWorld.length > 0) {
                const results = await batchLookup(TABLES_BY_ID_FIELD[field], field, 'fv_' + field, ids.withoutWorld);
                lookups[field] = Object.fromEntries(results.map(r => [r['fv_' + field], r[field]]));
            }

            if (Object.keys(ids.byWorld).length > 0) {
                lookups[field] = lookups[field] || {};
                for (const [worldId, worldIds] of Object.entries(ids.byWorld)) {

                    const worldIdToUse = idsByField.world_id ? idsByField.world_id.withoutWorld[worldId] : null;
                    const results = await batchLookup(TABLES_BY_ID_FIELD[field], field, 'fv_' + field, worldIds, worldIdToUse);

                    lookups[field] = {
                        ...lookups[field],
                        ...Object.fromEntries(results.map(r => [r['fv_' + field] + '_' + worldId, r[field]]))
                    };
                }
            }
        } else {
            console.error(`No table found for field ${field}`);
        }
    }
    return lookups;
};