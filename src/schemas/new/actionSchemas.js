import Joi from "joi";
import { ID_STRING_MAX } from "../../config/index.js";

// Helper schemas
const timestampSchema = Joi.date().iso();
const idFieldSchema = Joi.string().max(ID_STRING_MAX).required();
const idOrNullFieldSchema = Joi.string()
    .max(ID_STRING_MAX)
    .allow(null)
    .required();

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

export const treatmentActionSchema = Joi.object({
    treatment_action_id: idFieldSchema,
    fv_treatment_action_id: Joi.number().required(),
    treatment_action_time: timestampSchema.required(),

    // data
    treatment_action_health_effect: Joi.number().required(),
    treatment_action_mood_effect: Joi.number().required(),
    treatment_action_social_effect: Joi.number().required(),
    treatment_action_cured: Joi.boolean().required(),
    treatment_action_room_id: Joi.number().integer().required(),
    treatment_action_sickness_category: Joi.string().required(),
    treatment_action_sickness_name: Joi.string().required(),

    // references
    world_id: idFieldSchema,
    game_time_id: idFieldSchema,
    player_id: idFieldSchema,
    creature_id: idFieldSchema,
    item_id: idFieldSchema,
});
