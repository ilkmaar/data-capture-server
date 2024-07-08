import Joi from 'joi';

export const colorSchema = Joi.object({
    color_id: Joi.number().integer().required(),
    color_name: Joi.string().required()
});

export const creatureTypeSchema = Joi.object({
    creature_type_id: Joi.number().integer().required(),
    creature_type_name: Joi.string().required()
});

export const factionSchema = Joi.object({
    faction_id: Joi.number().integer().required(),
    faction_name: Joi.string().required()
});

export const activityTypeSchema = Joi.object({
    activity_type_id: Joi.number().integer().required(),
    activity_type_name: Joi.string().required()
});

export const resourceCategorySchema = Joi.object({
    resource_category_id: Joi.number().integer().valid(0, 1, 2, 3).required(),
    resource_category_name: Joi.string().required()
});

export const itemCategorySchema = Joi.object({
    item_category_id: Joi.number().integer().valid(2, 4, 8, 16).required(),
    item_category_name: Joi.string().required()
});

export const resourceTypeSchema = Joi.object({
    resource_type_id: Joi.number().integer().valid(0, 1, 2, 3).required(),
    resource_type_name: Joi.string().required()
});

export const itemVarietySchema = Joi.object({
    item_variety_id: Joi.number().integer().required(),
    item_variety_name: Joi.string().required(),
    item_category_id: Joi.number().integer().required()
});

export const itemDefinitionSchema = Joi.object({
    item_def_id: Joi.number().integer().required(),
    item_category_id: Joi.number().integer().required(),
    resource_category_id: Joi.number().integer().required(),
    resource_type_id: Joi.number().integer().required(),
    item_attribute_1_id: Joi.number().integer().required(),
    item_attribute_2_id: Joi.number().integer().required(),
    item_def_name: Joi.string().required()
});

export const islandSchema = Joi.object({
    island_id: Joi.number().integer().required(),
    island_name: Joi.string().required()
});

export const locationSchema = Joi.object({
    location_id: Joi.number().integer().required(),
    location_name: Joi.string().required(),
    location_creature_activity_type: Joi.number().integer().required(),
    location_island: Joi.number().integer().required(),
    location_position_x: Joi.number().required(),
    location_position_y: Joi.number().required()
});

export const plotSchema = Joi.object({
    plot_id: Joi.string().required(),
    location_id: Joi.number().integer().required()
});

export const patchSchema = Joi.object({
    patch_id: Joi.string().required(),
    plot_id: Joi.string().required()
});