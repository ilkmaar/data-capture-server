import schemas from '../../../schemas/old/index.js';
import localData from '../../localData.js';
import * as routers from '../../../middleware/routeMiddleware.js';
import * as testData from '../../../../tests/testData.js';
import { EXTERNAL_URL } from '../../index.js';

const oldEntityDataTypes = {
	worlds: {
		externalUrl: `${EXTERNAL_URL}worlds/`,
		schema: schemas.worldSchema,
		newTypes: ['worlds'],
		testData: [testData.world],
	},
	players: {
		externalUrl: `${EXTERNAL_URL}players/`,
		schema: schemas.playerSchema,
		newTypes: ['players'],
		testData: [testData.player],
		lookupFields: [
			{
				fieldName: 'world_id',
				newFieldName: 'world_id',
				table: 'worlds',
				externalIdField: 'fv_world_id',
				internalIdField: 'world_id',
				requiresWorldId: false,
			},
		],
	},
	creatures: {
		externalUrl: `${EXTERNAL_URL}creatures/`,
		schema: schemas.creatureSchema,
		newTypes: ['creatures'],
		testData: [testData.creature],
		lookupFields: [
			{
				fieldName: 'world_id',
				newFieldName: 'world_id',
				table: 'worlds',
				externalIdField: 'fv_world_id',
				internalIdField: 'world_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'color_id',
				newFieldName: 'color_id',
				table: 'colors',
				externalIdField: 'fv_color_id',
				internalIdField: 'color_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'faction_id',
				newFieldName: 'faction_id',
				table: 'factions',
				externalIdField: 'fv_faction_id',
				internalIdField: 'faction_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'creature_type_id',
				newFieldName: 'creature_type_id',
				table: 'creature_types',
				externalIdField: 'fv_creature_type_id',
				internalIdField: 'creature_type_id',
				requiresWorldId: false,
			},
		],
	},
	items: {
		externalUrl: `${EXTERNAL_URL}items/`,
		schema: schemas.itemSchema,
		router: routers.routeItems,
		newTypes: ['resources', 'items'],
		testData: [testData.item1, testData.item2],
		lookupFields: [
			{
				fieldName: 'world_id',
				newFieldName: 'world_id',
				table: 'worlds',
				externalIdField: 'fv_world_id',
				internalIdField: 'world_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'item_def_id',
				newFieldName: 'resource_type_id',
				table: 'resource_types',
				externalIdField: 'fv_resource_type_id',
				internalIdField: 'resource_type_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'item_def_id',
				newFieldName: 'item_type_id',
				table: 'item_types',
				externalIdField: 'fv_item_type_id',
				internalIdField: 'item_type_id',
				requiresWorldId: false,
			},
		],
	},
	inventories: {
		localData: localData.inventories,
		schema: schemas.inventorySchema,
		newTypes: ['inventories'],
		testData: [localData.inventories[0]],
	},
	'data-tables': {
		externalUrl: `${EXTERNAL_URL}player-manipulate-data-events/`,
		schema: schemas.playerManipulateDataEventSchema,
		newTypes: ['data-tables'],
		testData: [testData.playerManipulateDataEvent],
		lookupFields: [
			{
				fieldName: 'world_id',
				newFieldName: 'world_id',
				table: 'worlds',
				externalIdField: 'fv_world_id',
				internalIdField: 'world_id',
				requiresWorldId: false,
			},
		],
	},
	'request-board-items': {
		externalUrl: `${EXTERNAL_URL}request-board-items/`,
		schema: schemas.requestBoardItemSchema,
		newTypes: ['request-board-items'],
		testData: [testData.requestBoardItem],
		lookupFields: [
			{
				fieldName: 'world_id',
				newFieldName: 'world_id',
				table: 'worlds',
				externalIdField: 'fv_world_id',
				internalIdField: 'world_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'creature_id',
				newFieldName: 'creature_id',
				table: 'creatures',
				externalIdField: 'fv_creature_id',
				internalIdField: 'creature_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'game_time_id',
				newFieldName: 'game_time_id',
				table: 'game_times',
				externalIdField: 'fv_game_time_id',
				internalIdField: 'game_time_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'request_item_def_id',
				newFieldName: 'item_type_id',
				table: 'item_types',
				externalIdField: 'fv_item_type_id',
				internalIdField: 'item_type_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'request_item_def_id',
				newFieldName: 'resource_type_id',
				table: 'resource_types',
				externalIdField: 'fv_resource_type_id',
				internalIdField: 'resource_type_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'reward_item_def_id',
				newFieldName: 'item_type_id',
				table: 'item_types',
				externalIdField: 'fv_item_type_id',
				internalIdField: 'item_type_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'reward_item_def_id',
				newFieldName: 'resource_type_id',
				table: 'resource_types',
				externalIdField: 'fv_resource_type_id',
				internalIdField: 'resource_type_id',
				requiresWorldId: false,
			},
		],
	},
};

export default oldEntityDataTypes;
