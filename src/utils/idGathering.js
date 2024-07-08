// utils/idGathering.js
import { getOldDataTypeConfig } from '../config/apiConfig.js';

const addItemToField = (idsByField, field, value, worldId = null) => {
    if (!idsByField[field]) {
        idsByField[field] = { withoutWorld: new Set(), byWorld: {} };
    }

    if (worldId !== null) {
        if (!idsByField[field].byWorld[worldId]) {
            idsByField[field].byWorld[worldId] = new Set();
        }
        if (value !== null) {
            idsByField[field].byWorld[worldId].add(value);
        }
    } else if (value !== null) {
        idsByField[field].withoutWorld.add(value);
    }
};

const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current && current[key], obj);
};

const handleLookupField = (item, lookupField, idsByField, worldId) => {
    const value = lookupField.sourceField 
        ? getNestedValue(item, lookupField.sourceField)
        : item[lookupField.fieldName];

    if (value !== undefined && value !== null) {
        addItemToField(
            idsByField,
            lookupField.newFieldName,
            value,
            lookupField.requiresWorldId ? worldId : null
        );
    }
};

const handleSpecialLookups = (item, lookupFunction, idsByField, worldId) => {
    const idFieldValuesToAdd = lookupFunction(item) || [];
    for (const { newFieldName, value, requiresWorldId } of idFieldValuesToAdd) {
        if (value !== undefined && value !== null) {
            addItemToField(idsByField, newFieldName, value, requiresWorldId ? worldId : null);
        }
    }
};

export const getIdValuesByField = (items, dataType) => {
    const config = getOldDataTypeConfig(dataType);
    const idsByField = {};
    
    items.forEach(item => {
        const worldId = item.world_id;

        // Handle regular lookup fields
        if (config.lookupFields) {
            config.lookupFields.forEach(lookupField => {
                handleLookupField(item, lookupField, idsByField, worldId);
            });
        }

        // Handle special lookups if any
        if (config.specialLookups) {
            config.specialLookups.forEach(lookupFunction => {
                handleSpecialLookups(item, lookupFunction, idsByField, worldId);
            });
        }
    });

    // Convert Sets back to arrays
    Object.entries(idsByField).forEach(([field, data]) => {
        data.withoutWorld = Array.from(data.withoutWorld);
        Object.entries(data.byWorld).forEach(([worldId, set]) => {
            data.byWorld[worldId] = Array.from(set);
        });
    });

    return idsByField;
};