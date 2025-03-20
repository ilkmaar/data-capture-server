// utils/routingLogic.js
import { lookupIsResource } from './valueLookups.js';

const routeInteractionEvent = (event) => {
	switch (event.interaction_event_type) {
		case 1:
			return {
				newType: 'foraging-actions',
			};
		case 2:
			return {
				newType: 'crafting-actions',
			};
		case 3:
		case 4:
		case 5:
			return {
				newType: 'giving-actions',
			};
		default:
			throw new Error('Invalid interaction_event_type');
	}
};

const routePatchEvent = (event) => {
	switch (event.patch_event_type) {
		case 3:
			return {
				newType: 'patch-actions',
			};
		case 2:
			return {
				newType: 'patch-tending-actions',
			};
		case 1:
			return {
				newType: 'patch-actions',
			};
		default:
			throw new Error('Invalid patch_event_type: ', event);
	}
};

const routeItemDefinition = (itemDef) => {
	const isResource = lookupIsResource(itemDef.item_def_id);
	if (isResource) {
		return {
			newType: 'resource-types',
		};
	} else {
		return {
			newType: 'item-types',
		};
	}
};

const routeItem = (item) => {
	const isResource = lookupIsResource(item.item_def_id);
	switch (isResource) {
		case 1:
			return {
				newType: 'resources',
			};
		case 0:
			return {
				newType: 'items',
			};
		default:
			throw new Error('Invalid item_type_id');
	}
};

const routeEvent = (dataType, event) => {
	switch (dataType) {
		case 'interaction-events':
			return routeInteractionEvent(event);
		case 'patches-events':
			return routePatchEvent(event);
		case 'item-definitions':
			return routeItemDefinition(event);
		case 'items':
			return routeItem(event);
		default:
			throw new Error(`Unsupported data type for routing: ${dataType}`);
	}
};

export default routeEvent;
