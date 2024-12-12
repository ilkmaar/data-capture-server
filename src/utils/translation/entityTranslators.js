import { createIdMapping, translateBase } from "../translationHelpers.js";

export const translateWorld = (world) => ({
    ...createIdMapping("world", world.world_id),
    world_name: world.world_id,
    world_created_date: world.created_date,
});

export const translatePlayer = async (player, lookups = null) => {
    const fields = [{ key: "player_name", value: (p) => p.player_name }];
    const references = [{ key: "world_id", extractor: (p) => p.world_id }];
    return {
        ...createIdMapping("player", player.player_id),
        ...(await translateBase(
            player,
            "players",
            fields,
            references,
            lookups,
        )),
    };
};

export const translateCreature = async (creature, lookups = null) => {
    const fields = [
        { key: "creature_created_date", value: (c) => c.created_date },
        { key: "creature_name", value: (c) => c.creature_name },
    ];
    const references = [
        { key: "world_id", extractor: (c) => c.world_id },
        { key: "color_id", extractor: (c) => c.color_id },
        { key: "creature_type_id", extractor: (c) => c.creature_type_id },
        { key: "faction_id", extractor: (c) => c.faction_id },
    ];
    return {
        ...createIdMapping("creature", creature.creature_id),
        ...(await translateBase(
            creature,
            "creatures",
            fields,
            references,
            lookups,
        )),
    };
};

export const translateResource = async (resource, lookups = null) => {
    const fields = [
        { key: "resource_created_date", value: (r) => r.created_date },
        { key: "resource_quality", value: (r) => r.item_quality },
        { key: "resource_is_anomalous", value: (r) => r.is_anomalous },
        { key: "resource_affects_crafting", value: (r) => r.affects_crafting },
    ];
    const references = [
        { key: "world_id", extractor: (r) => r.world_id },
        { key: "resource_type_id", extractor: (r) => r.item_def_id },
    ];
    return {
        ...createIdMapping("resource", resource.item_id),
        ...(await translateBase(
            resource,
            "items",
            fields,
            references,
            lookups,
        )),
    };
};

export const translateItem = async (item, lookups = null) => {
    const fields = [
        { key: "item_created_date", value: (i) => i.created_date },
        { key: "item_quality", value: (i) => i.item_quality },
        { key: "item_is_anomalous", value: (r) => r.is_anomalous },
    ];
    const references = [
        { key: "world_id", extractor: (i) => i.world_id },
        { key: "item_type_id", extractor: (i) => i.item_def_id },
    ];
    return {
        ...createIdMapping("item", item.item_id),
        ...(await translateBase(item, "items", fields, references, lookups)),
    };
};

export const translateInventory = (inventory) => ({
    ...createIdMapping("inventory", inventory.inventory_id),
    inventory_name: inventory.inventory_name,
});

export const translateDataTable = async (table, lookups = null) => {
    const fields = [{ key: "data_table_name", value: (t) => t.table_name }];
    const references = [{ key: "world_id", extractor: (t) => t.world_id }];
    return {
        ...createIdMapping("data_table", table.table_id),
        ...(await translateBase(
            table,
            "player-manipulate-data-events",
            fields,
            references,
            lookups,
        )),
    };
};
