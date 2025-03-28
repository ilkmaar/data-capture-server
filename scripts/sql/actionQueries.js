export const createAvatarUpdateActionsTableQuery = `
CREATE TABLE IF NOT EXISTS public.avatar_update_actions (
    avatar_update_action_id VARCHAR(255) PRIMARY KEY,
    fv_avatar_update_action_id INTEGER,
    avatar_update_action_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    avatar_update_action_body_type INTEGER NOT NULL,
    avatar_update_action_height FLOAT NOT NULL,
    avatar_update_action_face INTEGER NOT NULL,
    avatar_update_action_eyes INTEGER NOT NULL,
    avatar_update_action_nose INTEGER NOT NULL, 
    avatar_update_action_mouth INTEGER NOT NULL,
    avatar_update_action_skin_color VARCHAR(255) NOT NULL,
    avatar_update_action_hairstyle INTEGER NOT NULL,
    avatar_update_action_hair_color VARCHAR(255) NOT NULL,
    avatar_update_action_outfit INTEGER NOT NULL,
    avatar_update_action_outfit_color VARCHAR(255) NOT NULL,
    avatar_update_action_glasses INTEGER NOT NULL,
    avatar_update_action_cane INTEGER NOT NULL,
    avatar_update_action_prosthetic INTEGER NOT NULL,
    avatar_update_action_hearing_aid INTEGER NOT NULL,
    avatar_update_action_diabetes_patch INTEGER NOT NULL,
    avatar_update_action_goggles INTEGER NOT NULL,

    -- reference fields
    world_id VARCHAR(255),
    game_time_id VARCHAR(255),
    player_id VARCHAR(255),

    -- foreign key constraints
    FOREIGN KEY (world_id) REFERENCES worlds(world_id),
    FOREIGN KEY (game_time_id) REFERENCES game_times(game_time_id),
    FOREIGN KEY (player_id) REFERENCES players(player_id)
);`;

export const createTreatmentActionTableQuery = `
CREATE TABLE IF NOT EXISTS public.treatment_actions (
    treatment_action_id VARCHAR(255) PRIMARY KEY,
    fv_treatment_action_id INTEGER,
    treatment_action_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    treatment_action_health_delta FLOAT NOT NULL,
    treatment_action_mood_delta FLOAT NOT NULL,
    treatment_action_social_delta FLOAT NOT NULL,
    treatment_action_cured BOOLEAN NOT NULL,
    treatment_action_room_id INTEGER NOT NULL,
    treatment_action_sickness_category INTEGER NOT NULL,
    treatment_action_sickness_name INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id),
    item_id VARCHAR(255) REFERENCES items(item_id)
);`;

export const createCreatureInteractionEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.creature_interaction_events (
    creature_interaction_event_id VARCHAR(255) PRIMARY KEY,
    fv_creature_interaction_event_id INTEGER,
    creature_interaction_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    creature_interaction_event_health FLOAT NOT NULL,
    creature_interaction_event_mood FLOAT NOT NULL,
    creature_interaction_event_social FLOAT NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id),
    location_id VARCHAR(255) REFERENCES locations(location_id)
);`;

export const createMedicalRoomSendEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.medical_room_send_events (
    medical_room_send_event_id VARCHAR(255) PRIMARY KEY,
    fv_medical_room_send_event_id INTEGER,
    medical_room_send_event_time TIMESTAMP(6) NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id),
    room_id VARCHAR(255) REFERENCES rooms(room_id)
);`;

export const createTriageEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.triage_events (
    triage_event_id VARCHAR(255) PRIMARY KEY,
    fv_triage_event_id INTEGER,
    triage_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    triage_event_sickness_category INTEGER NOT NULL,
    triage_event_sickness_name INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id)
);`;

export const createPatchMeasureEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.patch_measure_events (
    patch_measure_event_id VARCHAR(255) PRIMARY KEY,
    fv_patch_measure_event_id INTEGER,
    patch_measure_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    patch_water_value FLOAT NOT NULL,
    patch_water_level VARCHAR(255) NOT NULL,
    patch_sun_level VARCHAR(255) NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    patch_id VARCHAR(255) REFERENCES patches(patch_id),
    location_id VARCHAR(255) REFERENCES locations(location_id)
);`;

export const createCreatureStatsEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.creature_stats_events (
    creature_stats_event_id VARCHAR(255) PRIMARY KEY,
    fv_creature_stats_event_id INTEGER,
    creature_stats_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    creature_stats_event_health FLOAT NOT NULL,
    creature_stats_event_mood FLOAT NOT NULL,
    creature_stats_event_social FLOAT NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id)
);`;

export const createSicknessEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.sickness_events (
    sickness_event_id VARCHAR(255) PRIMARY KEY,
    fv_sickness_event_id INTEGER,
    sickness_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    sickness_category INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id),
    location_id VARCHAR(255) REFERENCES locations(location_id)
);`;

export const createPlayerTradeItemEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.player_trade_item_events (
    player_trade_item_event_id VARCHAR(255) PRIMARY KEY,
    fv_player_trade_item_event_id INTEGER,
    player_trade_item_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    player_trade_item_event_pos_x FLOAT NOT NULL,
    player_trade_item_event_pos_y FLOAT NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    receiving_player_id VARCHAR(255) REFERENCES players(player_id),
    item_id VARCHAR(255) REFERENCES items(item_id),
    location_id VARCHAR(255) REFERENCES locations(location_id)
);`;

export const createSmashingMinigameEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.smashing_minigame_events (
    smashing_minigame_event_id VARCHAR(255) PRIMARY KEY,
    fv_smashing_minigame_event_id INTEGER,
    smashing_minigame_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    crafting_cancelled BOOLEAN NOT NULL,
    average_input_item_quality FLOAT NOT NULL,
    output_item_quality FLOAT NOT NULL,
    first_smash_distance FLOAT NOT NULL,
    second_smash_distance FLOAT NOT NULL,
    third_smash_distance FLOAT NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    crafted_item_id VARCHAR(255) REFERENCES items(item_id),
    hidden_item_def_id VARCHAR(255) REFERENCES item_definitions(item_definition_id)
);`;

export const createRuneMinigameEventTableQuery = `
CREATE TABLE IF NOT EXISTS public.rune_minigame_events (
    rune_minigame_event_id VARCHAR(255) PRIMARY KEY,
    fv_rune_minigame_event_id INTEGER,
    rune_minigame_event_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    crafting_cancelled BOOLEAN NOT NULL,
    average_input_item_quality FLOAT NOT NULL,
    grid_size INTEGER NOT NULL,
    wrong_connections_tried INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id)
);`;

// Now that all queries are defined, create the export array
const actionQueries = [
	createTreatmentActionTableQuery,
	createCreatureInteractionEventTableQuery,
	createMedicalRoomSendEventTableQuery,
	createTriageEventTableQuery,
	createPatchMeasureEventTableQuery,
	createCreatureStatsEventTableQuery,
	createSicknessEventTableQuery,
	createPlayerTradeItemEventTableQuery,
	createSmashingMinigameEventTableQuery,
	createRuneMinigameEventTableQuery,
	createAvatarUpdateActionsTableQuery,
];

export default actionQueries;
