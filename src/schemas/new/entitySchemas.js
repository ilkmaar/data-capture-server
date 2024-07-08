import Joi from 'joi';
import { ID_STRING_MAX } from '../../config/index.js';

// Helper schemas
const timestampSchema = Joi.date().iso();
const idFieldSchema = Joi.string().max(ID_STRING_MAX).required();
const longIdFieldSchema = Joi.string().max(255).required();
const shortTextStringSchema = Joi.string().max(64);

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
    fv_creature_id: Joi.string().max(ID_STRING_MAX).required(),

    // data
    creature_created_date: timestampSchema.required(),
    creature_name: Joi.string().max(ID_STRING_MAX).required(),

    // references
    world_id: idFieldSchema,
    color_id: idFieldSchema,
    creature_type_id: idFieldSchema,
    faction_id: idFieldSchema
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