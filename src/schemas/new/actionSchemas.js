import Joi from 'joi';
import {
	idFieldOrNull,
	idFieldSchema,
	timestampSchema,
} from './fieldSchemas.js';

//
// Actions
//

// Foraging action schema
export const foragingActionSchema = Joi.object({
	foraging_action_id: idFieldSchema,
	fv_foraging_action_id: Joi.number().required(),
	foraging_action_time: timestampSchema.required(),

	// data
	foraging_action_x: Joi.number().required(),
	foraging_action_y: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	patch_id: idFieldSchema,
	resource_id: idFieldSchema,
});

// Crafting action schema
export const craftingActionSchema = Joi.object({
	crafting_action_id: idFieldSchema,
	fv_crafting_action_id: Joi.number().required(),
	crafting_action_time: timestampSchema.required(),

	// data
	crafting_action_x: Joi.number().required(),
	crafting_action_y: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	ingredient1_resource_id: idFieldSchema,
	ingredient2_resource_id: idFieldSchema,
	item_id: idFieldSchema,
});

// Gifting action schema
export const givingActionSchema = Joi.object({
	giving_action_id: idFieldSchema,
	fv_giving_action_id: Joi.number().required(),
	giving_action_time: timestampSchema.required(),

	// data
	giving_action_x: Joi.number().required(),
	giving_action_y: Joi.number().required(),
	giving_action_health_effect: Joi.number().required(),
	giving_action_mood_effect: Joi.number().required(),
	giving_action_social_effect: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
	item_id: idFieldSchema,
});

// Patch action schema
export const patchActionSchema = Joi.object({
	patch_action_id: idFieldSchema,
	fv_patch_action_id: Joi.number().required(),
	patch_action_time: timestampSchema.required(),

	// data
	patch_action_growth_effect: Joi.number().required(),
	patch_action_shadow_effect: Joi.number().required(),
	patch_action_light_effect: Joi.number().required(),
	patch_action_stability_effect: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	patch_id: idFieldSchema,
	item_id: Joi.string().allow(null),
});

// Creature direction action schema
export const creatureDirectionActionSchema = Joi.object({
	creature_direction_action_id: idFieldSchema,
	fv_creature_direction_action_id: Joi.number().required(),
	creature_direction_action_time: timestampSchema.required(),

	// data
	creature_direction_action_from_area_id: idFieldSchema,
	creature_direction_action_to_area_id: idFieldSchema,

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
});

// Diner seating action schema
export const dinerSeatingActionSchema = Joi.object({
	diner_seating_action_id: idFieldSchema,
	fv_diner_seating_action_id: Joi.number().required(),
	diner_seating_action_time: timestampSchema.required(),

	diner_seating_action_seating_area: Joi.number().required(),
	diner_seating_action_seat: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
});

// Inventory action schema
export const inventoryActionSchema = Joi.object({
	inventory_action_id: idFieldSchema,
	fv_inventory_action_id: Joi.number().required(),
	inventory_action_time: timestampSchema.required(),

	// data
	inventory_action_type: Joi.string().required(),
	inventory_action_x: Joi.number().required(),
	inventory_action_y: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	item_id: Joi.string().allow(null),
	resource_id: Joi.string().allow(null),
	inventory_id: idFieldSchema,
});

// Data action schema
export const dataActionSchema = Joi.object({
	data_action_id: idFieldSchema,
	fv_data_action_id: Joi.number().required(),
	data_action_time: timestampSchema.required(),

	// data
	data_action_type: Joi.string().required(),
	data_action_table_name: Joi.string().required(),
	data_action_axis: Joi.string().allow(null).required(),
	data_action_variable: Joi.string().allow(null).required(),
	data_action_source: Joi.string().allow(null),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	data_table_id: Joi.string().max(255).required(),
	merged_data_table_id: Joi.string().allow(null),
});

// Diner review action schema
export const dinerReviewActionSchema = Joi.object({
	diner_review_action_id: idFieldSchema,
	fv_diner_review_action_id: Joi.number().required(),
	diner_review_action_time: timestampSchema.required(),

	// data
	diner_review_action_score: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	creature_id: idFieldSchema,
	item_id: idFieldSchema,
});

// Patch tending action schema
export const patchTendingActionSchema = Joi.object({
	patch_tending_action_id: idFieldSchema,
	fv_patch_tending_action_id: Joi.number().required(),
	patch_tending_action_time: timestampSchema.required(),

	// data
	patch_tending_action_growth_effect: Joi.number().required(),
	patch_tending_action_shadow_effect: Joi.number().required(),
	patch_tending_action_light_effect: Joi.number().required(),
	patch_tending_action_stability_effect: Joi.number().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	creature_id: idFieldSchema,
	patch_id: idFieldSchema,
});

export const anomalyReadingSchema = Joi.object({
	anomaly_reading_id: idFieldSchema,
	fv_anomaly_reading_id: Joi.number().required(),
	anomaly_reading_time: timestampSchema.required(),

	// data
	anomaly_reading_x: Joi.number().required(),
	anomaly_reading_y: Joi.number().required(),
	anomaly_reading_value: Joi.number().required(),
	anomaly_mapped: Joi.string().required(),

	// references
	world_id: idFieldSchema,
	player_id: idFieldSchema,
	game_time_id: idFieldSchema,
});

// Request board action schema
export const requestBoardActionSchema = Joi.object({
	request_board_action_id: idFieldSchema,
	fv_request_board_action_id: Joi.number().required(),

	// data
	request_board_action_type: Joi.number().integer().required(),
	friendship_bonus: Joi.number().allow(null),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldOrNull,
	creature_id: idFieldOrNull,
	item_id: idFieldOrNull,
	request_board_item_id: idFieldSchema,
});

export const treatmentActionSchema = Joi.object({
	treatment_action_id: idFieldSchema,
	fv_treatment_action_id: Joi.number().required(),
	treatment_action_time: timestampSchema.required(),

	// data
	treatment_action_health_effect: Joi.number().required(),
	treatment_action_mood_effect: Joi.number().required(),
	treatment_action_social_effect: Joi.number().required(),
	treatment_action_cured: Joi.boolean().required(),
	treatment_action_room_number: Joi.number().integer().required(),
	treatment_action_sickness_category: Joi.number().integer().required(),
	treatment_action_sickness_name: Joi.number().integer().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
	item_id: idFieldSchema,
});

// Avatar update action schema
export const avatarUpdateActionSchema = Joi.object({
	avatar_update_action_id: idFieldSchema,
	fv_avatar_update_action_id: Joi.number().required(),
	avatar_update_action_time: timestampSchema.required(),

	// data
	avatar_update_action_body_type: Joi.number().integer().required(),
	avatar_update_action_height: Joi.number().required(),
	avatar_update_action_face: Joi.number().integer().required(),
	avatar_update_action_eyes: Joi.number().integer().required(),
	avatar_update_action_nose: Joi.number().integer().required(),
	avatar_update_action_mouth: Joi.number().integer().required(),
	avatar_update_action_skin_color: Joi.string().required(),
	avatar_update_action_hairstyle: Joi.number().integer().required(),
	avatar_update_action_hair_color: Joi.string().required(),
	avatar_update_action_outfit: Joi.number().integer().required(),
	avatar_update_action_outfit_color: Joi.string().required(),
	avatar_update_action_glasses: Joi.number().integer().required(),
	avatar_update_action_cane: Joi.number().integer().required(),
	avatar_update_action_prosthetic: Joi.number().integer().required(),
	avatar_update_action_hearing_aid: Joi.number().integer().required(),
	avatar_update_action_diabetes_patch: Joi.number().integer().required(),
	avatar_update_action_goggles: Joi.number().integer().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
});

// New output schema for creature-interaction-events
export const creatureInteractionEventSchema = Joi.object({
	creature_interaction_event_id: idFieldSchema,
	fv_creature_interaction_event_id: Joi.number().required(),
	creature_interaction_event_time: timestampSchema.required(),
	// data
	creature_interaction_event_health: Joi.number().required(),
	creature_interaction_event_mood: Joi.number().required(),
	creature_interaction_event_social: Joi.number().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
	area_id: idFieldSchema,
});

// New output schema for medical-room-send-events
export const medicalRoomSendEventSchema = Joi.object({
	medical_room_send_event_id: idFieldSchema,
	fv_medical_room_send_event_id: Joi.number().required(),
	medical_room_send_event_time: timestampSchema.required(),
	// data
	medical_room_send_event_room_number: Joi.number().integer().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
});

// New output schema for triage-events
export const triageEventSchema = Joi.object({
	triage_event_id: idFieldSchema,
	fv_triage_event_id: Joi.number().required(),
	triage_event_time: timestampSchema.required(),
	// data
	triage_event_sickness_category: Joi.number().integer().required(),
	triage_event_sickness_name: Joi.number().integer().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
});

// New output schema for patch-measure-events
export const patchMeasureEventSchema = Joi.object({
	patch_measure_event_id: idFieldSchema,
	fv_patch_measure_event_id: Joi.number().required(),
	patch_measure_event_time: timestampSchema.required(),
	// data
	patch_measure_value: Joi.number().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
});

// Updated output schema for creature-stats-events to allow player_id to be optional
export const creatureStatsEventSchema = Joi.object({
	creature_stats_event_id: idFieldSchema,
	fv_creature_stats_event_id: Joi.number().required(),
	creature_stats_event_time: timestampSchema.required(),
	// data
	creature_health: Joi.number().required(),
	creature_mood: Joi.number().required(),
	creature_social: Joi.number().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldOrNull,
	creature_id: idFieldSchema,
});

// New output schema for sickness-events
export const sicknessEventSchema = Joi.object({
	sickness_event_id: idFieldSchema,
	fv_sickness_event_id: Joi.number().required(),
	sickness_event_time: timestampSchema.required(),
	// data
	sickness_event_category: Joi.number().integer().required(),
	sickness_event_area_id: idFieldSchema,
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	creature_id: idFieldSchema,
});

// New output schema for player-trade-item-events
export const playerTradeItemEventSchema = Joi.object({
	player_trade_item_event_id: idFieldSchema,
	fv_player_trade_item_event_id: Joi.number().required(),
	player_trade_item_event_time: timestampSchema.required(),
	// data
	player_trade_item_event_pos_x: Joi.number().required(),
	player_trade_item_event_pos_y: Joi.number().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	receiving_player_id: idFieldSchema,
	item_id: idFieldSchema,
	area_id: idFieldSchema,
});

// New output schema for smashing-minigame-events
export const smashingMinigameEventSchema = Joi.object({
	smashing_minigame_event_id: idFieldSchema,
	fv_smashing_minigame_event_id: Joi.number().required(),
	smashing_minigame_event_time: timestampSchema.required(),
	// data
	crafting_cancelled: Joi.boolean().required(),
	average_input_item_quality: Joi.number().required(),
	output_item_quality: Joi.number().required(),
	first_smash_distance: Joi.number().required(),
	second_smash_distance: Joi.number().required(),
	third_smash_distance: Joi.number().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	crafted_item_id: idFieldSchema,
	hidden_item_def_id: idFieldSchema,
});

// New output schema for rune-minigame-events
export const runeMinigameEventSchema = Joi.object({
	rune_minigame_event_id: idFieldSchema,
	fv_rune_minigame_event_id: Joi.number().required(),
	rune_minigame_event_time: timestampSchema.required(),
	// data
	crafting_cancelled: Joi.boolean().required(),
	average_input_item_quality: Joi.number().required(),
	grid_size: Joi.number().integer().required(),
	wrong_connections_tried: Joi.number().integer().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
});

// New output schema for slicing-minigame-events
export const slicingMinigameEventSchema = Joi.object({
	slicing_minigame_event_id: idFieldSchema,
	fv_slicing_minigame_event_id: Joi.number().required(),
	slicing_minigame_event_time: timestampSchema.required(),
	// data
	crafting_cancelled: Joi.boolean().required(),
	average_input_item_quality: Joi.number().required(),
	output_item_quality: Joi.number().required(),
	correct_items_sliced: Joi.number().integer().required(),
	correct_items_missed: Joi.number().integer().required(),
	incorrect_items_sliced: Joi.number().integer().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	crafted_item_id: idFieldSchema,
	hidden_item_def_id: idFieldSchema,
});

// New output schema for brewing-minigame-events
export const brewingMinigameEventSchema = Joi.object({
	brewing_minigame_event_id: idFieldSchema,
	fv_brewing_minigame_event_id: Joi.number().required(),
	brewing_minigame_event_time: timestampSchema.required(),
	// data
	crafting_cancelled: Joi.boolean().required(),
	average_input_item_quality: Joi.number().required(),
	output_item_quality: Joi.number().required(),
	target_temperature: Joi.number().required(),
	average_temperature: Joi.number().required(),
	temperature_difference: Joi.number().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
	crafted_item_id: idFieldSchema,
	hidden_item_def_id: idFieldSchema,
});

// New output schema for challenge-hub-events
export const challengeHubEventSchema = Joi.object({
	challenge_hub_event_id: idFieldSchema,
	fv_challenge_hub_event_id: Joi.number().required(),
	challenge_hub_event_time: timestampSchema.required(),
	// data
	challenge_hub_event_event_id: Joi.string().required(),
	challenge_hub_event_challenge_name: Joi.string().required(),
	challenge_hub_event_step_index: Joi.number().integer().required(),
	challenge_hub_event_task_index: Joi.number().integer().required(),
	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	player_id: idFieldSchema,
});
