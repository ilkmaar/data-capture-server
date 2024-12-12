import Joi from "joi";

export const patchHealthSchema = Joi.object({
    world_id: Joi.string().required(),
    patch_health_id: Joi.number().integer().required(),
    patch_id: Joi.string().required(),
    patch_health_growth: Joi.number().required(),
    patch_health_shadow: Joi.number().required(),
    patch_health_light: Joi.number().required(),
    patch_health_stability: Joi.number().required(),
    game_time_id: Joi.number().integer().required(),
    raw_time: Joi.date().iso().required(),
});

export const weatherEventSchema = Joi.object({
    weather_event_id: Joi.number().integer().required(),
    world_id: Joi.string().required(),
    season_id: Joi.number().integer().required(),
    moon_phase_id: Joi.number().integer().required(),
    previous_moon_phase_id: Joi.number().integer().required(),
    weather_event_island: Joi.number().integer().required(),
    sun_type: Joi.number().valid(1, 2).required(),
    rain_type: Joi.number().valid(1, 2).required(),
    day_id: Joi.number().integer().required(),
    raw_time: Joi.date().iso().required(),
});

export const playerMoveEventSchema = Joi.object({
    player_move_event_id: Joi.number().integer().required(),
    world_id: Joi.string().required(),
    player_id: Joi.number().integer().required(),
    move_event_type_id: Joi.number().integer().required(),
    location_id: Joi.number().integer().required(),
    player_move_event_pos_x: Joi.number().required(),
    player_move_event_pos_y: Joi.number().required(),
    game_time_id: Joi.number().integer().required(),
    raw_time: Joi.date().iso().required(),
});

export const creatureMoveEventSchema = Joi.object({
    creature_move_event_id: Joi.number().integer().required(),
    world_id: Joi.string().required(),
    creature_id: Joi.string().required(),
    game_time_id: Joi.number().integer().required(),
    raw_time: Joi.date().iso().required(),
    location_id: Joi.number().integer().required(),
    creature_move_event_pos_x: Joi.number().allow(null).required(),
    creature_move_event_pos_y: Joi.number().allow(null).required(),
    creature_move_event_health: Joi.number().required(),
    creature_move_event_mood: Joi.number().required(),
    creature_move_event_social: Joi.number().required(),
});

export const creatureActivityEventSchema = Joi.object({
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

export const personalReputationSchema = Joi.object({
    personal_rep_id: Joi.number().integer().required(),
    world_id: Joi.string().required(),
    player_id: Joi.number().integer().required(),
    creature_id: Joi.string().required(),
    personal_rep_value: Joi.number().required(),
    game_time_id: Joi.number().integer().required(),
    raw_time: Joi.date().iso().required(),
});

export const factionReputationSchema = Joi.object({
    fac_rep_id: Joi.number().integer().required(),
    faction_id: Joi.number().integer().required(),
    world_id: Joi.string().required(),
    fac_rep_value: Joi.number().required(),
    game_time_id: Joi.number().integer().required(),
    raw_time: Joi.date().iso().required(),
});
