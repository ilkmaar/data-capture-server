import Joi from 'joi';

export const interactionEventSchema = Joi.object({
	interaction_event_id: Joi.number().integer().required(),
	interaction_event_type: Joi.number().integer().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	creature_id: Joi.string().allow(null).required(),
	input_items: Joi.array()
		.items(
			Joi.object({
				item_id: Joi.number().integer().required(),
				item_def_id: Joi.number().integer().required(),
			}),
		)
		.required(),
	output_items: Joi.array()
		.items(
			Joi.object({
				item_id: Joi.number().integer().required(),
				item_def_id: Joi.number().integer().required(),
			}),
		)
		.required(),
	interaction_event_mood_effect: Joi.number().required(),
	interaction_event_health_effect: Joi.number().required(),
	interaction_event_social_effect: Joi.number().required(),
	interaction_event_level_1: Joi.number().integer().required(),
	interaction_event_level_2: Joi.number().integer().required(),
	interaction_event_level_3: Joi.number().integer().required(),
	location_id: Joi.number().integer().required(),
	patch_id: Joi.string().allow(null).required(),
	interaction_event_event_pos_x: Joi.number().required(),
	interaction_event_event_pos_y: Joi.number().required(),
});

export const foragingActionSchema = interactionEventSchema;
export const craftingActionSchema = interactionEventSchema;
export const givingActionSchema = interactionEventSchema;

export const playerItemInteractionEventSchema = Joi.object({
	player_item_interaction_event_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	player_item_interaction_type_id: Joi.number().integer().required(),
	item_id: Joi.number().integer().required(),
	hidden_item_def_id: Joi.number().integer().required(),
	inventory: Joi.string().required(),
	location_id: Joi.number().integer().required(),
	player_item_interaction_event_pos_x: Joi.number().required(),
	player_item_interaction_event_pos_y: Joi.number().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const directCreatureEventSchema = Joi.object({
	direct_creature_event_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	creature_id: Joi.string().required(),
	from_location_id: Joi.number().integer().required(),
	to_location_id: Joi.number().integer().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const dinerSeatingEventSchema = Joi.object({
	diner_seating_event_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	creature_id: Joi.string().required(),
	seat_id: Joi.number().integer().required(),
	seat_type_id: Joi.number().integer().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const playerManipulateDataEventSchema = Joi.object({
	player_manipulate_data_event_id: Joi.number().integer().required(),
	table_id: Joi.string().required(),
	data_event_type_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	open_from_source_id: Joi.number().allow(null).required(),
	table_name: Joi.string().required(),
	endpoint: Joi.string().required(),
	axis_selected: Joi.string().allow(null).required(),
	axis_selection: Joi.string().allow(null).required(),
	table_being_merged_id: Joi.string().allow(null).required(),
	table_being_merged_name: Joi.string().allow(null).required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const dinerRatingEventSchema = Joi.object({
	diner_rating_event_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	creature_id: Joi.string().required(),
	rating: Joi.number().integer().required(),
	item_id: Joi.number().integer().required(),
	hidden_item_def_id: Joi.number().integer().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const creatureActivityRecordSchema = Joi.object({
	creature_activity_event_id: Joi.number().integer().required(),
	activity_event_type: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	creature_id: Joi.string().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
	location_id: Joi.number().integer().required(),
	creature_activity_event_health_delta: Joi.number().required(),
	creature_activity_event_mood_delta: Joi.number().required(),
	creature_activity_event_social_delta: Joi.number().required(),
});

export const patchEventSchema = Joi.object({
	patch_event_id: Joi.number().integer().required(),
	patch_id: Joi.string().required(),
	patch_event_type: Joi.number().valid(2, 3).required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().allow(null).required(),
	item_id: Joi.number().integer().allow(null).required(),
	creature_id: Joi.string().allow(null).required(),
	patch_event_growth_effect: Joi.number().required(),
	patch_event_shadow_effect: Joi.number().required(),
	patch_event_light_effect: Joi.number().required(),
	patch_event_stability_effect: Joi.number().required(),
	patch_event_level_1: Joi.number().allow(null).required(),
	patch_event_level_2: Joi.number().allow(null).required(),
	patch_event_level_3: Joi.number().allow(null).required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const patchTendingActionSchema = Joi.object({
	patch_event_id: Joi.number().integer().required(),
	patch_id: Joi.string().required(),
	patch_event_type: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().allow(null).required(),
	item_id: Joi.number().integer().allow(null).required(),
	creature_id: Joi.string().required(),
	patch_event_growth_effect: Joi.number().required(),
	patch_event_shadow_effect: Joi.number().required(),
	patch_event_light_effect: Joi.number().required(),
	patch_event_stability_effect: Joi.number().required(),
	patch_event_level_1: Joi.number().allow(null).required(),
	patch_event_level_2: Joi.number().allow(null).required(),
	patch_event_level_3: Joi.number().allow(null).required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const requestBoardActionSchema = Joi.object({
	request_board_action_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	request_id: Joi.number().integer().required(),
	request_board_item_id: Joi.string().required(),
	request_board_action_type_id: Joi.number().integer().required(),
	player_id: Joi.number().integer().allow(null),
	creature_id: Joi.string().allow(null),
	item_id: Joi.number().integer().allow(null),
	hidden_item_def_id: Joi.number().integer().allow(null),
	friendship_bonus: Joi.number().integer().allow(null),
	game_time_id: Joi.number().integer().required(),
});

export const anomalyReadingSchema = Joi.object({
	anomaly_reading_id: Joi.number().integer().required(),
	world_id: Joi.string().required(),
	player_id: Joi.number().integer().required(),
	anomaly_reading_position_x: Joi.number().required(),
	anomaly_reading_position_y: Joi.number().required(),
	anomaly_reading_value: Joi.number().required(),
	anomaly_mapped: Joi.string().required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});
