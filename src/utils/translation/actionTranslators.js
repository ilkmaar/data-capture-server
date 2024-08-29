import * as localLookups from '../valueLookups.js';
import { createIdMapping, translateBase } from '../translationHelpers.js';

const extractOutputItemId = (data, index) => data.output_items[index]?.item_id;
const extractInputItemId = (data, index) => data.input_items[index]?.item_id;

export const translateForagingAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'foraging_action_time', value: (e) => e.raw_time },
		{
			key: 'foraging_action_x',
			value: (e) => e.interaction_event_event_pos_x,
		},
		{
			key: 'foraging_action_y',
			value: (e) => e.interaction_event_event_pos_y,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'patch_id', extractor: (e) => e.patch_id },
		{
			key: 'resource_id',
			extractor: (e) => extractOutputItemId(e, 0),
			requiresWorld: true,
		},
	];
	return {
		...createIdMapping('foraging_action', event.interaction_event_id),
		...(await translateBase(
			event,
			'interaction-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateCraftingAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'crafting_action_time', value: (e) => e.raw_time },
		{
			key: 'crafting_action_x',
			value: (e) => e.interaction_event_event_pos_x,
		},
		{
			key: 'crafting_action_y',
			value: (e) => e.interaction_event_event_pos_y,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{
			key: 'ingredient1_resource_id',
			keyOverride: 'resource_id',
			extractor: (e) => extractInputItemId(e, 0),
			requiresWorld: true,
		},
		{
			key: 'ingredient2_resource_id',
			keyOverride: 'resource_id',
			extractor: (e) => extractInputItemId(e, 1),
			requiresWorld: true,
		},
		{
			key: 'item_id',
			extractor: (e) => extractOutputItemId(e, 0),
			requiresWorld: true,
		},
	];
	return {
		...createIdMapping('crafting_action', event.interaction_event_id),
		...(await translateBase(
			event,
			'interaction-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateGivingAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'giving_action_time', value: (e) => e.raw_time },
		{
			key: 'giving_action_x',
			value: (e) => e.interaction_event_event_pos_x,
		},
		{
			key: 'giving_action_y',
			value: (e) => e.interaction_event_event_pos_y,
		},
		{
			key: 'giving_action_health_effect',
			value: (e) => e.interaction_event_health_effect,
		},
		{
			key: 'giving_action_mood_effect',
			value: (e) => e.interaction_event_mood_effect,
		},
		{
			key: 'giving_action_social_effect',
			value: (e) => e.interaction_event_social_effect,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{
			key: 'item_id',
			extractor: (e) => extractInputItemId(e, 0),
			requiresWorld: true,
		},
	];
	return {
		...createIdMapping('giving_action', event.interaction_event_id),
		...(await translateBase(
			event,
			'interaction-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translatePatchAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'patch_action_time', value: (e) => e.raw_time },
		{
			key: 'patch_action_growth_effect',
			value: (e) => e.patch_event_growth_effect,
		},
		{
			key: 'patch_action_shadow_effect',
			value: (e) => e.patch_event_shadow_effect,
		},
		{
			key: 'patch_action_light_effect',
			value: (e) => e.patch_event_light_effect,
		},
		{
			key: 'patch_action_stability_effect',
			value: (e) => e.patch_event_stability_effect,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'patch_id', extractor: (e) => e.patch_id },
		{ key: 'item_id', extractor: (e) => e.item_id, requiresWorld: true },
	];
	return {
		...createIdMapping('patch_action', event.patch_event_id),
		...(await translateBase(
			event,
			'patches-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translatePatchTendingAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'patch_tending_action_time', value: (e) => e.raw_time },
		{
			key: 'patch_tending_action_growth_effect',
			value: (e) => e.patch_event_growth_effect,
		},
		{
			key: 'patch_tending_action_shadow_effect',
			value: (e) => e.patch_event_shadow_effect,
		},
		{
			key: 'patch_tending_action_light_effect',
			value: (e) => e.patch_event_light_effect,
		},
		{
			key: 'patch_tending_action_stability_effect',
			value: (e) => e.patch_event_stability_effect,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{ key: 'patch_id', extractor: (e) => e.patch_id },
	];
	return {
		...createIdMapping('patch_tending_action', event.patch_event_id),
		...(await translateBase(
			event,
			'patches-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateDinerReviewAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'diner_review_action_time', value: (e) => e.raw_time },
		{ key: 'diner_review_action_score', value: (e) => e.rating },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{ key: 'item_id', extractor: (e) => e.item_id, requiresWorld: true },
	];
	return {
		...createIdMapping('diner_review_action', event.diner_rating_event_id),
		...(await translateBase(
			event,
			'diner-rating-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateDinerSeatingAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'diner_seating_action_time', value: (e) => e.raw_time },
		{
			key: 'diner_seating_action_seating_area',
			value: (e) => e.seat_type_id,
		},
		{ key: 'diner_seating_action_seat', value: (e) => e.seat_id },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
	];
	return {
		...createIdMapping(
			'diner_seating_action',
			event.diner_seating_event_id,
		),
		...(await translateBase(
			event,
			'diner-seating-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateCreatureDirectionAction = async (
	event,
	lookups = null,
) => {
	const fields = [
		{ key: 'creature_direction_action_time', value: (e) => e.raw_time },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{
			key: 'creature_direction_action_from_area_id',
			keyOverride: 'area_id',
			extractor: (e) => e.from_location_id,
		},
		{
			key: 'creature_direction_action_to_area_id',
			keyOverride: 'area_id',
			extractor: (e) => e.to_location_id,
		},
	];
	return {
		...createIdMapping(
			'creature_direction_action',
			event.direct_creature_event_id,
		),
		...(await translateBase(
			event,
			'direct-creature-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateInventoryAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'inventory_action_time', value: (e) => e.raw_time },
		{
			key: 'inventory_action_type',
			value: (e) =>
				localLookups.lookupInventoryActionType(
					e.player_item_interaction_type_id,
				),
		},
		{
			key: 'inventory_action_x',
			value: (e) => e.player_item_interaction_event_pos_x,
		},
		{
			key: 'inventory_action_y',
			value: (e) => e.player_item_interaction_event_pos_y,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'item_id', extractor: (e) => e.item_id, requiresWorld: true },
		{
			key: 'resource_id',
			extractor: (e) => e.item_id,
			requiresWorld: true,
		},
		{ key: 'inventory_id', extractor: (e) => e.inventory },
	];
	return {
		...createIdMapping(
			'inventory_action',
			event.player_item_interaction_event_id,
		),
		...(await translateBase(
			event,
			'player-item-interaction-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateDataAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'data_action_time', value: (e) => e.raw_time },
		{
			key: 'data_action_type',
			value: (e) =>
				localLookups.lookupDataActionType(e.data_event_type_id),
		},
		{ key: 'data_action_table_name', value: (e) => e.table_name },
		{ key: 'data_action_variable', value: (e) => e.axis_selected },
		{ key: 'data_action_axis', value: (e) => e.axis_selection },
		{
			key: 'data_action_source',
			value: (e) => localLookups.lookupDataSource(e.open_from_source_id),
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{
			key: 'data_table_id',
			keyOverride: 'data_table_id',
			extractor: (e) => e.table_id,
		},
		{
			key: 'merged_data_table_id',
			keyOverride: 'data_table_id',
			extractor: (e) => e.table_being_merged_id,
		},
	];

	return {
		...createIdMapping(
			'data_action',
			event.player_manipulate_data_event_id,
		),
		...(await translateBase(
			event,
			'player-manipulate-data-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateAnomalyReading = async (event, lookups = null) => {
	const fields = [
		{ key: 'anomaly_reading_time', value: (e) => e.raw_time },
		{
			key: 'anomaly_reading_x',
			value: (e) => e.anomaly_reading_position_x,
		},
		{
			key: 'anomaly_reading_y',
			value: (e) => e.anomaly_reading_position_y,
		},
		{
			key: 'anomaly_reading_value',
			value: (e) => e.anomaly_reading_value,
		},
		{
			key: 'anomaly_mapped',
			value: (e) => e.anomaly_mapped,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
	];
	return {
		...createIdMapping('anomaly_reading', event.anomaly_reading_id),
		...(await translateBase(
			event,
			'anomaly-readings',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateRequestBoardAction = async (event, lookups = null) => {
	const fields = [
		{
			key: 'request_board_action_type',
			value: (e) => e.request_board_action_type_id,
		},
		{
			key: 'friendship_bonus',
			value: (e) => e.friendship_bonus,
		},
	];
	const references = [
		{
			key: 'request_board_item_id',
			extractor: (e) => e.request_board_item_id,
		},
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{ key: 'item_id', extractor: (e) => e.item_id },
	];

	const translatedBase = await translateBase(
		event,
		'request-board-actions',
		fields,
		references,
		lookups,
	);

	return {
		...createIdMapping(
			'request_board_action',
			event.request_board_action_id,
		),
		...translatedBase,
	};
};
