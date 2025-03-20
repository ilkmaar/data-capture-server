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
    treatment_action_room_id INTEGER NOT NULL,
    treatment_action_sickness_category INTEGER NOT NULL,
    treatment_action_sickness_name INTEGER NOT NULL,
    
    -- reference fields
    world_id VARCHAR(255) REFERENCES worlds(world_id),
    game_time_id VARCHAR(255) REFERENCES game_times(game_time_id),
    player_id VARCHAR(255) REFERENCES players(player_id),
    creature_id VARCHAR(255) REFERENCES creatures(creature_id),
    item_id VARCHAR(255) REFERENCES items(item_id)
); 