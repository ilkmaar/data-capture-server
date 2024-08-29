import Joi from 'joi';
import {
	idFieldSchema,
	idFieldOrNull,
	shortTextStringSchema,
	timestampSchema,
} from './fieldSchemas.js';

//
// Entities
//

// World schema
export const worldSchema = Joi.object({
	world_id: idFieldSchema,
	fv_world_id: Joi.string().max(255).required(),

	// data
	world_created_date: timestampSchema.required(),
	world_name: Joi.string().required(),
});

// Player schema
export const playerSchema = Joi.object({
	player_id: idFieldSchema,
	fv_player_id: Joi.number().integer().positive().required(),

	// data
	player_name: Joi.string().required(),

	// references
	world_id: idFieldSchema,
});

// Creature schema
export const creatureSchema = Joi.object({
	creature_id: idFieldSchema,
	fv_creature_id: shortTextStringSchema.required(),

	// data
	creature_created_date: timestampSchema.required(),
	creature_name: shortTextStringSchema.required(),

	// references
	world_id: idFieldSchema,
	color_id: idFieldSchema,
	creature_type_id: idFieldSchema,
	faction_id: idFieldSchema,
});

// Resource schema
export const resourceSchema = Joi.object({
	resource_id: idFieldSchema,
	fv_resource_id: Joi.number().integer().required(),

	// data
	resource_created_date: timestampSchema.required(),
	resource_quality: Joi.number().integer().min(0).max(100).required(),

	// references
	world_id: idFieldSchema,
	resource_type_id: idFieldSchema,
});

// Item schema
export const itemSchema = Joi.object({
	item_id: idFieldSchema,
	fv_item_id: Joi.number().integer().required(),

	// data
	item_created_date: timestampSchema.required(),
	item_quality: Joi.number().integer().min(0).max(100).required(),

	// references
	world_id: idFieldSchema,
	item_type_id: idFieldSchema,
});

// Inventory schema
export const inventorySchema = Joi.object({
	inventory_id: idFieldSchema,
	fv_inventory_id: idFieldSchema,

	// data
	inventory_name: shortTextStringSchema,
});

export const dataTableSchema = Joi.object({
	data_table_id: Joi.string().max(255).required(),
	fv_data_table_id: idFieldSchema,

	// data
	data_table_name: shortTextStringSchema,

	// references
	world_id: idFieldSchema,
});

export const requestBoardItem = {
	request_board_item_id: 'ISLES_247_20',
	world_id: 'ISLES_247',
	request_id: 20,

	target_type: 'Specific Creature',
	creature_id: '68410b58-5742-4ed1-9caf-eb444b5b67a3',

	request_type: 'Specific Item Type',
	request_item_def_id: 28,
	request_amount: 2,

	reward_item_def_id: 46,
	reward_item_quality: 100,
	game_time_id: 16,
	request_time_length: 7,
};

export const requestBoardItemSchema = Joi.object({
	request_board_item_id: idFieldSchema,
	fv_request_board_item_id: Joi.string().max(255).required(),

	// request data
	request_board_item_request_id: Joi.number().integer().required(),
	request_board_item_request_type: shortTextStringSchema,
	request_board_item_target_type: shortTextStringSchema,
	request_board_item_request_duration: Joi.number().integer().required(),
	request_board_item_requested_quantity: Joi.number()
		.integer()
		.min(0)
		.required(),
	request_board_item_reward_item_quality: Joi.number().integer().required(),

	// references
	world_id: idFieldSchema,
	game_time_id: idFieldSchema,
	creature_id: idFieldOrNull,
	request_board_item_requested_item_type_id: idFieldOrNull,
	request_board_item_requested_resource_type_id: idFieldOrNull,
	request_board_item_reward_item_type_id: idFieldOrNull,
	request_board_item_reward_resource_type_id: idFieldOrNull,
});
