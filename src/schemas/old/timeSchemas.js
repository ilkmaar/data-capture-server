import Joi from 'joi';

export const daySchema = Joi.object({
    day_id: Joi.number().integer().required(),
    day_name: Joi.string().required()
});

export const timeOfDaySchema = Joi.object({
    time_of_day_id: Joi.number().integer().required(),
    time_of_day_name: Joi.string().required()
});

export const seasonSchema = Joi.object({
    season_id: Joi.number().integer().required(),
    season_name: Joi.string().required()
});

export const gameTimeSchema = Joi.object({
    game_time_id: Joi.number().integer().required(),
    day_id: Joi.number().integer().required(),
    time_of_day_id: Joi.number().integer().required(),
    season_id: Joi.number().integer().required()
});