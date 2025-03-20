import { lookupIdsForSingle } from './dbLookup.js';

// Helper function to get IDs
export const getIds = async (data, lookupType, lookups) => {
	return lookups ? lookups : await lookupIdsForSingle(data, lookupType);
};

// Create ID mapping
export const createIdMapping = (prefix, id, worldId) => ({
	[`${prefix}_id`]: `${prefix}_${id}${worldId ? `_${worldId}` : ''}`,
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
			if (logging) {
				// console.log('idKey: ', idKey);
				// console.log('lookupValue: ', lookupValue);
				// console.log('ids: ', ids);
			}
			result[ref.key] = ids[idKey][lookupValue];
			if (logging) {
				//console.log('result[ref.key]: ', result[ref.key]);
			}
		}
	});

	if (logging) {
		// console.log('result: ', result);
	}

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
	if (lookupType === 'player-item-interaction-events') {
		//console.log('ids: ', ids);
		logging = true;
	}
	return translateCommonFields(data, ids, fields, references, logging);
};
