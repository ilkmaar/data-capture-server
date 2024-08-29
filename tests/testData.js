// testData.js
export const world = {
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	created_date: '2024-06-17T18:08:56.803641Z',
};

export const player = {
	player_id: 1,
	player_name: 'Player 1',
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
};

export const playerMoveEvent = {
	player_move_event_id: 985,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	move_event_type_id: 0,
	location_id: 47,
	player_move_event_pos_x: 98.07299,
	player_move_event_pos_y: 97.61463,
	game_time_id: 183,
	raw_time: '2024-06-16T01:03:18.905159Z',
};

export const interactionEvent1 = {
	interaction_event_id: 714,
	interaction_event_type: 1,
	game_time_id: 183,
	raw_time: '2024-06-16T01:05:02.958361Z',
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	creature_id: null,
	input_items: [],
	output_items: [
		{
			item_id: 623,
			item_def_id: 13,
		},
	],
	interaction_event_mood_effect: 0.0,
	interaction_event_health_effect: 0.0,
	interaction_event_social_effect: 0.0,
	interaction_event_level_1: 4,
	interaction_event_level_2: 4,
	interaction_event_level_3: 4,
	location_id: 96,
	patch_id: 'patch_2_Luminous Lane',
	interaction_event_event_pos_x: 78.25001,
	interaction_event_event_pos_y: 97.2900162,
};

export const interactionEvent2 = {
	interaction_event_id: 704,
	interaction_event_type: 2,
	game_time_id: 181,
	raw_time: '2024-06-16T00:57:08.028064Z',
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	creature_id: null,
	input_items: [
		{
			item_id: 573,
			item_def_id: 2,
		},
		{
			item_id: 339,
			item_def_id: 7,
		},
	],
	output_items: [
		{
			item_id: 617,
			item_def_id: 22,
		},
	],
	interaction_event_mood_effect: 0.0,
	interaction_event_health_effect: 0.0,
	interaction_event_social_effect: 0.0,
	interaction_event_level_1: 3,
	interaction_event_level_2: 3,
	interaction_event_level_3: 3,
	location_id: 121,
	patch_id: null,
	interaction_event_event_pos_x: 179.95,
	interaction_event_event_pos_y: 106.77,
};

export const interactionEvent3 = {
	interaction_event_id: 707,
	interaction_event_type: 4,
	game_time_id: 182,
	raw_time: '2024-06-16T00:58:18.109555Z',
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	creature_id: '0490e8f0-bb92-4222-bcf0-f1ff32c5d505',
	input_items: [
		{
			item_id: 502,
			item_def_id: 16,
		},
	],
	output_items: [],
	interaction_event_mood_effect: 0.0389999971,
	interaction_event_health_effect: 0.0389999971,
	interaction_event_social_effect: 0.0389999971,
	interaction_event_level_1: 4,
	interaction_event_level_2: 4,
	interaction_event_level_3: 4,
	location_id: 121,
	patch_id: null,
	interaction_event_event_pos_x: 153.19,
	interaction_event_event_pos_y: 107.509995,
};

export const playerItemInteractionEvent = {
	player_item_interaction_event_id: 875,
	world_id: 'ISLES_247',
	player_id: 506892,
	player_item_interaction_type_id: 1,
	item_id: 253,
	hidden_item_def_id: 19,
	inventory: 'Ready To Serve',
	location_id: 121,
	player_item_interaction_event_pos_x: 151.46,
	player_item_interaction_event_pos_y: 109.21,
	game_time_id: 37,
	raw_time: '2024-06-25T14:37:59.263838Z',
};

export const directCreatureEvent = {
	direct_creature_event_id: 104,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 1,
	creature_id: '7eedc4b6-2dca-42a4-bf79-63e2cddbedfc',
	from_location_id: 111,
	to_location_id: 121,
	game_time_id: 177,
	raw_time: '2024-06-16T00:33:23.179472Z',
};

export const dinerSeatingEvent = {
	diner_seating_event_id: 90,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	creature_id: 'e85b10d6-c8bf-4b08-9a53-1d865fb95669',
	seat_id: 4,
	seat_type_id: 1,
	game_time_id: 183,
	raw_time: '2024-06-16T01:02:35.340886Z',
};

export const playerManipulateDataEvent = {
	player_manipulate_data_event_id: 729,
	table_id: '97bc12d5-6e77-45bf-94a1-d8d504ded779',
	data_event_type_id: 8,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	open_from_source_id: null,
	table_name: 'Interactions at Luminous Lane',
	endpoint: 'patches-events',
	axis_selected: null,
	axis_selection: null,
	table_being_merged_id: null,
	table_being_merged_name: null,
	game_time_id: 183,
	raw_time: '2024-06-16T01:06:55.831547Z',
};

export const item1 = {
	item_id: 1,
	item_def_id: 5,
	item_value: 3,
	item_quality: 75,
	is_anomalous: 0,
	created_date: '2024-08-19T18:05:41.020103Z',
	world_id: 'ISLES_238',
};

export const item2 = {
	item_id: 17,
	item_def_id: 28,
	item_value: 7,
	item_quality: 50,
	is_anomalous: 1,
	created_date: '2024-06-01T00:04:17.151155Z',
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
};

export const itemCategory = {
	item_category_id: 2,
	item_category_name: 'Potion',
};

export const resourceCategory = {
	resource_category_id: 0,
	resource_category_name: 'Plant',
};

export const resourceType = {
	resource_type_id: 0,
	resource_type_name: 'Sweet',
};

export const itemType1 = {
	item_def_id: 0,
	item_category_id: 1,
	resource_category_id: 0,
	resource_type_id: 2,
	item_attribute_1_id: 0,
	item_attribute_2_id: 0,
	item_def_name: 'Wheatberry',
};

export const itemType2 = {
	item_def_id: 54,
	item_category_id: 16,
	resource_category_id: -1,
	resource_type_id: 4,
	item_attribute_1_id: 0,
	item_attribute_2_id: 0,
	item_def_name: 'Silver Glaze Stone',
};

export const day = {
	day_id: 1,
	day_name: 'Day 01',
};

export const timeOfDay = {
	time_of_day_id: 0,
	time_of_day_name: 'Dawn',
};

export const season = {
	season_id: 0,
	season_name: 'Spring',
};

export const gameTime = {
	game_time_id: 187,
	day_id: 47,
	time_of_day_id: 3,
	season_id: 3,
};

export const location = {
	location_id: 0,
	location_name: 'Germination Station',
	location_creature_activity_type: 1,
	location_island: 3,
	location_position_x: 143.969971,
	location_position_y: -54.2499924,
};

export const plot = {
	plot_id: 'plot_GerminationStation',
	location_id: 0,
};

export const patch = {
	patch_id: 'patch_0_Amethyst Acre',
	plot_id: 'plot_AmethystAcre',
};

export const patchHealth = {
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	patch_health_id: 4552,
	patch_id: 'patch_0_Aurora Acres',
	patch_health_growth: 1.0,
	patch_health_shadow: 0.8999999,
	patch_health_light: 0.95,
	patch_health_stability: 0.9,
	game_time_id: 183,
	raw_time: '2024-06-16T01:04:04.701969Z',
};

export const patchEvent1 = {
	patch_event_id: 4373,
	patch_id: 'patch_2_Luminous Lane',
	patch_event_type: 3,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	item_id: 623,
	creature_id: null,
	patch_event_growth_effect: 0.0,
	patch_event_shadow_effect: 0.0,
	patch_event_light_effect: 0.0,
	patch_event_stability_effect: -0.049999997,
	patch_event_level_1: null,
	patch_event_level_2: null,
	patch_event_level_3: null,
	game_time_id: 183,
	raw_time: '2024-06-16T01:05:03.165282Z',
};

export const patchEvent2 = {
	patch_event_id: 4368,
	patch_id: 'patch_4_Aurora Acres',
	patch_event_type: 2,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: null,
	item_id: null,
	creature_id: '0490e8f0-bb92-4222-bcf0-f1ff32c5d505',
	patch_event_growth_effect: 0.149999991,
	patch_event_shadow_effect: 0.0,
	patch_event_light_effect: 0.0,
	patch_event_stability_effect: 0.0,
	patch_event_level_1: null,
	patch_event_level_2: null,
	patch_event_level_3: null,
	game_time_id: 183,
	raw_time: '2024-06-16T01:02:29.269652Z',
};

export const weatherEvent = {
	weather_event_id: 30,
	world_id: 'ISLES_247',
	weather_event_island: 2,
	sun_type: 2,
	rain_type: 1,
	season_id: 0,
	previous_moon_phase_id: 0,
	moon_phase_id: 3,
	day_id: 5,
	raw_time: '2024-08-19T16:58:45.391303Z',
};

export const color = {
	color_id: 1,
	color_name: 'Red',
};

export const creatureType = {
	creature_type_id: 0,
	creature_type_name: 'Golem Standard',
};

export const faction = {
	faction_id: 1,
	faction_name: 'Shadow',
};

export const creature = {
	creature_id: '594fee6b-57da-4240-9970-2675edc596de',
	creature_name: 'Suzu',
	faction_id: 4,
	color_id: 1,
	creature_type_id: 0,
	created_date: '2024-05-31T21:26:34.189183Z',
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
};

export const creatureMoveEvent = {
	creature_move_event_id: 15619,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	creature_id: 'e85b10d6-c8bf-4b08-9a53-1d865fb95669',
	game_time_id: 183,
	raw_time: '2024-06-16T01:03:16.140857Z',
	location_id: 47,
	creature_move_event_pos_x: null,
	creature_move_event_pos_y: null,
	creature_move_event_health: 0.0,
	creature_move_event_mood: 0.0,
	creature_move_event_social: 0.0,
};

export const creatureActivityEvent = {
	creature_activity_event_id: 15366,
	activity_event_type: 1,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	creature_id: '0490e8f0-bb92-4222-bcf0-f1ff32c5d505',
	game_time_id: 183,
	raw_time: '2024-06-16T01:02:29.235495Z',
	location_id: 98,
	creature_activity_event_health_delta: -0.049999997,
	creature_activity_event_mood_delta: -0.049999997,
	creature_activity_event_social_delta: -0.049999997,
};

export const dinerRatingEvent = {
	diner_rating_event_id: 87,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	creature_id: 'e85b10d6-c8bf-4b08-9a53-1d865fb95669',
	rating: 1,
	item_id: 618,
	hidden_item_def_id: 20,
	game_time_id: 183,
	raw_time: '2024-06-16T01:02:55.149593Z',
};

export const personalReputation = {
	personal_rep_id: 2277,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	player_id: 9,
	creature_id: '0490e8f0-bb92-4222-bcf0-f1ff32c5d505',
	personal_rep_value: 0.617,
	game_time_id: 182,
	raw_time: '2024-06-16T00:58:18.073760Z',
};

export const factionReputation = {
	fac_rep_id: 736,
	faction_id: 4,
	world_id: 'ISLES_DEFAULT_GROUP_NAME',
	fac_rep_value: 0.501423657,
	game_time_id: 183,
	raw_time: '2024-06-16T01:02:23.231810Z',
};

export const requestBoardItem = {
	request_board_item_id: 'ISLES_247_20',
	world_id: 'ISLES_247',
	target_type: 'Specific Creature',
	creature_id: '68410b58-5742-4ed1-9caf-eb444b5b67a3',
	request_id: 20,
	request_type: 'Specific Item Type',
	request_item_def_id: 28,
	request_amount: 2,
	reward_item_def_id: 46,
	reward_item_quality: 100,
	game_time_id: 16,
	request_time_length: 7,
};

export const imbalanceRecord = {
	imbalance_record_id: 162,
	world_id: 'ISLES_247',
	faction_1_id: 2,
	faction_2_id: 1,
	imbalance_metric_id: 2,
	value: 0.9333334,
	value_readable: 'Balanced',
	game_time_id: 17,
	raw_time: '2024-08-19T18:31:59.212733Z',
};

export const requestBoardAction = {
	request_board_action_id: 16,
	world_id: 'ISLES_247',
	request_id: 16,
	request_board_item_id: 'ISLES_247_16',
	request_board_action_type_id: 3,
	player_id: null,
	creature_id: null,
	item_id: null,
	hidden_item_def_id: null,
	friendship_bonus: null,
	game_time_id: 16,
};

export const anomalyReading = {
	anomaly_reading_id: 1,
	world_id: 'ISLES_247',
	player_id: 506857,
	anomaly_reading_position_x: 162.79,
	anomaly_reading_position_y: 102.17,
	anomaly_reading_value: 1.110223e-16,
	anomaly_mapped: 'None',
	game_time_id: 15,
	raw_time: '2024-08-19T16:54:58.757502Z',
};
