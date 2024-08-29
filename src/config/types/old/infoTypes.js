import schemas from '../../../schemas/old/index.js';
import localData from '../../localData.js';
import * as routers from '../../../middleware/routeMiddleware.js';
import * as testData from '../../../../tests/testData.js';
import { EXTERNAL_URL } from '../../index.js';

import { createItemVarietyIdLookup } from '../../../utils/specialLookups.js';

const oldInfoDataTypes = {
	colors: {
		externalUrl: `${EXTERNAL_URL}colors/`,
		schema: schemas.colorSchema,
		newTypes: ['colors'],
		testData: [testData.color],
	},
	factions: {
		externalUrl: `${EXTERNAL_URL}factions/`,
		schema: schemas.factionSchema,
		newTypes: ['factions'],
		testData: [testData.faction],
	},
	'creature-types': {
		externalUrl: `${EXTERNAL_URL}creature-types/`,
		schema: schemas.creatureTypeSchema,
		newTypes: ['creature-types'],
		testData: [testData.creatureType],
	},
	'activity-types': {
		localData: localData['activity-types'],
		schema: schemas.activityTypeSchema,
		newTypes: ['activity-types'],
		testData: [testData.activityType],
	},
	'resource-categories': {
		externalUrl: `${EXTERNAL_URL}resource-categories/`,
		schema: schemas.resourceCategorySchema,
		newTypes: ['resource-categories'],
		testData: [testData.resourceCategory],
	},
	'item-categories': {
		localData: localData['item-categories'],
		schema: schemas.itemCategorySchema,
		newTypes: ['item-categories'],
		testData: [testData.itemCategory],
	},
	'resource-types': {
		externalUrl: `${EXTERNAL_URL}resource-types/`,
		schema: schemas.resourceTypeSchema,
		newTypes: ['resource-varieties'],
		testData: [testData.resourceType],
	},
	'item-varieties': {
		localData: localData['item-varieties'],
		schema: schemas.itemVarietySchema,
		newTypes: ['item-varieties'],
		testData: [testData.itemVariety],
		lookupFields: [
			{
				fieldName: 'item_category_id',
				newFieldName: 'item_category_id',
				table: 'item_categories',
				externalIdField: 'fv_item_category_id',
				internalIdField: 'item_category_id',
				requiresWorldId: false,
			},
		],
	},
	'item-definitions': {
		externalUrl: `${EXTERNAL_URL}item-definitions/`,
		router: routers.routeItemDefinitions,
		schema: schemas.itemDefinitionSchema,
		newTypes: ['item-types', 'resource-types'],
		testData: [testData.itemDefinition1, testData.itemDefinition2],
		lookupFields: [
			{
				fieldName: 'resource_category_id',
				newFieldName: 'resource_category_id',
				table: 'resource_categories',
				externalIdField: 'fv_resource_category_id',
				internalIdField: 'resource_category_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'resource_type_id',
				newFieldName: 'resource_variety_id',
				table: 'resource_varieties',
				externalIdField: 'fv_resource_variety_id',
				internalIdField: 'resource_variety_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'item_category_id',
				newFieldName: 'item_category_id',
				table: 'item_categories',
				externalIdField: 'fv_item_category_id',
				internalIdField: 'item_category_id',
				requiresWorldId: false,
			},
		],
		specialLookups: [createItemVarietyIdLookup],
	},
	islands: {
		localData: localData.islands,
		schema: schemas.islandSchema,
		newTypes: ['islands'],
		testData: [localData.islands[0]],
	},
	locations: {
		externalUrl: `${EXTERNAL_URL}locations/`,
		schema: schemas.locationSchema,
		newTypes: ['areas'],
		testData: [testData.location],
		lookupFields: [
			{
				fieldName: 'location_creature_activity_type',
				newFieldName: 'activity_type_id',
				table: 'activity_types',
				externalIdField: 'fv_activity_type_id',
				internalIdField: 'activity_type_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'location_island',
				newFieldName: 'island_id',
				table: 'islands',
				externalIdField: 'fv_island_id',
				internalIdField: 'island_id',
				requiresWorldId: false,
			},
		],
	},
	plots: {
		externalUrl: `${EXTERNAL_URL}plots/`,
		schema: schemas.plotSchema,
		newTypes: ['plots'],
		testData: [testData.plot],
		lookupFields: [
			{
				fieldName: 'location_id',
				newFieldName: 'area_id',
				table: 'areas',
				externalIdField: 'fv_area_id',
				internalIdField: 'area_id',
				requiresWorldId: false,
			},
		],
	},
	patches: {
		externalUrl: `${EXTERNAL_URL}patches/`,
		schema: schemas.patchSchema,
		newTypes: ['patches'],
		testData: [testData.patch],
		lookupFields: [
			{
				fieldName: 'plot_id',
				newFieldName: 'plot_id',
				table: 'plots',
				externalIdField: 'fv_plot_id',
				internalIdField: 'plot_id',
				requiresWorldId: false,
			},
		],
	},
};

export default oldInfoDataTypes;
