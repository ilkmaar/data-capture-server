import { createIdMapping, translateBase } from '../translationHelpers.js';
import { lookupItemVarietyId } from '../valueLookups.js';

export const translateColor = (color) => ({
    ...createIdMapping('color', color.color_id),
    color_name: color.color_name
});

export const translateCreatureType = (creatureType) => ({
    ...createIdMapping('creature_type', creatureType.creature_type_id),
    creature_type_name: creatureType.creature_type_name
});

export const translateFaction = (faction) => ({
    ...createIdMapping('faction', faction.faction_id),
    faction_name: faction.faction_name
});

export const translateActivityType = (activityType) => ({
    ...createIdMapping('activity_type', activityType.activity_type_id),
    activity_type_name: activityType.activity_type_name
});

export const translateIsland = (island) => ({
    ...createIdMapping('island', island.island_id),
    island_name: island.island_name
});

export const translateArea = async (location, lookups = null) => {
    const fields = [
        { key: 'area_name', value: (l) => l.location_name },
        { key: 'area_x', value: (l) => l.location_position_x },
        { key: 'area_y', value: (l) => l.location_position_y }
    ];
    const references = [
        { key: 'activity_type_id', extractor: (l) => l.location_creature_activity_type },
        { key: 'island_id', extractor: (l) => l.location_island }
    ];
    return {
        ...createIdMapping('area', location.location_id),
        ...await translateBase(location, 'locations', fields, references, lookups)
    };
};

export const translatePlot = async (plot, lookups = null) => {
    const fields = [];
    const references = [
        { key: 'area_id', extractor: (p) => p.location_id }
    ];
    return {
        ...createIdMapping('plot', plot.plot_id),
        ...await translateBase(plot, 'plots', fields, references, lookups)
    };
};

export const translatePatch = async (patch, lookups = null) => {
    const fields = [];
    const references = [
        { key: 'plot_id', extractor: (p) => p.plot_id }
    ];
    return {
        ...createIdMapping('patch', patch.patch_id),
        ...await translateBase(patch, 'patches', fields, references, lookups)
    };
};

export const translateResourceCategory = (resourceCategory) => ({
    ...createIdMapping('resource_category', resourceCategory.resource_category_id),
    resource_category_name: resourceCategory.resource_category_name
});

export const translateItemCategory = (itemCategory) => ({
    ...createIdMapping('item_category', itemCategory.item_category_id),
    item_category_name: itemCategory.item_category_name
});

export const translateResourceVariety = async (resourceVariety, lookups = null) => {
    const fields = [
        { key: 'resource_variety_name', value: (rv) => rv.resource_type_name }
    ];
    const references = [];
    return {
        ...createIdMapping('resource_variety', resourceVariety.resource_type_id),
        ...await translateBase(resourceVariety, 'resource-types', fields, references, lookups)
    };
};

export const translateItemVariety = async (itemVariety, lookups = null) => {
    const fields = [
        { key: 'item_variety_name', value: (iv) => iv.item_variety_name }
    ];
    const references = [
        { key: 'item_category_id', extractor: (iv) => iv.item_category_id }
    ];
    return {
        ...createIdMapping('item_variety', itemVariety.item_variety_id),
        ...await translateBase(itemVariety, 'item-categories', fields, references, lookups)
    };
};

export const translateResourceType = async (resourceType, lookups = null) => {
    const fields = [
        { key: 'resource_type_name', value: (rt) => rt.item_def_name }
    ];
    const references = [
        { key: 'resource_category_id', extractor: (rt) => rt.resource_category_id },
        { key: 'resource_variety_id', extractor: (rt) => rt.resource_type_id }
    ];
    return {
        ...createIdMapping('resource_type', resourceType.item_def_id),
        ...await translateBase(resourceType, 'item-definitions', fields, references, lookups)
    };
};

export const translateItemType = async (itemType, lookups = null) => {
    const fields = [
        { key: 'item_type_name', value: (it) => it.item_def_name }
    ];
    const references = [
        { key: 'item_category_id', extractor: (it) => it.item_category_id },
        { key: 'item_variety_id', extractor: (it) => lookupItemVarietyId(it.item_def_name) }
    ];
    return {
        ...createIdMapping('item_type', itemType.item_def_id),
        ...await translateBase(itemType, 'item-definitions', fields, references, lookups)
    };
};

export const translateDataTable = (dataTable) => ({
    ...createIdMapping('data_table', dataTable.data_table_id),
    data_table_name: dataTable.data_table_name
});