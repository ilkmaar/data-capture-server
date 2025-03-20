import { createIdMapping, translateBase } from '../translationHelpers.js';

export const translateWorld = (world) => ({
	...createIdMapping('world', world.world_id),
	world_name: world.world_id,
	world_created_date: world.created_date,
});

export const translatePlayer = async (player, lookups = null) => {
	const fields = [{ key: 'player_name', value: (p) => p.player_name }];
	const references = [{ key: 'world_id', extractor: (p) => p.world_id }];
	return {
		...createIdMapping('player', player.player_id),
		...(await translateBase(
			player,
			'players',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateCreature = async (creature, lookups = null) => {
	const fields = [
		{ key: 'creature_created_date', value: (c) => c.created_date },
		{ key: 'creature_name', value: (c) => c.creature_name },
	];
	const references = [
		{ key: 'world_id', extractor: (c) => c.world_id },
		{ key: 'color_id', extractor: (c) => c.color_id },
		{ key: 'creature_type_id', extractor: (c) => c.creature_type_id },
		{ key: 'faction_id', extractor: (c) => c.faction_id },
	];
	return {
		...createIdMapping('creature', creature.creature_id),
		...(await translateBase(
			creature,
			'creatures',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateResource = async (resource, lookups = null) => {
	const fields = [
		{ key: 'resource_created_date', value: (r) => r.created_date },
		{ key: 'resource_quality', value: (r) => r.item_quality },
	];
	const references = [
		{ key: 'world_id', extractor: (r) => r.world_id },
		{ key: 'resource_type_id', extractor: (r) => r.item_def_id },
	];
	return {
		...createIdMapping('resource', resource.item_id, resource.world_id),
		...(await translateBase(
			resource,
			'items',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateItem = async (item, lookups = null) => {
	const fields = [
		{ key: 'item_created_date', value: (i) => i.created_date },
		{ key: 'item_quality', value: (i) => i.item_quality },
	];
	const references = [
		{ key: 'world_id', extractor: (i) => i.world_id },
		{ key: 'item_type_id', extractor: (i) => i.item_def_id },
	];
	const result = {
		...createIdMapping('item', item.item_id, item.world_id),
		...(await translateBase(item, 'items', fields, references, lookups)),
	};
	return result;
};

export const translateInventory = (inventory) => ({
	...createIdMapping('inventory', inventory.inventory_id),
	inventory_name: inventory.inventory_name,
});

export const translateDataTable = async (table, lookups = null) => {
	const fields = [{ key: 'data_table_name', value: (t) => t.table_name }];
	const references = [{ key: 'world_id', extractor: (t) => t.world_id }];
	return {
		...createIdMapping('data_table', table.table_id),
		...(await translateBase(
			table,
			'player-manipulate-data-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateRequestBoardItem = async (item, lookups = null) => {
	const fields = [
		{ key: 'request_board_item_request_id', value: (i) => i.request_id },
		{
			key: 'request_board_item_request_type',
			value: (i) => i.request_type,
		},
		{ key: 'request_board_item_target_type', value: (i) => i.target_type },
		{
			key: 'request_board_item_request_duration',
			value: (i) => i.request_time_length,
		},
		{
			key: 'request_board_item_requested_quantity',
			value: (i) => i.request_amount,
		},
		{
			key: 'request_board_item_reward_item_quality',
			value: (i) => i.reward_item_quality,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (i) => i.world_id },
		{ key: 'game_time_id', extractor: (i) => i.game_time_id },
		{ key: 'creature_id', extractor: (i) => i.creature_id },
		{
			key: 'request_board_item_requested_item_type_id',
			keyOverride: 'item_type_id',
			extractor: (i) => i.request_item_def_id,
		},
		{
			key: 'request_board_item_requested_resource_type_id',
			keyOverride: 'resource_type_id',
			extractor: (i) => i.request_item_def_id,
		},
		{
			key: 'request_board_item_reward_item_type_id',
			keyOverride: 'item_type_id',
			extractor: (i) => i.reward_item_def_id,
		},
		{
			key: 'request_board_item_reward_resource_type_id',
			keyOverride: 'resource_type_id',
			extractor: (i) => i.reward_item_def_id,
		},
	];

	const translatedBase = await translateBase(
		item,
		'request-board-items',
		fields,
		references,
		lookups,
	);

	return {
		...createIdMapping('request_board_item', item.request_board_item_id),
		fv_request_board_item_id: item.request_board_item_id,
		...translatedBase,
	};
};
