import Joi from 'joi';
const ID_STRING_MAX = 64;

// Helper schemas
export const externalIdSchema = Joi.string().max(255);
export const timestampSchema = Joi.date().iso();

export const shortTextStringSchema = Joi.string().max(64);
export const idFieldOrNull = Joi.string().max(ID_STRING_MAX).allow(null);
export const idFieldSchema = Joi.string().max(ID_STRING_MAX).required();
