import { expect } from 'chai';
import { describe, it } from 'mocha';

import { oldDataTypes } from '../src/config/oldDataConfig.js';
import { newDataTypes } from '../src/config/newDataConfig.js';

// Import your schemas
const generateTests = (oldType, newConfig, testData) => {
  describe(`Schema Validation for ${oldType}, ${newConfig.route}`, () => {
      it(`should validate test data for ${oldType}`, async () => {
          const translatedData = await newConfig.translator(testData);
          const { error, value } = newConfig.schema.validate(translatedData);
          expect(error).to.be.undefined;
      });
  });
};

Object.keys(oldDataTypes).forEach(oldDataType => {
    const oldDataTypeConfig = oldDataTypes[oldDataType];
    oldDataTypeConfig.newTypes.forEach((newType, index) => {
        const newDataTypeConfig = newDataTypes[newType];
        const testData = oldDataTypeConfig.testData[index];
        if (newDataTypeConfig && testData) {
            generateTests(oldDataType, newDataTypeConfig, testData);
        }
    });
});