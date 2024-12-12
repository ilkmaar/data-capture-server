import Joi from "joi";
import { ID_STRING_MAX } from "../../config/index.js";

// Helper schemas
const externalIdSchema = Joi.string().max(255);
const timestampSchema = Joi.date().iso();
const idFieldSchema = Joi.string().max(ID_STRING_MAX).required();
const shortTextStringSchema = Joi.string().max(255);

//
// Info
//

// Color schema
export const colorSchema = Joi.object({
    color_id: idFieldSchema,
    fv_color_id: Joi.number().integer().positive().required(),

    // data
    color_name: shortTextStringSchema,
});

// Creature type schema
export const creatureTypeSchema = Joi.object({
    creature_type_id: idFieldSchema,
    fv_creature_type_id: Joi.number().integer().required(),

    // data
    creature_type_name: shortTextStringSchema,
});

// Faction schema
export const factionSchema = Joi.object({
    faction_id: idFieldSchema,
    fv_faction_id: Joi.number().integer().required(),

    // data
    faction_name: shortTextStringSchema,
});

// Activity type schema
export const activityTypeSchema = Joi.object({
    activity_type_id: idFieldSchema,
    fv_activity_type_id: Joi.number().integer().required(),

    // data
    activity_type_name: shortTextStringSchema,
});

// Island schema
export const islandSchema = Joi.object({
    island_id: idFieldSchema,
    fv_island_id: Joi.number().integer().required(),

    // data
    island_name: shortTextStringSchema,
});

// Area schema
export const areaSchema = Joi.object({
    area_id: idFieldSchema,
    fv_area_id: Joi.number().integer().required(),

    // data
    area_name: shortTextStringSchema,
    area_x: Joi.number().required(),
    area_y: Joi.number().required(),

    // references
    island_id: idFieldSchema.optional(),
    activity_type_id: idFieldSchema,
});

// Plot schema
export const plotSchema = Joi.object({
    plot_id: idFieldSchema,
    fv_plot_id: shortTextStringSchema,

    // references
    area_id: idFieldSchema,
});

// Patch schema
export const patchSchema = Joi.object({
    patch_id: idFieldSchema,
    fv_patch_id: shortTextStringSchema,

    // references
    plot_id: idFieldSchema,
});

// Item category schema
export const itemCategorySchema = Joi.object({
    item_category_id: idFieldSchema,
    fv_item_category_id: Joi.number().integer().positive().required(),

    // data
    item_category_name: shortTextStringSchema,
});

// Resource category schema
export const resourceCategorySchema = Joi.object({
    resource_category_id: idFieldSchema,

    // non negative number
    fv_resource_category_id: Joi.number().integer().min(0),

    // data
    resource_category_name: shortTextStringSchema,
});

// Item variety schema
export const itemVarietySchema = Joi.object({
    item_variety_id: idFieldSchema,
    fv_item_variety_id: Joi.number().integer().required(),

    // data
    item_variety_name: shortTextStringSchema,

    // references
    item_category_id: idFieldSchema,
});

// Resource variety schema
export const resourceVarietySchema = Joi.object({
    resource_variety_id: idFieldSchema,
    fv_resource_variety_id: Joi.number().integer().valid(0, 1, 2, 3),

    // data
    resource_variety_name: shortTextStringSchema,
});

// Resource type schema
export const resourceTypeSchema = Joi.object({
    resource_type_id: idFieldSchema,
    fv_resource_type_id: Joi.number().integer().min(0).max(15).required(),

    // data
    resource_type_name: shortTextStringSchema,

    // references
    resource_category_id: idFieldSchema,
    resource_variety_id: idFieldSchema,
});

// Item type schema
export const itemTypeSchema = Joi.object({
    item_type_id: idFieldSchema,
    fv_item_type_id: Joi.number().integer().required(),

    // data
    item_type_name: shortTextStringSchema,

    // references
    item_category_id: idFieldSchema,
    item_variety_id: idFieldSchema,
});
