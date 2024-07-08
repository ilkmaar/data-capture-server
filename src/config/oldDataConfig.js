import schemas from '../schemas/old/index.js';
import localData from './localData.js';
import * as routers from '../middleware/routeMiddleware.js';
import * as testData from '../../tests/testData.js';
import { EXTERNAL_URL } from './index.js';

import { createItemVarietyIdLookup, createResourceAndItemIdLookup } from '../utils/specialLookups.js';

const oldTimeDataTypes = {
    'days': {
        externalUrl: `${EXTERNAL_URL}days/`,
        schema: schemas.daySchema,
        newTypes: ['days'],
        testData: [testData.day]
    },
    'time-of-days': {
        externalUrl: `${EXTERNAL_URL}time-of-days/`,
        schema: schemas.timeOfDaySchema,
        newTypes: ['time-of-days'],
        testData: [testData.timeOfDay]
    },
    'seasons': {
        externalUrl: `${EXTERNAL_URL}seasons/`,
        schema: schemas.seasonSchema,
        newTypes: ['seasons'],
        testData: [testData.season]
    },
    'game-times': {
        externalUrl: `${EXTERNAL_URL}game-times/`,
        schema: schemas.gameTimeSchema,
        newTypes: ['game-times'],
        testData: [testData.gameTime],
        lookupFields: [
          {
              fieldName: 'day_id',
              newFieldName: 'day_id',
              table: 'days',
              externalIdField: 'fv_day_id',
              internalIdField: 'day_id',
              requiresWorldId: false
          },
          {
              fieldName: 'time_of_day_id',
              newFieldName: 'time_of_day_id',
              table: 'time_of_days',
              externalIdField: 'fv_time_of_day_id',
              internalIdField: 'time_of_day_id',
              requiresWorldId: false
          },
          {
              fieldName: 'season_id',
              newFieldName: 'season_id',
              table: 'seasons',
              externalIdField: 'fv_season_id',
              internalIdField: 'season_id',
              requiresWorldId: false
          }
        ]
    }
};

const oldInfoDataTypes = {
    'colors': {
        externalUrl: `${EXTERNAL_URL}colors/`,
        schema: schemas.colorSchema,
        newTypes: ['colors'],
        testData: [testData.color]
    },
    'factions': {
        externalUrl: `${EXTERNAL_URL}factions/`,
        schema: schemas.factionSchema,
        newTypes: ['factions'],
        testData: [testData.faction]
    },
    'creature-types': {
        externalUrl: `${EXTERNAL_URL}creature-types/`,
        schema: schemas.creatureTypeSchema,
        newTypes: ['creature-types'],
        testData: [testData.creatureType]
    },
    'activity-types': {
        localData: localData['activity-types'],
        schema: schemas.activityTypeSchema,
        newTypes: ['activity-types'],
        testData: [testData.activityType]
    },
    'resource-categories': {
        externalUrl: `${EXTERNAL_URL}resource-categories/`,
        schema: schemas.resourceCategorySchema,
        newTypes: ['resource-categories'],
        testData: [testData.resourceCategory]
    },
    'item-categories': {
        localData: localData['item-categories'],
        schema: schemas.itemCategorySchema,
        newTypes: ['item-categories'],
        testData: [testData.itemCategory]
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
                requiresWorldId: false
            }
        ]
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
                requiresWorldId: false
            },
            {
                fieldName: 'resource_type_id',
                newFieldName: 'resource_variety_id',
                table: 'resource_varieties',
                externalIdField: 'fv_resource_variety_id',
                internalIdField: 'resource_variety_id',
                requiresWorldId: false
            },
            {
                fieldName: 'item_category_id',
                newFieldName: 'item_category_id',
                table: 'item_categories',
                externalIdField: 'fv_item_category_id',
                internalIdField: 'item_category_id',
                requiresWorldId: false
            }
        ],
        specialLookups: [ createItemVarietyIdLookup ]
    },
    'islands': {
        localData: localData.islands,
        schema: schemas.islandSchema,
        newTypes: ['islands'],
        testData: [localData.islands[0]]
    },
    'locations': {
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
                requiresWorldId: false
            },
            {
                fieldName: 'location_island',
                newFieldName: 'island_id',
                table: 'islands',
                externalIdField: 'fv_island_id',
                internalIdField: 'island_id',
                requiresWorldId: false
            }
          ]
    },
    'plots': {
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
                requiresWorldId: false
            }
          ]
    },
    'patches': {
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
              requiresWorldId: false
          }
        ]
    }
};

const oldEntityDataTypes = {
    'worlds': {
        externalUrl: `${EXTERNAL_URL}worlds/`,
        schema: schemas.worldSchema,
        newTypes: ['worlds'],
        testData: [testData.world]
    },
    'players': {
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
                requiresWorldId: false
            }
        ]
    },
    'creatures': {
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
                requiresWorldId: false
            },
            {
                fieldName: 'color_id',
                newFieldName: 'color_id',
                table: 'colors',
                externalIdField: 'fv_color_id',
                internalIdField: 'color_id',
                requiresWorldId: false
            },
            {
                fieldName: 'faction_id',
                newFieldName: 'faction_id',
                table: 'factions',
                externalIdField: 'fv_faction_id',
                internalIdField: 'faction_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_type_id',
                newFieldName: 'creature_type_id',
                table: 'creature_types',
                externalIdField: 'fv_creature_type_id',
                internalIdField: 'creature_type_id',
                requiresWorldId: false
            }
        ]
    },
    'items': {
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
                requiresWorldId: false
            },
            {
                fieldName: 'item_def_id',
                newFieldName: 'resource_type_id',
                table: 'resource_types',
                externalIdField: 'fv_resource_type_id',
                internalIdField: 'resource_type_id',
                requiresWorldId: false
            },
            {
                fieldName: 'item_def_id',
                newFieldName: 'item_type_id',
                table: 'item_types',
                externalIdField: 'fv_item_type_id',
                internalIdField: 'item_type_id',
                requiresWorldId: false
            },
        ]
    },
    'inventories': {
        localData: localData.inventories,
        schema: schemas.inventorySchema,
        newTypes: ['inventories'],
        testData: [localData.inventories[0]]
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
                requiresWorldId: false
            }
        ]
    }
};

const oldEventDataTypes = {
    'patches-healths': {
        externalUrl: `${EXTERNAL_URL}patches-healths/`,
        schema: schemas.patchHealthSchema,
        newTypes: ['patch-health-records'],
        testData: [testData.patchHealth],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'patch_id',
                newFieldName: 'patch_id',
                table: 'patches',
                externalIdField: 'fv_patch_id',
                internalIdField: 'patch_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            }
        ]
    },
    'patches-events': {
        externalUrl: `${EXTERNAL_URL}patches-events/`,
        schema: schemas.patchEventSchema,
        router: routers.routePatchEvents,
        newTypes: ['patch-actions', 'patch-tending-actions'],
        testData: [testData.patchEvent1, testData.patchEvent2],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'patch_id',
                newFieldName: 'patch_id',
                table: 'patches',
                externalIdField: 'fv_patch_id',
                internalIdField: 'patch_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'item_id',
                newFieldName: 'item_id',
                table: 'items',
                externalIdField: 'fv_item_id',
                internalIdField: 'item_id',
                requiresWorldId: true
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            }
        ]
    },
    'personal-reputations': {
        externalUrl: `${EXTERNAL_URL}personal-reputations/`,
        schema: schemas.personalReputationSchema,
        newTypes: ['friendship-records'],
        testData: [testData.personalReputation],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            }
        ]
    },
    'weather-events': {
        externalUrl: `${EXTERNAL_URL}weather-events/`,
        schema: schemas.weatherEventSchema,
        newTypes: ['weather-records'],
        testData: [testData.weatherEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'day_id',
                newFieldName: 'day_id',
                table: 'days',
                externalIdField: 'fv_day_id',
                internalIdField: 'day_id',
                requiresWorldId: false
            },
            {
                fieldName: 'weather_event_island',
                newFieldName: 'island_id',
                table: 'islands',
                externalIdField: 'fv_island_id',
                internalIdField: 'island_id',
                requiresWorldId: false
            }
        ]
    },
    'interaction-events': {
        externalUrl: `${EXTERNAL_URL}interaction-events/`,
        schema: schemas.interactionEventSchema,
        router: routers.routeInteractionEvents,
        newTypes: ['foraging-actions', 'crafting-actions', 'giving-actions'],
        testData: [testData.interactionEvent1, testData.interactionEvent2, testData.interactionEvent3],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'location_id',
                newFieldName: 'area_id',
                table: 'areas',
                externalIdField: 'fv_area_id',
                internalIdField: 'area_id',
                requiresWorldId: false
            },
            {
                fieldName: 'patch_id',
                newFieldName: 'patch_id',
                table: 'patches',
                externalIdField: 'fv_patch_id',
                internalIdField: 'patch_id',
                requiresWorldId: false
            }
        ],
        specialLookups: [ createResourceAndItemIdLookup ]
    },
    'creature-move-events': {
        externalUrl: `${EXTERNAL_URL}creature-move-events/`,
        schema: schemas.creatureMoveEventSchema,
        newTypes: ['creature-state-records'],
        testData: [testData.creatureMoveEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'location_id',
                newFieldName: 'area_id',
                table: 'areas',
                externalIdField: 'fv_area_id',
                internalIdField: 'area_id',
                requiresWorldId: false
            }
        ]
    },
    'creature-activity-events': {
        externalUrl: `${EXTERNAL_URL}creature-activity-events/`,
        schema: schemas.creatureActivityEventSchema,
        newTypes: ['creature-activity-records'],
        testData: [testData.creatureActivityEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'location_id',
                newFieldName: 'area_id',
                table: 'areas',
                externalIdField: 'fv_area_id',
                internalIdField: 'area_id',
                requiresWorldId: false
            },
            {
                fieldName: 'activity_event_type',
                newFieldName: 'activity_type_id',
                table: 'activity_types',
                externalIdField: 'fv_activity_type_id',
                internalIdField: 'activity_type_id',
                requiresWorldId: false
            }
        ]
    },
    'diner-rating-events': {
        externalUrl: `${EXTERNAL_URL}diner-rating-events/`,
        schema: schemas.dinerRatingEventSchema,
        newTypes: ['diner-review-actions'],
        testData: [testData.dinerRatingEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {   
                fieldName: 'item_id',
                newFieldName: 'item_id',
                table: 'items',
                externalIdField: 'fv_item_id',
                internalIdField: 'item_id',
                requiresWorldId: true
            },
        ]
    },
    'diner-seating-events': {
        externalUrl: `${EXTERNAL_URL}diner-seating-events/`,
        schema: schemas.dinerSeatingEventSchema,
        newTypes: ['diner-seating-actions'],
        testData: [testData.dinerSeatingEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            }
        ]
    },
    'player-manipulate-data-events': {
        externalUrl: `${EXTERNAL_URL}player-manipulate-data-events/`,
        schema: schemas.playerManipulateDataEventSchema,
        newTypes: ['data-actions', 'data-tables'],
        testData: [testData.playerManipulateDataEvent, testData.playerManipulateDataEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'table_id',
                newFieldName: 'data_table_id',
                table: 'data_tables',
                externalIdField: 'fv_data_table_id',
                internalIdField: 'data_table_id',
                requiresWorldId: false
            },
            {
                fieldName: 'table_being_merged_id',
                newFieldName: 'data_table_id',
                table: 'data_tables',
                externalIdField: 'fv_data_table_id',
                internalIdField: 'data_table_id',
                requiresWorldId: false
            }
        ]
    },
    'player-move-events': {
        externalUrl: `${EXTERNAL_URL}player-move-events/`,
        schema: schemas.playerMoveEventSchema,
        newTypes: ['player-location-records'],
        testData: [testData.playerMoveEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'location_id',
                newFieldName: 'area_id',
                table: 'areas',
                externalIdField: 'fv_area_id',
                internalIdField: 'area_id',
                requiresWorldId: false
            }
        ]
    },
    'player-item-interaction-events': {
        externalUrl: `${EXTERNAL_URL}player-item-interaction-events/`,
        schema: schemas.playerItemInteractionEventSchema,
        newTypes: ['inventory-actions'],
        testData: [testData.playerItemInteractionEvent],
        lookupFields: [
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'item_id',
                newFieldName: 'item_id',
                table: 'items',
                externalIdField: 'fv_item_id',
                internalIdField: 'item_id',
                requiresWorldId: true
            },
            {
                fieldName: 'item_id',
                newFieldName: 'resource_id',
                table: 'resources',
                externalIdField: 'fv_resource_id',
                internalIdField: 'resource_id',
                requiresWorldId: true
            },
            {
                fieldName: 'inventory',
                newFieldName: 'inventory_id',
                table: 'inventories',
                externalIdField: 'fv_inventory_id',
                internalIdField: 'inventory_id',
                requiresWorldId: false
            }
        ]
    },
    'direct-creature-events': {
        externalUrl: `${EXTERNAL_URL}direct-creature-events/`,
        schema: schemas.directCreatureEventSchema,
        newTypes: ['creature-direction-actions'],
        testData: [testData.directCreatureEvent],
        lookupFields: [
            {
                fieldName: 'world_id',
                newFieldName: 'world_id',
                table: 'worlds',
                externalIdField: 'fv_world_id',
                internalIdField: 'world_id',
                requiresWorldId: false
            },
            {
                fieldName: 'game_time_id',
                newFieldName: 'game_time_id',
                table: 'game_times',
                externalIdField: 'fv_game_time_id',
                internalIdField: 'game_time_id',
                requiresWorldId: false
            },
            {
                fieldName: 'player_id',
                newFieldName: 'player_id',
                table: 'players',
                externalIdField: 'fv_player_id',
                internalIdField: 'player_id',
                requiresWorldId: false
            },
            {
                fieldName: 'creature_id',
                newFieldName: 'creature_id',
                table: 'creatures',
                externalIdField: 'fv_creature_id',
                internalIdField: 'creature_id',
                requiresWorldId: false
            },
            {
                fieldName: 'from_location_id',
                newFieldName: 'area_id',
                table: 'areas',
                externalIdField: 'fv_area_id',
                internalIdField: 'area_id',
                requiresWorldId: false
            },
            {
                fieldName: 'to_location_id',
                newFieldName: 'area_id',
                table: 'areas',
                externalIdField: 'fv_area_id',
                internalIdField: 'area_id',
                requiresWorldId: false
            }
        ]
    }
};

const oldUnusedDataTypes = {
    'simulation-stats': {
      externalUrl: `${EXTERNAL_URL}simulation-stats/`,
      schema: schemas.simulationStatsSchema,
      newTypes: ['simulation-stats']
    },
    'item-attribute-1s': {
      externalUrl: `${EXTERNAL_URL}item-attribute-1s/`,
      schema: schemas.itemAttribute1Schema,
      newTypes: ['item-attributes']
    },
    'item-attribute-2s': {
      externalUrl: `${EXTERNAL_URL}item-attribute-2s/`,
      schema: schemas.itemAttribute2Schema,
      newTypes: ['item-attributes']
    },
    'sheet-links': {
      externalUrl: `${EXTERNAL_URL}sheet-links/`,
      schema: schemas.sheetLinkSchema,
      newTypes: ['sheet-links']
    }
};

export const oldDataTypes = {
    ...oldInfoDataTypes,
    ...oldTimeDataTypes,
    ...oldEntityDataTypes,
    ...oldEventDataTypes
};