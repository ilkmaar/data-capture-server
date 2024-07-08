import Joi from 'joi';
import { ID_STRING_MAX } from '../../config/index.js';

const timestampSchema = Joi.date().iso();
const idFieldSchema = Joi.string().max(ID_STRING_MAX).required();
const shortTextStringSchema = Joi.string().max(255);

//
// Records
//

// Player location record schema
export const playerLocationRecordSchema = Joi.object({
    player_location_record_id: idFieldSchema,
    fv_player_location_record_id: Joi.number().required(),
    player_location_record_time: timestampSchema.required(),

    // data
    player_location_record_x: Joi.number().required(),
    player_location_record_y: Joi.number().required(),

    // references
    world_id: idFieldSchema,
    game_time_id: idFieldSchema,
    player_id: idFieldSchema,
    area_id: idFieldSchema,
});

// Creature state record schema
export const creatureStateRecordSchema = Joi.object({
    creature_state_record_id: idFieldSchema,
    fv_creature_state_record_id: Joi.number().integer().positive().required(),
    creature_state_record_time: timestampSchema.required(),

    // data
    creature_state_record_health: Joi.number().min(0).max(100).required(),
    creature_state_record_mood: Joi.number().min(0).max(100).required(),
    creature_state_record_social: Joi.number().min(0).max(100).required(),

    // references
    world_id: idFieldSchema,
    creature_id: idFieldSchema,
    area_id: idFieldSchema,
});

// Creature activity record schema
export const creatureActivityRecordSchema = Joi.object({
    creature_activity_record_id: idFieldSchema,
    fv_creature_activity_record_id: Joi.number().integer().positive().required(),
    creature_activity_record_time: timestampSchema.required(),

    // data
    creature_activity_record_health_change: Joi.number().required(),
    creature_activity_record_mood_change: Joi.number().required(),
    creature_activity_record_social_change: Joi.number().required(),

    // references
    world_id: idFieldSchema,
    creature_id: idFieldSchema,
    game_time_id: idFieldSchema,
    area_id: idFieldSchema,
    activity_type_id: idFieldSchema,
});

// Patch health record schema
export const patchHealthRecordSchema = Joi.object({
    patch_health_record_id: idFieldSchema,
    fv_patch_health_record_id: Joi.number().integer().positive().required(),
    patch_health_record_time: timestampSchema.required(),

    // data
    patch_health_record_growth_level: Joi.number().min(0).max(100).required(),
    patch_health_record_light_level: Joi.number().min(0).max(100).required(),
    patch_health_record_shadow_level: Joi.number().min(0).max(100).required(),
    patch_health_record_stability_level: Joi.number().min(0).max(100).required(),

    // references
    world_id: idFieldSchema,
    patch_id: idFieldSchema,
    game_time_id: idFieldSchema,
});

// Weather record schema
export const weatherRecordSchema = Joi.object({
    weather_record_id: idFieldSchema,
    fv_weather_record_id: Joi.number().integer().positive().required(),
    weather_record_time: timestampSchema.required(),

    // data
    weather_record_sun_type: shortTextStringSchema,
    weather_record_rain_type: shortTextStringSchema,

    // references
    world_id: idFieldSchema,
    day_id: idFieldSchema,
    island_id: idFieldSchema,
});

// Friendship schema
export const friendshipRecordSchema = Joi.object({
    friendship_record_id: idFieldSchema,
    fv_friendship_record_id: Joi.number().integer().positive().required(),
    friendship_record_time: timestampSchema.required(),

    // data
    friendship_level: Joi.number().min(0).max(100).required(),

    // references
    world_id: idFieldSchema,
    game_time_id: idFieldSchema,
    player_id: idFieldSchema,
    creature_id: idFieldSchema,
});