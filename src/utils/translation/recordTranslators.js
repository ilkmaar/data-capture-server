import { createIdMapping, translateBase } from '../translationHelpers.js';
import { lookupSunType, lookupRainType } from '../valueLookups.js';

export const translatePatchHealthRecord = async (data, lookups = null) => {
	const fields = [
		{ key: 'patch_health_record_time', value: (d) => d.raw_time },
		{
			key: 'patch_health_record_growth_level',
			value: (d) => d.patch_health_growth,
		},
		{
			key: 'patch_health_record_light_level',
			value: (d) => d.patch_health_light,
		},
		{
			key: 'patch_health_record_shadow_level',
			value: (d) => d.patch_health_shadow,
		},
		{
			key: 'patch_health_record_stability_level',
			value: (d) => d.patch_health_stability,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (d) => d.world_id },
		{ key: 'game_time_id', extractor: (d) => d.game_time_id },
		{ key: 'patch_id', extractor: (d) => d.patch_id },
	];
	return {
		...createIdMapping('patch_health_record', data.patch_health_id),
		...(await translateBase(
			data,
			'patches-healths',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateWeatherRecord = async (data, lookups = null) => {
	const fields = [
		{ key: 'weather_record_time', value: (d) => d.raw_time },
		{
			key: 'weather_record_sun_type',
			value: (d) => lookupSunType(d.sun_type),
		},
		{
			key: 'weather_record_rain_type',
			value: (d) => lookupRainType(d.rain_type),
		},
	];
	const references = [
		{ key: 'world_id', extractor: (d) => d.world_id },
		{ key: 'day_id', extractor: (d) => d.day_id },
		{ key: 'island_id', extractor: (d) => d.weather_event_island },
	];
	return {
		...createIdMapping('weather_record', data.weather_event_id),
		...(await translateBase(
			data,
			'weather-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateCreatureStateRecord = async (data, lookups = null) => {
	const fields = [
		{ key: 'creature_state_record_time', value: (d) => d.raw_time },
		{
			key: 'creature_state_record_health',
			value: (d) => d.creature_move_event_health,
		},
		{
			key: 'creature_state_record_mood',
			value: (d) => d.creature_move_event_mood,
		},
		{
			key: 'creature_state_record_social',
			value: (d) => d.creature_move_event_social,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (d) => d.world_id },
		{ key: 'creature_id', extractor: (d) => d.creature_id },
		{ key: 'area_id', extractor: (d) => d.location_id },
	];
	return {
		...createIdMapping(
			'creature_state_record',
			data.creature_move_event_id,
		),
		...(await translateBase(
			data,
			'creature-move-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translatePlayerLocationRecord = async (event, lookups = null) => {
	const fields = [
		{ key: 'player_location_record_time', value: (e) => e.raw_time },
		{
			key: 'player_location_record_x',
			value: (e) => e.player_move_event_pos_x,
		},
		{
			key: 'player_location_record_y',
			value: (e) => e.player_move_event_pos_y,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'player_id', extractor: (e) => e.player_id },
		{ key: 'area_id', extractor: (e) => e.location_id },
	];
	return {
		...createIdMapping(
			'player_location_record',
			event.player_move_event_id,
		),
		...(await translateBase(
			event,
			'player-move-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateCreatureActivityRecord = async (
	event,
	lookups = null,
) => {
	const fields = [
		{ key: 'creature_activity_record_time', value: (e) => e.raw_time },
		{
			key: 'creature_activity_record_health_change',
			value: (e) => e.creature_activity_event_health_delta,
		},
		{
			key: 'creature_activity_record_mood_change',
			value: (e) => e.creature_activity_event_mood_delta,
		},
		{
			key: 'creature_activity_record_social_change',
			value: (e) => e.creature_activity_event_social_delta,
		},
	];
	const references = [
		{ key: 'world_id', extractor: (e) => e.world_id },
		{ key: 'game_time_id', extractor: (e) => e.game_time_id },
		{ key: 'creature_id', extractor: (e) => e.creature_id },
		{ key: 'area_id', extractor: (e) => e.location_id },
		{ key: 'activity_type_id', extractor: (e) => e.activity_event_type },
	];
	return {
		...createIdMapping(
			'creature_activity_record',
			event.creature_activity_event_id,
		),
		...(await translateBase(
			event,
			'creature-activity-events',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateFriendshipRecord = async (friendship, lookups = null) => {
	const fields = [
		{ key: 'friendship_record_time', value: (f) => f.raw_time },
		{ key: 'friendship_level', value: (f) => f.personal_rep_value },
	];
	const references = [
		{ key: 'world_id', extractor: (f) => f.world_id },
		{ key: 'game_time_id', extractor: (f) => f.game_time_id },
		{ key: 'player_id', extractor: (f) => f.player_id },
		{ key: 'creature_id', extractor: (f) => f.creature_id },
	];
	return {
		...createIdMapping('friendship_record', friendship.personal_rep_id),
		...(await translateBase(
			friendship,
			'personal-reputations',
			fields,
			references,
			lookups,
		)),
	};
};

export const translateImbalanceRecord = async (imbalance, lookups = null) => {
	const fields = [
		{ key: 'imbalance_record_time', value: (i) => i.raw_time },
		{ key: 'imbalance_metric', value: (i) => i.imbalance_metric_id },
		{ key: 'imbalance_record_value', value: (i) => i.value },
		{ key: 'imbalance_record_value_text', value: (i) => i.value_readable },
		{ key: 'faction_1_id', value: (i) => i.faction_1_id },
		{ key: 'faction_2_id', value: (i) => i.faction_2_id },
	];
	const references = [
		{ key: 'world_id', extractor: (i) => i.world_id },
		{ key: 'game_time_id', extractor: (i) => i.game_time_id },
	];
	return {
		...createIdMapping('imbalance_record', imbalance.imbalance_record_id),
		...(await translateBase(
			imbalance,
			'imbalance-records',
			fields,
			references,
			lookups,
		)),
	};
};
