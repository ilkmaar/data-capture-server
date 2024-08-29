// Define tables or groups of tables to apply policies to
export const DATA_LOAD_ORDER = [
	// time
	'days',
	'time-of-days',
	'seasons',
	'game-times',

	// info
	'colors',
	'creature-types',
	'factions',
	'islands',
	'activity-types',
	'locations',
	'plots',
	'patches',
	'resource-categories',
	'resource-types',
	'item-categories',
	'item-varieties',
	'item-definitions',
	'inventories',

	// entities
	'worlds',
	'players',
	'creatures',
	'items',
	'data-tables',
	'request-board-items',

	// actions
	'interaction-events',
	'player-item-interaction-events',
	'direct-creature-events',
	'diner-rating-events',
	'diner-seating-events',
	'patches-events',
	'player-manipulate-data-events',
	'request-board-actions',
	'anomaly-readings',

	// records
	'weather-events',
	'patches-healths',
	'player-move-events',
	'creature-move-events',
	'creature-activity-events',
	'personal-reputations',
	'imbalance-records',
];

export const ALL_TABLES = [];
