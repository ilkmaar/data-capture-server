import Joi from 'joi';
import { idFieldSchema, shortTextStringSchema } from './fieldSchemas.js';

//
// Time
//

// Day schema
export const daySchema = Joi.object({
	day_id: idFieldSchema,
	fv_day_id: Joi.number().integer().positive().required(),

	// data
	day_number: Joi.number().integer().min(0).required(),
	day_name: shortTextStringSchema,
});

// Time of day schema
export const timeOfDaySchema = Joi.object({
	time_of_day_id: idFieldSchema,
	fv_time_of_day_id: Joi.number().integer().min(0).required(),

	// data
	time_of_day_name: shortTextStringSchema,
});

// Season schema
export const seasonSchema = Joi.object({
	season_id: idFieldSchema,
	fv_season_id: Joi.number().integer().min(0).required(),

	// data
	season_name: shortTextStringSchema,
});

export const gameTimeSchema = Joi.object({
	game_time_id: idFieldSchema,
	fv_game_time_id: Joi.number().integer().min(0).required(),

	// data
	game_time_number: Joi.number().integer().min(0).required(),

	// references
	day_id: idFieldSchema,
	time_of_day_id: idFieldSchema,
	season_id: idFieldSchema,
});
