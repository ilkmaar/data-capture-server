import { lookupItemVarietyId } from './valueLookups.js';
import routeEvent from './routingLogic.js';

export const createItemVarietyIdLookup = (item) => {
	const varietyId = lookupItemVarietyId(item.item_def_name);
	return [
		{
			newFieldName: 'item_variety_id',
			value: varietyId,
			requiresWorldId: false,
		},
	];
};

export const createResourceAndItemIdLookup = (event) => {
	const { newType } = routeEvent('interaction-events', event);
	const fieldsValuesToAdd = [];

	if (newType === 'foraging-actions') {
		if (event.output_items[0]) {
			fieldsValuesToAdd.push({
				newFieldName: 'resource_id',
				value: event.output_items[0].item_id,
				requiresWorldId: true,
			});
		}
	}

	if (newType === 'crafting-actions') {
		if (event.input_items[0]) {
			fieldsValuesToAdd.push({
				newFieldName: 'resource_id',
				value: event.input_items[0].item_id,
				requiresWorldId: true,
			});
		}

		if (event.input_items[1]) {
			fieldsValuesToAdd.push({
				newFieldName: 'resource_id',
				value: event.input_items[1].item_id,
				requiresWorldId: true,
			});
		}

		if (event.output_items[0]) {
			fieldsValuesToAdd.push({
				newFieldName: 'item_id',
				value: event.output_items[0].item_id,
				requiresWorldId: true,
			});
		}
	}

	if (newType === 'giving-actions') {
		if (event.input_items[0]) {
			fieldsValuesToAdd.push({
				newFieldName: 'item_id',
				value: event.input_items[0].item_id,
				requiresWorldId: true,
			});
		}
	}

	return fieldsValuesToAdd;
};
