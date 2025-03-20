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
	interaction_item_quality: 74,
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
	interaction_event_id: 390,
	interaction_event_type: 2,
	interaction_item_quality: 74,
	game_time_id: 8,
	raw_time: '2025-01-15T20:22:40.461193Z',
	world_id: 'prod_Research',
	player_id: 641234,
	creature_id: null,
	input_items: [
		{
			item_id: 98,
			item_def_id: 0,
		},
		{
			item_id: 197,
			item_def_id: 11,
		},
	],
	output_items: [
		{
			item_id: 248,
			item_def_id: 68,
		},
	],
	interaction_event_mood_effect: 0.0,
	interaction_event_health_effect: 0.0,
	interaction_event_social_effect: 0.0,
	interaction_event_level_1: 4,
	interaction_event_level_2: 4,
	interaction_event_level_3: 4,
	location_id: 9,
	patch_id: null,
	interaction_event_event_pos_x: 170.06,
	interaction_event_event_pos_y: -132.95,
};

export const interactionEvent3 = {
	interaction_event_id: 707,
	interaction_event_type: 4,
	interaction_item_quality: 74,
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
	player_item_interaction_event_id: 250,
	world_id: 'prod_Research',
	player_id: 641234,
	player_item_interaction_type_id: 0,
	item_id: 248,
	hidden_item_def_id: 68,
	item_quality: 74,
	inventory: 'Potion Storage',
	location_id: 9,
	player_item_interaction_event_pos_x: 170.06,
	player_item_interaction_event_pos_y: -132.95,
	game_time_id: 8,
	raw_time: '2025-01-15T20:22:40.411172Z',
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
	affects_crafting: 0,
	created_date: '2024-08-19T18:05:41.020103Z',
	world_id: 'ISLES_238',
};

export const item2 = {
	item_id: 17,
	item_def_id: 28,
	item_value: 7,
	item_quality: 50,
	is_anomalous: 1,
	affects_crafting: 1,
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

export const avatarUpdateEvent = {
	avatar_update_id: 140,
	world_id: 'prod_group3',
	player_id: 379015,
	body_type: 2,
	height: 1.0,
	face: 1,
	eyes: 3,
	nose: 2,
	mouth: 2,
	skin_color: 'light',
	hairstyle: 14,
	hair_color: 'darkbrown',
	outfit: 3,
	outfit_color: 'gray-green',
	glasses: 1,
	cane: 1,
	prosthetic: 0,
	hearing_aid: 1,
	diabetes_patch: 0,
	goggles: 1,
	game_time_id: 6,
	raw_time: '2025-01-17T16:46:36.491203Z',
};

export const creatureInteractionEvent = {
	creature_interaction_event_id: 209,
	world_id: 'prod_CCProd',
	player_id: 32373,
	creature_id: '4c7ec500-4fa4-4ec0-9b0a-c5af26babd72',
	location_id: 112,
	creature_interaction_event_health: 0.3265265,
	creature_interaction_event_mood: 0.175572,
	creature_interaction_event_social: 0.1595195,
	game_time_id: 429,
	raw_time: '2025-02-17T16:29:00.247934Z',
};

export const patchMeasureEvent = {
	patch_measure_event_id: 76,
	world_id: 'prod_LEAP2',
	player_id: 849201,
	patch_id: 'patch_0_Thriving Terrace',
	location_id: 6,
	patch_water_value: 50.0,
	patch_water_level: 'Wet',
	patch_sun_level: 'Part shade',
	game_time_id: 47,
	raw_time: '2025-02-20T18:20:02.747296Z',
};

export const medicalRoomSendEvent = {
	medical_room_send_event_id: 122,
	world_id: 'prod_LEAP2',
	player_id: 237106,
	creature_id: '8c790b58-a461-4f91-9cdb-cd6e76f6ad3d',
	room_id: 2,
	game_time_id: 72,
	raw_time: '2025-02-26T22:01:47.319391Z',
};

export const triageEvent = {
	triage_event_id: 106,
	world_id: 'prod_LEAP2',
	player_id: 793061,
	creature_id: '1a00c8a4-0abd-4697-b9bc-4ef3ac9cb602',
	sickness_category: 0,
	sickness_name: 0,
	game_time_id: 72,
	raw_time: '2025-02-26T21:58:35.078182Z',
};

export const treatmentEvent = {
	treatment_event_id: 94,
	world_id: 'prod_LEAP2',
	player_id: 350987,
	creature_id: 'ea3025c8-7e3b-474a-9726-43264a4123f2',
	item_id: 1247,
	hidden_item_def_id: 65,
	item_quality: 57,
	room_id: 0,
	sickness_category: 3,
	sickness_name: 5,
	cured: false,
	treatment_health_delta: -0.05,
	treatment_mood_delta: 0.157,
	treatment_social_delta: 0.2,
	game_time_id: 71,
	raw_time: '2025-02-26T21:48:38.102915Z',
};

export const playerTradeItemEvent = {
	player_trade_item_event_id: 35,
	world_id: 'prod_LEAP2',
	player_id: 416205,
	receiving_player_id: 350987,
	item_id: 895,
	hidden_item_def_id: 6,
	location_id: 9,
	player_trade_item_event_pos_x: 185.81,
	player_trade_item_event_pos_y: -121.42,
	game_time_id: 66,
	raw_time: '2025-02-26T21:10:22.065793Z',
};

// Record
export const sicknessEvent = {
	sickness_event_id: 429,
	world_id: 'prod_LEAP2',
	creature_id: '5fd17480-97b3-47cc-a103-eb972bca357c',
	sickness_category: 2,
	location_id: 80,
	game_time_id: 0,
	raw_time: '2025-03-05T16:14:57.600529Z',
};

export const smashingMinigameEvent = {
	world_id: 'prod_LEAP2',
	player_id: 416205,
	game_time_id: 76,
	raw_time: '2025-03-04T21:53:19.197978Z',
	crafting_cancelled: false,
	average_input_item_quality: 74,
	output_item_quality: 87,
	crafted_item_id: 1275,
	hidden_item_def_id: 50,
	smashing_minigame_event_id: 28,
	first_smash_distance: 1.53205109,
	second_smash_distance: 24.5529251,
	third_smash_distance: 16.2407074,
};

export const runeMinigameEvent = {
	world_id: 'prod_LEAP2',
	player_id: 907384,
	game_time_id: 17,
	raw_time: '2025-02-12T21:57:29.173447Z',
	crafting_cancelled: false,
	average_input_item_quality: 44,
	output_item_quality: null,
	crafted_item_id: null,
	hidden_item_def_id: null,
	rune_minigame_event_id: 7,
	grid_size: 4,
	wrong_connections_tried: 6,
};

export const slicingMinigameEvent = {
	world_id: 'prod_LEAP2',
	player_id: 762034,
	game_time_id: 75,
	raw_time: '2025-02-27T17:34:44.990951Z',
	crafting_cancelled: false,
	average_input_item_quality: 49,
	output_item_quality: 74,
	crafted_item_id: 1273,
	hidden_item_def_id: 29,
	slicing_minigame_event_id: 116,
	correct_items_sliced: 15,
	correct_items_missed: 0,
	incorrect_items_sliced: 0,
};

export const brewingMinigameEvent = {
	world_id: 'prod_LEAP2',
	player_id: 350987,
	game_time_id: 71,
	raw_time: '2025-02-26T21:47:16.035023Z',
	crafting_cancelled: false,
	average_input_item_quality: 60,
	output_item_quality: 57,
	crafted_item_id: 1247,
	hidden_item_def_id: 65,
	brewing_minigame_event_id: 159,
	target_temperature: 360.0,
	average_temperature: 5932.243,
	temperature_difference: 63.000618,
};

export const challengeHubEvent = {
	challenge_hub_event_id: 647,
	world_id: 'prod_CCProd',
	player_id: 32373,
	event_id: 'complete-task',
	challenge_name: 'data-journal',
	step_index: 2,
	task_index: 1,
	game_time_id: 431,
	raw_time: '2025-02-17T16:52:06.265556Z',
};

export const creatureStatsEvent = {
	creature_stats_event_id: 49590,
	world_id: 'prod_CCProd',
	creature_id: '76e7c5a7-3324-4c96-a5ac-af7a0e8d6c3c',
	creature_stats_event_health: 0.546708941,
	creature_stats_event_mood: 0.262136221,
	creature_stats_event_social: 0.292812347,
	game_time_id: 432,
	raw_time: '2025-02-17T16:55:39.238211Z',
};
