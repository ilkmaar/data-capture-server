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

export const translateTreatmentAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'treatment_action_time', value: (e) => e.raw_time },
		{
			key: 'treatment_action_health_effect',
			value: (e) => e.treatment_health_delta,
		},
		{
			key: 'treatment_action_mood_effect',
			value: (e) => e.treatment_mood_delta,
		},
		{
			key: 'treatment_action_social_effect',
			value: (e) => e.treatment_social_delta,
		},
		{ key: 'treatment_action_room_number', value: (e) => e.room_id },
		{ key: 'treatment_action_cured', value: (e) => e.cured },
		{
			key: 'treatment_action_sickness_category',
			value: (e) => e.sickness_category,
		},
		{
			key: 'treatment_action_sickness_name',
			value: (e) => e.sickness_name,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{ key: 'item_id', extractor: (e) => e.item_id, requiresWorld: true },
	];

	return {
		...createIdMapping('treatment_action', event.treatment_event_id),
		...(await translateBase(
			event,
			'treatment-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateAvatarUpdateAction = async (event, lookups = null) => {
	const fields = [
		{ key: 'avatar_update_action_time', value: (e) => e.raw_time },
		{ key: 'avatar_update_action_body_type', value: (e) => e.body_type },
		{ key: 'avatar_update_action_height', value: (e) => e.height },
		{ key: 'avatar_update_action_face', value: (e) => e.face },
		{ key: 'avatar_update_action_eyes', value: (e) => e.eyes },
		{ key: 'avatar_update_action_nose', value: (e) => e.nose },
		{ key: 'avatar_update_action_mouth', value: (e) => e.mouth },
		{ key: 'avatar_update_action_skin_color', value: (e) => e.skin_color },
		{ key: 'avatar_update_action_hairstyle', value: (e) => e.hairstyle },
		{ key: 'avatar_update_action_hair_color', value: (e) => e.hair_color },
		{ key: 'avatar_update_action_outfit', value: (e) => e.outfit },
		{
			key: 'avatar_update_action_outfit_color',
			value: (e) => e.outfit_color,
		},
		{ key: 'avatar_update_action_glasses', value: (e) => e.glasses },
		{ key: 'avatar_update_action_cane', value: (e) => e.cane },
		{ key: 'avatar_update_action_prosthetic', value: (e) => e.prosthetic },
		{
			key: 'avatar_update_action_hearing_aid',
			value: (e) => e.hearing_aid,
		},
		{
			key: 'avatar_update_action_diabetes_patch',
			value: (e) => e.diabetes_patch,
		},
		{ key: 'avatar_update_action_goggles', value: (e) => e.goggles },
	];

	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
	];

	return {
		...createIdMapping('avatar_update_action', event.avatar_update_id),
		...(await translateBase(
			event,
			'avatar-updates',
			fields,
			references,
			lookups,
		)),
	};
};

// Need to add the following:
// CREATURES
// creature-interaction-events;
// patch-measure-events;

// POTIONS
// medical-room-send-events;
// triage-events;
// treatment-events;
// creature-stats-events;
// sickness-events;

// MINIGAMES
// smashing-minigame-events;
// rune-minigame-events;
// slicing-minigame-events;
// brewing-minigame-events;
// challenge-hub-events;

// PLAYERS
// player-trade-item-events;

export const translateCreatureInteractionEvent = async (
	event,
	lookups = null,
) => {
	const fields = [
		{ key: 'creature_interaction_event_time', value: (e) => e.raw_time },
		{
			key: 'creature_interaction_event_health',
			value: (e) => e.creature_interaction_event_health,
		},
		{
			key: 'creature_interaction_event_mood',
			value: (e) => e.creature_interaction_event_mood,
		},
		{
			key: 'creature_interaction_event_social',
			value: (e) => e.creature_interaction_event_social,
		},
	];

	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{ key: 'area_id', extractor: (e) => e.location_id },
	];

	return {
		...createIdMapping(
			'creature_interaction_event',
			event.creature_interaction_event_id,
		),
		...(await translateBase(
			event,
			'creature-interaction-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateMedicalRoomSendEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'medical_room_send_event_time', value: (e) => e.raw_time },
		{
			key: 'medical_room_send_event_room_number',
			value: (e) => e.room_id,
		},
	];

	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
	];

	return {
		...createIdMapping(
			'medical_room_send_event',
			event.medical_room_send_event_id,
		),
		...(await translateBase(
			event,
			'medical-room-send-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateTriageEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'triage_event_time', value: (e) => e.raw_time },
		{
			key: 'triage_event_sickness_category',
			value: (e) =>
				localLookups.lookupSicknessCategory(e.sickness_category),
		},
		{
			key: 'triage_event_sickness_name',
			value: (e) => localLookups.lookupSicknessName(e.sickness_name),
		},
	];

	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
	];

	return {
		...createIdMapping('triage_event', event.triage_event_id),
		...(await translateBase(
			event,
			'triage-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateCreatureStatsEvent = async (event, lookups = null) => {
	const fields = [
		{
			key: 'creature_stats_event_health',
			value: (e) => e.creature_stats_event_health,
		},
		{
			key: 'creature_stats_event_mood',
			value: (e) => e.creature_stats_event_mood,
		},
		{
			key: 'creature_stats_event_social',
			value: (e) => e.creature_stats_event_social,
		},
		{ key: 'raw_time', value: (e) => e.raw_time },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
	];
	return {
		...createIdMapping(
			'creature_stats_event',
			event.creature_stats_event_id,
		),
		...(await translateBase(
			event,
			'creature-stats-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateSicknessEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'sickness_event_time', value: (e) => e.raw_time },
		{
			key: 'sickness_event_category',
			value: (e) =>
				localLookups.lookupSicknessCategory(e.sickness_category),
		},
		{
			key: 'sickness_event_area_id',
			keyOverride: 'area_id',
			value: (e) => e.location_id,
		},
	];

	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
	];

	return {
		...createIdMapping('sickness_event', event.sickness_event_id),
		...(await translateBase(
			event,
			'sickness-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translatePlayerTradeItemEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'player_trade_item_event_time', value: (e) => e.raw_time },
		{
			key: 'player_trade_item_event_pos_x',
			value: (e) => e.player_trade_item_event_pos_x,
		},
		{
			key: 'player_trade_item_event_pos_y',
			value: (e) => e.player_trade_item_event_pos_y,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'receiving_player_id', extractor: (e) => e.receiving_player_id },
		{ key: 'item_id', extractor: (e) => e.item_id },
		{ key: 'area_id', extractor: (e) => e.location_id },
	];
	return {
		...createIdMapping(
			'player_trade_item_event',
			event.player_trade_item_event_id,
		),
		...(await translateBase(
			event,
			'player-trade-item-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateSmashingMinigameEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'smashing_minigame_event_time', value: (e) => e.raw_time },
		{ key: 'crafting_cancelled', value: (e) => e.crafting_cancelled },
		{
			key: 'average_input_item_quality',
			value: (e) => e.average_input_item_quality,
		},
		{ key: 'output_item_quality', value: (e) => e.output_item_quality },
		{ key: 'first_smash_distance', value: (e) => e.first_smash_distance },
		{ key: 'second_smash_distance', value: (e) => e.second_smash_distance },
		{ key: 'third_smash_distance', value: (e) => e.third_smash_distance },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'crafted_item_id', extractor: (e) => e.crafted_item_id },
		{ key: 'item_type_id', extractor: (e) => e.item_def_id },
	];
	return {
		...createIdMapping(
			'smashing_minigame_event',
			event.smashing_minigame_event_id,
		),
		...(await translateBase(
			event,
			'smashing-minigame-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateRuneMinigameEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'rune_minigame_event_time', value: (e) => e.raw_time },
		{ key: 'crafting_cancelled', value: (e) => e.crafting_cancelled },
		{
			key: 'average_input_item_quality',
			value: (e) => e.average_input_item_quality,
		},
		{ key: 'grid_size', value: (e) => e.grid_size },
		{
			key: 'wrong_connections_tried',
			value: (e) => e.wrong_connections_tried,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
	];
	return {
		...createIdMapping('rune_minigame_event', event.rune_minigame_event_id),
		...(await translateBase(
			event,
			'rune-minigame-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateSlicingMinigameEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'slicing_minigame_event_time', value: (e) => e.raw_time },
		{ key: 'crafting_cancelled', value: (e) => e.crafting_cancelled },
		{
			key: 'average_input_item_quality',
			value: (e) => e.average_input_item_quality,
		},
		{ key: 'output_item_quality', value: (e) => e.output_item_quality },
		{ key: 'correct_items_sliced', value: (e) => e.correct_items_sliced },
		{ key: 'correct_items_missed', value: (e) => e.correct_items_missed },
		{
			key: 'incorrect_items_sliced',
			value: (e) => e.incorrect_items_sliced,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'item_id', extractor: (e) => e.crafted_item_id },
	];
	return {
		...createIdMapping(
			'slicing_minigame_event',
			event.slicing_minigame_event_id,
		),
		...(await translateBase(
			event,
			'slicing-minigame-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateBrewingMinigameEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'brewing_minigame_event_time', value: (e) => e.raw_time },
		{ key: 'crafting_cancelled', value: (e) => e.crafting_cancelled },
		{
			key: 'average_input_item_quality',
			value: (e) => e.average_input_item_quality,
		},
		{ key: 'output_item_quality', value: (e) => e.output_item_quality },
		{ key: 'target_temperature', value: (e) => e.target_temperature },
		{ key: 'average_temperature', value: (e) => e.average_temperature },
		{
			key: 'temperature_difference',
			value: (e) => e.temperature_difference,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'item_id', extractor: (e) => e.crafted_item_id },
	];
	return {
		...createIdMapping(
			'brewing_minigame_event',
			event.brewing_minigame_event_id,
		),
		...(await translateBase(
			event,
			'brewing-minigame-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateChallengeHubEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'challenge_hub_event_time', value: (e) => e.raw_time },
		{ key: 'challenge_hub_event_event_id', value: (e) => e.event_id },
		{
			key: 'challenge_hub_event_challenge_name',
			value: (e) => e.challenge_name,
		},
		{ key: 'challenge_hub_event_step_index', value: (e) => e.step_index },
		{ key: 'challenge_hub_event_task_index', value: (e) => e.task_index },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
	];
	return {
		...createIdMapping('challenge_hub_event', event.challenge_hub_event_id),
		...(await translateBase(
			event,
			'challenge-hub-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translatePatchMeasureEvent = async (event, lookups = null) => {
	const fields = [
		{ key: 'patch_id', value: (e) => e.patch_id },
		{ key: 'patch_water_value', value: (e) => e.patch_water_value },
		{ key: 'patch_water_level', value: (e) => e.patch_water_level },
		{ key: 'patch_sun_level', value: (e) => e.patch_sun_level },
		{ key: 'raw_time', value: (e) => e.raw_time },
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'area_id', extractor: (e) => e.location_id },
	];
	return {
		...createIdMapping('patch_measure_event', event.patch_measure_event_id),
		...(await translateBase(
			event,
			'patch-measure-events',
			fields,
			references,
			lookups,
		)),
	};
};
