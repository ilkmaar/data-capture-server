-- Treatment Actions Table
CREATE TABLE IF NOT EXISTS public.treatment_actions (
    treatment_action_id VARCHAR(255) PRIMARY KEY,
    fv_treatment_action_id INTEGER,
    treatment_action_time TIMESTAMP(6) NOT NULL,
    
    -- data fields
    treatment_action_health_delta FLOAT NOT NULL,
    treatment_action_mood_delta FLOAT NOT NULL,
    treatment_action_social_delta FLOAT NOT NULL,
    treatment_action_cured BOOLEAN NOT NULL,
    treatment_action_room_number INTEGER NOT NULL,
    treatment_action_sickness_category INTEGER NOT NULL,
    treatment_action_sickness_name INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id),
    item_id VARCHAR(255) REFERENCES items(item_id)
);

-- Creature Interaction Events Table
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
    area_id VARCHAR(255) REFERENCES areas(area_id)
);

-- Medical Room Send Events Table
CREATE TABLE IF NOT EXISTS public.medical_room_send_events (
    medical_room_send_event_id VARCHAR(255) PRIMARY KEY,
    fv_medical_room_send_event_id INTEGER,
    medical_room_send_event_time TIMESTAMP(6) NOT NULL,

    -- data fields
    medical_room_send_event_room_number INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id)
);

-- Triage Events Table
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
);

-- Patch Measure Events Table
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
    area_id VARCHAR(255) REFERENCES areas(area_id)
);

-- Creature Stats Events Table
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
);

-- Sickness Events Table
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
    area_id VARCHAR(255) REFERENCES areas(area_id)
);

-- Player Trade Item Events Table
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
    area_id VARCHAR(255) REFERENCES areas(area_id)
);

-- Smashing Minigame Events Table
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
    item_id VARCHAR(255) REFERENCES items(item_id)
);

-- Rune Minigame Events Table
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
);

-- Security policies
-- Enable RLS on all tables
ALTER TABLE public.treatment_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.creature_interaction_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medical_room_send_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.triage_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patch_measure_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.creature_stats_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sickness_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.player_trade_item_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.smashing_minigame_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rune_minigame_events ENABLE ROW LEVEL SECURITY;

-- Create access policies
-- Anonymous select policy
CREATE POLICY "anon_can_select" ON public.treatment_actions FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.creature_interaction_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.medical_room_send_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.triage_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.patch_measure_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.creature_stats_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.sickness_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.player_trade_item_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.smashing_minigame_events FOR SELECT TO anon USING (true);
CREATE POLICY "anon_can_select" ON public.rune_minigame_events FOR SELECT TO anon USING (true);

-- Service role insert policy
CREATE POLICY "service_can_insert" ON public.treatment_actions FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.creature_interaction_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.medical_room_send_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.triage_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.patch_measure_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.creature_stats_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.sickness_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.player_trade_item_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.smashing_minigame_events FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "service_can_insert" ON public.rune_minigame_events FOR INSERT TO service_role WITH CHECK (true); 