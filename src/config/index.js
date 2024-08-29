import * as apiConfigs from './apiConfig.js';

// external urls
export const EXTERNAL_URL = 'https://ilkmaar-data.fablevision-dev.com/api/';

// supabase tables
export const ID_STRING_MAX = 64;
export const MAX_LOOKUP_BATCH_SIZE = process.env.MAX_LOOKUP_BATCH_SIZE || 50;
export const MAX_INSERTION_BATCH_SIZE = 200;
export const RETRY_LIMIT = process.env.RETRY_LIMIT || 3; // Define retry limit for transient errors

export const TABLES_BY_ID_FIELD = {
	world_id: 'worlds',
	player_id: 'players',
	creature_id: 'creatures',
	resource_id: 'resources',
	item_id: 'items',
	area_id: 'areas',
	patch_id: 'patches',
	day_id: 'days',
	time_of_day_id: 'time_of_days',
	season_id: 'seasons',
	game_time_id: 'game_times',
	resource_type_id: 'resource_types',
	item_type_id: 'item_types',
	activity_type_id: 'activity_types',
	island_id: 'islands',
	plot_id: 'plots',
	faction_id: 'factions',
	color_id: 'colors',
	creature_type_id: 'creature_types',
	resource_category_id: 'resource_categories',
	resource_variety_id: 'resource_varieties',
	item_category_id: 'item_categories',
	item_variety_id: 'item_varieties',
	inventory_id: 'inventories',
	data_table_id: 'data_tables',
	request_board_item_id: 'request_board_items',
};

export { apiConfigs };
