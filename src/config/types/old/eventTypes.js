import schemas from '../../../schemas/old/index.js';
import * as routers from '../../../middleware/routeMiddleware.js';
import * as testData from '../../../../tests/testData.js';
import { EXTERNAL_URL } from '../../index.js';

import { createResourceAndItemIdLookup } from '../../../utils/specialLookups.js';

const commonLookupFields = {
	world: {
		fieldName: 'world_id',
		newFieldName: 'world_id',
		table: 'worlds',
		externalIdField: 'fv_world_id',
		internalIdField: 'world_id',
		requiresWorldId: false,
	},
	gameTime: {
		fieldName: 'game_time_id',
		newFieldName: 'game_time_id',
		table: 'game_times',
		externalIdField: 'fv_game_time_id',
		internalIdField: 'game_time_id',
		requiresWorldId: false,
	},
	player: {
		fieldName: 'player_id',
		newFieldName: 'player_id',
		table: 'players',
		externalIdField: 'fv_player_id',
		internalIdField: 'player_id',
		requiresWorldId: false,
	},
	creature: {
		fieldName: 'creature_id',
		newFieldName: 'creature_id',
		table: 'creatures',
		externalIdField: 'fv_creature_id',
		internalIdField: 'creature_id',
		requiresWorldId: false,
	},
	patch: {
		fieldName: 'patch_id',
		newFieldName: 'patch_id',
		table: 'patches',
		externalIdField: 'fv_patch_id',
		internalIdField: 'patch_id',
		requiresWorldId: false,
	},
	item: {
		fieldName: 'item_id',
		newFieldName: 'item_id',
		table: 'items',
		externalIdField: 'fv_item_id',
		internalIdField: 'item_id',
		requiresWorldId: true,
	},
	day: {
		fieldName: 'day_id',
		newFieldName: 'day_id',
		table: 'days',
		externalIdField: 'fv_day_id',
		internalIdField: 'day_id',
		requiresWorldId: false,
	},
	island: {
		fieldName: 'weather_event_island',
		newFieldName: 'island_id',
		table: 'islands',
		externalIdField: 'fv_island_id',
		internalIdField: 'island_id',
		requiresWorldId: false,
	},
	area: {
		fieldName: 'location_id',
		newFieldName: 'area_id',
		table: 'areas',
		externalIdField: 'fv_area_id',
		internalIdField: 'area_id',
		requiresWorldId: false,
	},
	activity: {
		fieldName: 'activity_event_type',
		newFieldName: 'activity_type_id',
		table: 'activity_types',
		externalIdField: 'fv_activity_type_id',
		internalIdField: 'activity_type_id',
		requiresWorldId: false,
	},
	inventory: {
		fieldName: 'inventory',
		newFieldName: 'inventory_id',
		table: 'inventories',
		externalIdField: 'fv_inventory_id',
		internalIdField: 'inventory_id',
		requiresWorldId: false,
	},
	room: {
		fieldName: 'room_id',
		newFieldName: 'room_id',
		table: 'rooms',
		externalIdField: 'fv_room_id',
		internalIdField: 'room_id',
		requiresWorldId: false,
	},
	requestBoard: {
		fieldName: 'request_board_item_id',
		newFieldName: 'request_board_item_id',
		table: 'request_board_items',
		externalIdField: 'fv_request_board_item_id',
		internalIdField: 'request_board_item_id',
		requiresWorldId: false,
	},
	receivingPlayer: {
		fieldName: 'receiving_player_id',
		newFieldName: 'receiving_player_id',
		table: 'players',
		externalIdField: 'fv_player_id',
		internalIdField: 'player_id',
		requiresWorldId: false,
	},
	hiddenItemDef: {
		fieldName: 'hidden_item_def_id',
		newFieldName: 'hidden_item_def_id',
		table: 'items',
		externalIdField: 'fv_item_id',
		internalIdField: 'item_id',
		requiresWorldId: true,
	},
	dataTable: {
		fieldName: 'table_id',
		newFieldName: 'data_table_id',
		table: 'data_tables',
		externalIdField: 'fv_data_table_id',
		internalIdField: 'data_table_id',
		requiresWorldId: false,
	},
};

// Need to add the following:
// CREATURES
// creature-interaction-events;
// patch-measure-events;

// POTIONS
// medical-room-send-events;
// triage-events;
// treatment-events;
// creature-stats-events;
// sickness-events;

// MINIGAMES
// smashing-minigame-events;
// rune-minigame-events;
// slicing-minigame-events;
// brewing-minigame-events;
// challenge-hub-events;

// PLAYERS
// player-trade-item-events;

const oldEventDataTypes = {
	'patches-healths': {
		externalUrl: `${EXTERNAL_URL}patches-healths/`,
		schema: schemas.patchHealthSchema,
		newTypes: ['patch-health-records'],
		testData: [testData.patchHealth],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.patch,
			commonLookupFields.gameTime,
		],
	},
	'patches-events': {
		externalUrl: `${EXTERNAL_URL}patches-events/`,
		schema: schemas.patchEventSchema,
		router: routers.routePatchEvents,
		newTypes: ['patch-actions', 'patch-tending-actions'],
		testData: [testData.patchEvent1, testData.patchEvent2],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.patch,
			commonLookupFields.gameTime,
			commonLookupFields.item,
			commonLookupFields.creature,
		],
	},
	'personal-reputations': {
		externalUrl: `${EXTERNAL_URL}personal-reputations/`,
		schema: schemas.personalReputationSchema,
		newTypes: ['friendship-records'],
		testData: [testData.personalReputation],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.creature,
			commonLookupFields.gameTime,
		],
	},
	'weather-events': {
		externalUrl: `${EXTERNAL_URL}weather-events/`,
		schema: schemas.weatherEventSchema,
		newTypes: ['weather-records'],
		testData: [testData.weatherEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.day,
			commonLookupFields.island,
		],
	},
	'interaction-events': {
		externalUrl: `${EXTERNAL_URL}interaction-events/`,
		schema: schemas.interactionEventSchema,
		router: routers.routeInteractionEvents,
		newTypes: ['foraging-actions', 'crafting-actions', 'giving-actions'],
		testData: [
			testData.interactionEvent1,
			testData.interactionEvent2,
			testData.interactionEvent3,
		],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.creature,
			commonLookupFields.gameTime,
			commonLookupFields.area,
			commonLookupFields.patch,
		],
		specialLookups: [createResourceAndItemIdLookup],
	},
	'creature-move-events': {
		externalUrl: `${EXTERNAL_URL}creature-move-events/`,
		schema: schemas.creatureMoveEventSchema,
		newTypes: ['creature-state-records'],
		testData: [testData.creatureMoveEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.creature,
			commonLookupFields.gameTime,
			commonLookupFields.area,
		],
	},
	'creature-activity-events': {
		externalUrl: `${EXTERNAL_URL}creature-activity-events/`,
		schema: schemas.creatureActivityEventSchema,
		newTypes: ['creature-activity-records'],
		testData: [testData.creatureActivityEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.creature,
			commonLookupFields.gameTime,
			commonLookupFields.area,
			commonLookupFields.activity,
		],
	},
	'diner-rating-events': {
		externalUrl: `${EXTERNAL_URL}diner-rating-events/`,
		schema: schemas.dinerRatingEventSchema,
		newTypes: ['diner-review-actions'],
		testData: [testData.dinerRatingEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.creature,
			commonLookupFields.gameTime,
			commonLookupFields.item,
		],
	},
	'diner-seating-events': {
		externalUrl: `${EXTERNAL_URL}diner-seating-events/`,
		schema: schemas.dinerSeatingEventSchema,
		newTypes: ['diner-seating-actions'],
		testData: [testData.dinerSeatingEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.creature,
			commonLookupFields.gameTime,
		],
	},
	'player-manipulate-data-events': {
		externalUrl: `${EXTERNAL_URL}player-manipulate-data-events/`,
		schema: schemas.playerManipulateDataEventSchema,
		newTypes: ['data-actions', 'data-tables'],
		testData: [
			testData.playerManipulateDataEvent,
			testData.playerManipulateDataEvent,
		],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.gameTime,
			commonLookupFields.dataTable,
			{
				...commonLookupFields.dataTable,
				fieldName: 'table_being_merged_id',
			},
		],
	},
	'player-move-events': {
		externalUrl: `${EXTERNAL_URL}player-move-events/`,
		schema: schemas.playerMoveEventSchema,
		newTypes: ['player-location-records'],
		testData: [testData.playerMoveEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.gameTime,
			commonLookupFields.area,
		],
	},
	'player-item-interaction-events': {
		externalUrl: `${EXTERNAL_URL}player-item-interaction-events/`,
		schema: schemas.playerItemInteractionEventSchema,
		newTypes: ['inventory-actions'],
		testData: [testData.playerItemInteractionEvent],
		lookupFields: [
			commonLookupFields.gameTime,
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.item,
			commonLookupFields.item,
			commonLookupFields.inventory,
		],
	},
	'direct-creature-events': {
		externalUrl: `${EXTERNAL_URL}direct-creature-events/`,
		schema: schemas.directCreatureEventSchema,
		newTypes: ['creature-direction-actions'],
		testData: [testData.directCreatureEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.creature,
			{ ...commonLookupFields.area, fieldName: 'from_location_id' },
			{ ...commonLookupFields.area, fieldName: 'to_location_id' },
		],
	},
	'anomaly-readings': {
		externalUrl: `${EXTERNAL_URL}anomaly-readings/`,
		schema: schemas.anomalyReadingSchema,
		newTypes: ['anomaly-readings'],
		testData: [testData.anomalyReading],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
		],
	},
	'request-board-actions': {
		externalUrl: `${EXTERNAL_URL}request-board-actions/`,
		schema: schemas.requestBoardActionSchema,
		newTypes: ['request-board-actions'],
		testData: [testData.requestBoardAction],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.creature,
			commonLookupFields.item,
			commonLookupFields.gameTime,
			commonLookupFields.requestBoard,
		],
	},
	'imbalance-records': {
		externalUrl: `${EXTERNAL_URL}imbalance-records/`,
		schema: schemas.imbalanceRecordSchema,
		newTypes: ['imbalance-records'],
		testData: [testData.imbalanceRecord],
		lookupFields: [commonLookupFields.world, commonLookupFields.gameTime],
	},
	'treatment-events': {
		externalUrl: `${EXTERNAL_URL}treatment-events/`,
		schema: schemas.treatmentEventSchema,
		newTypes: ['treatment-actions'],
		testData: [testData.treatmentEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.creature,
			commonLookupFields.item,
		],
	},
	'avatar-updates': {
		externalUrl: `${EXTERNAL_URL}avatar-updates/`,
		schema: schemas.avatarUpdateSchema,
		newTypes: ['avatar-update-actions'],
		testData: [testData.avatarUpdateEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.player,
			commonLookupFields.gameTime,
		],
	},
	'creature-interaction-events': {
		externalUrl: `${EXTERNAL_URL}creature-interaction-events/`,
		schema: schemas.creatureInteractionEventSchema,
		newTypes: ['creature-interaction-events'],
		testData: [testData.creatureInteractionEvent],
	},
	'patch-measure-events': {
		externalUrl: `${EXTERNAL_URL}patch-measure-events/`,
		schema: schemas.patchMeasureEventSchema,
		newTypes: ['patch-measure-events'],
		testData: [testData.patchMeasureEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
		],
	},
	'medical-room-send-events': {
		externalUrl: `${EXTERNAL_URL}medical-room-send-events/`,
		schema: schemas.medicalRoomSendEventSchema,
		newTypes: ['medical-room-send-events'],
		testData: [testData.medicalRoomSendEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.creature,
			commonLookupFields.room,
		],
	},
	'triage-events': {
		externalUrl: `${EXTERNAL_URL}triage-events/`,
		schema: schemas.triageEventSchema,
		newTypes: ['triage-events'],
		testData: [testData.triageEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.creature,
		],
	},
	'sickness-events': {
		externalUrl: `${EXTERNAL_URL}sickness-events/`,
		schema: schemas.sicknessEventSchema,
		newTypes: ['sickness-events'],
		testData: [testData.sicknessEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.creature,
		],
	},
	'smashing-minigame-events': {
		externalUrl: `${EXTERNAL_URL}smashing-minigame-events/`,
		schema: schemas.smashingMinigameEventSchema,
		newTypes: ['smashing-minigame-events'],
		testData: [testData.smashingMinigameEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.item,
			commonLookupFields.hiddenItemDef,
		],
	},
	'rune-minigame-events': {
		externalUrl: `${EXTERNAL_URL}rune-minigame-events/`,
		schema: schemas.runeMinigameEventSchema,
		newTypes: ['rune-minigame-events'],
		testData: [testData.runeMinigameEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
		],
	},
	'slicing-minigame-events': {
		externalUrl: `${EXTERNAL_URL}slicing-minigame-events/`,
		schema: schemas.slicingMinigameEventSchema,
		newTypes: ['slicing-minigame-events'],
		testData: [testData.slicingMinigameEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.item,
			commonLookupFields.hiddenItemDef,
		],
	},
	'brewing-minigame-events': {
		externalUrl: `${EXTERNAL_URL}brewing-minigame-events/`,
		schema: schemas.brewingMinigameEventSchema,
		newTypes: ['brewing-minigame-events'],
		testData: [testData.brewingMinigameEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.item,
			commonLookupFields.hiddenItemDef,
		],
	},
	'challenge-hub-events': {
		externalUrl: `${EXTERNAL_URL}challenge-hub-events/`,
		schema: schemas.challengeHubEventSchema,
		newTypes: ['challenge-hub-events'],
		testData: [testData.challengeHubEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
		],
	},
	'player-trade-item-events': {
		externalUrl: `${EXTERNAL_URL}player-trade-item-events/`,
		schema: schemas.playerTradeItemEventSchema,
		newTypes: ['player-trade-item-events'],
		testData: [testData.playerTradeItemEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.receivingPlayer,
			commonLookupFields.item,
			{
				...commonLookupFields.area,
				fieldName: 'location_id',
				newFieldName: 'location_id',
			},
		],
	},
	'creature-stats-events': {
		externalUrl: `${EXTERNAL_URL}creature-stats-events/`,
		schema: schemas.creatureStatsEventSchema,
		newTypes: ['creature-stats-events'],
		testData: [testData.creatureStatsEvent],
		lookupFields: [
			commonLookupFields.world,
			commonLookupFields.gameTime,
			commonLookupFields.player,
			commonLookupFields.creature,
		],
	},
};

const oldUnusedDataTypes = {
	'simulation-stats': {
		externalUrl: `${EXTERNAL_URL}simulation-stats/`,
		schema: schemas.simulationStatsSchema,
		newTypes: ['simulation-stats'],
	},
	'item-attribute-1s': {
		externalUrl: `${EXTERNAL_URL}item-attribute-1s/`,
		schema: schemas.itemAttribute1Schema,
		newTypes: ['item-attributes'],
	},
	'item-attribute-2s': {
		externalUrl: `${EXTERNAL_URL}item-attribute-2s/`,
		schema: schemas.itemAttribute2Schema,
		newTypes: ['item-attributes'],
	},
	'sheet-links': {
		externalUrl: `${EXTERNAL_URL}sheet-links/`,
		schema: schemas.sheetLinkSchema,
		newTypes: ['sheet-links'],
	},
};

export default oldEventDataTypes;
