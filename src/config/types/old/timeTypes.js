import schemas from '../../../schemas/old/index.js';
import * as testData from '../../../../tests/testData.js';
import { EXTERNAL_URL } from '../../index.js';

const oldTimeDataTypes = {
	days: {
		externalUrl: `${EXTERNAL_URL}days/`,
		schema: schemas.daySchema,
		newTypes: ['days'],
		testData: [testData.day],
	},
	'time-of-days': {
		externalUrl: `${EXTERNAL_URL}time-of-days/`,
		schema: schemas.timeOfDaySchema,
		newTypes: ['time-of-days'],
		testData: [testData.timeOfDay],
	},
	seasons: {
		externalUrl: `${EXTERNAL_URL}seasons/`,
		schema: schemas.seasonSchema,
		newTypes: ['seasons'],
		testData: [testData.season],
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
				requiresWorldId: false,
			},
			{
				fieldName: 'time_of_day_id',
				newFieldName: 'time_of_day_id',
				table: 'time_of_days',
				externalIdField: 'fv_time_of_day_id',
				internalIdField: 'time_of_day_id',
				requiresWorldId: false,
			},
			{
				fieldName: 'season_id',
				newFieldName: 'season_id',
				table: 'seasons',
				externalIdField: 'fv_season_id',
				internalIdField: 'season_id',
				requiresWorldId: false,
			},
		],
	},
};

export default oldTimeDataTypes;
