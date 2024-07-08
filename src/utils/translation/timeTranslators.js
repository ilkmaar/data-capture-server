import { createIdMapping, translateBase } from '../translationHelpers.js';

export const translateDay = (day) => ({
    ...createIdMapping('day', day.day_id),
    day_number: day.day_id,
    day_name: day.day_name
});

export const translateTimeOfDay = (timeOfDay) => ({
    ...createIdMapping('time_of_day', timeOfDay.time_of_day_id),
    time_of_day_name: timeOfDay.time_of_day_name
});

export const translateSeason = (season) => ({
    ...createIdMapping('season', season.season_id),
    season_name: season.season_name
});

export const translateGameTime = async (gameTime, lookups = null) => {
    const fields = [
        { key: 'game_time_number', value: (g) => g.game_time_id }
    ];
    const references = [
        { key: 'day_id', extractor: (g) => g.day_id },
        { key: 'time_of_day_id', extractor: (g) => g.time_of_day_id },
        { key: 'season_id', extractor: (g) => g.season_id }
    ];
    return {
        ...createIdMapping('game_time', gameTime.game_time_id),
        ...await translateBase(gameTime, 'game-times', fields, references, lookups)
    };
};