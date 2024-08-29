// tests/schemas/schemas.test.js
import { expect } from 'chai';
import { describe, it } from 'mocha';

// Schemas
import { oldDataTypes } from '../src/config/types/old/index.js';

const generateSchemaTests = (type, schema, testData) => {
	describe(`Schema Validation for ${type}`, () => {
		it(`should validate test data for ${type}`, () => {
			const { error } = schema.validate(testData);
			if (error) {
				console.log(error);
			}
			expect(error).to.be.undefined;
		});
	});
};

Object.entries(oldDataTypes).forEach(([type, config]) => {
	config.testData.forEach((data, index) => {
		generateSchemaTests(type, config.schema, data);
	});
});
