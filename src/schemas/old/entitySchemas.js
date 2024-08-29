import Joi from 'joi';

export const worldSchema = Joi.object({
	world_id: Joi.string().required(),
	created_date: Joi.date().iso().required(),
	players: Joi.array(),
	creatures: Joi.array(),
});

export const playerSchema = Joi.object({
	player_id: Joi.number().integer().required(),
	player_name: Joi.string().required(),
	world_id: Joi.string().required(),
});

export const creatureSchema = Joi.object({
	creature_id: Joi.string().max(64).required(),
	creature_name: Joi.string().required(),
	faction_id: Joi.number().integer().required(),
	color_id: Joi.number().integer().required(),
	creature_type_id: Joi.number().integer().required(),
	created_date: Joi.date().iso().required(),
	world_id: Joi.string().required(),
});

export const resourceSchema = Joi.object({
	item_id: Joi.number().integer().required(),
	item_def_id: Joi.number().integer().required(),
	item_value: Joi.number().integer().required(),
	item_quality: Joi.number().integer().required(),
	created_date: Joi.date().iso().required(),
	world_id: Joi.string().required(),
});

export const itemSchema = Joi.object({
	item_id: Joi.number().integer().required(),
	item_def_id: Joi.number().integer().required(),
	item_value: Joi.number().integer().required(),
	item_quality: Joi.number().integer().required(),
	is_anomalous: Joi.number().integer().valid(0, 1).required(),
	created_date: Joi.date().iso().required(),
	world_id: Joi.string().required(),
});

export const inventorySchema = Joi.object({
	inventory_id: Joi.string().required(),
	inventory_name: Joi.string().required(),
});

export const dataTableSchema = Joi.object({
	player_manipulate_data_event_id: Joi.number().integer().required(),

	table_id: Joi.string().required(),
	world_id: Joi.string().required(),
	table_name: Joi.string().required(),

	data_event_type_id: Joi.number().integer().required(),
	player_id: Joi.number().integer().required(),
	open_from_source_id: Joi.number().allow(null).required(),
	endpoint: Joi.string().required(),
	axis_selected: Joi.string().allow(null).required(),
	axis_selection: Joi.string().allow(null).required(),
	table_being_merged_id: Joi.string().allow(null).required(),
	table_being_merged_name: Joi.string().allow(null).required(),
	game_time_id: Joi.number().integer().required(),
	raw_time: Joi.date().iso().required(),
});

export const requestBoardItemSchema = Joi.object({
	request_board_item_id: Joi.string().required(),
	world_id: Joi.string().required(),
	target_type: Joi.string().required(),
	creature_id: Joi.string().allow(null).required(),
	request_id: Joi.number().integer().required(),
	request_type: Joi.string().required(),
	request_item_def_id: Joi.number().allow(null).integer(),
	request_amount: Joi.number().integer().required(),
	reward_item_def_id: Joi.number().integer().required(),
	reward_item_quality: Joi.number().integer().required(),
	game_time_id: Joi.number().integer().required(),
	request_time_length: Joi.number().integer().required(),
});
