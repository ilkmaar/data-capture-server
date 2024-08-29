import { lookupIdsForSingle } from './dbLookup.js';

// Helper function to get IDs
export const getIds = async (data, lookupType, lookups) => {
	return lookups ? lookups : await lookupIdsForSingle(data, lookupType);
};

// Create ID mapping
export const createIdMapping = (prefix, id) => ({
	[`${prefix}_id`]: `${prefix}_${id}`,
	[`fv_${prefix}_id`]: id,
});

// Helper function to translate common fields
export const translateCommonFields = (
	data,
	ids,
	fields,
	references,
	logging = false,
) => {
	let result = {};

	fields.forEach((field) => {
		result[field.key] = field.value(data);
	});

	references.forEach((ref) => {
		const dataValue = ref.extractor(data);
		const lookupValue = ref.requiresWorld
			? `${dataValue}_${data.world_id}`
			: dataValue;

		if (lookupValue !== null) {
			const idKey = ref.keyOverride ? ref.keyOverride : ref.key;
			result[ref.key] = ids[idKey][lookupValue];
		}
	});

	return result;
};

// Base translation function
export const translateBase = async (
	data,
	lookupType,
	fields,
	references,
	lookups = null,
) => {
	let logging = false;
	const ids = await getIds(data, lookupType, lookups);
	if (lookupType === 'request-board-actions') {
		logging = true;
	}
	return translateCommonFields(data, ids, fields, references, logging);
};
