import { expect } from 'chai';
import request from 'supertest';
import supabase from '../src/db/supabase.js';
import app from '../src/index.js';

import { oldDataTypes } from '../src/config/oldDataConfig.js';
import { newDataTypes } from '../src/config/newDataConfig.js';

const generateTests = (oldType, newType, newDataTypeConfig, testData) => {
  describe(`FV API Integration Tests for ${oldType} and ${newType}`, () => {

    it(`should handle ${'/' + oldType} route and create ${newType}`, async () => {
      try {
          const response = await request(app)
              .post(`/fv_api/${oldType}`)
              .send(testData)
              .expect(201);
    
          expect(response.body[0]).to.have.property('fv_' + newDataTypeConfig.idField);
  
          const { data, error } = await supabase
              .from(newDataTypeConfig.table)
              .select('*')
              .eq('fv_' + newDataTypeConfig.idField, response.body[0]['fv_' + newDataTypeConfig.idField]);
  
          if (error) {
              console.error('Supabase error:', error);
          } else {
              console.log('Supabase data:', data);
          }
  
          expect(error).to.be.null;
          expect(data).to.have.lengthOf(1);
  
      } catch (err) {
          console.error('Test error:', err);
          throw err; // Re-throw the error to ensure the test fails
      }
    });

    it(`should post and validate translated data for ${oldType} as ${newType}`, async () => {
      const translatedData = await newDataTypeConfig.translator(testData);
      const response = await request(app)
        .post(`/api/${newDataTypeConfig.route}`)
        .send(translatedData)
        .expect(201);

      expect(response.body[0]).to.have.property(newDataTypeConfig.idField);

      const { data, error } = await supabase
        .from(newDataTypeConfig.table)
        .select('*')
        .eq(newDataTypeConfig.idField, response.body[0][newDataTypeConfig.idField]);

      expect(error).to.be.null;
      expect(data).to.have.lengthOf(1);
    });
  });
};

Object.keys(oldDataTypes).forEach(oldDataType => {
    const oldDataTypeConfig = oldDataTypes[oldDataType];
    oldDataTypeConfig.newTypes.forEach((newType, index) => {
        const newDataTypeConfig = newDataTypes[newType];
        const testData = oldDataTypeConfig.testData[index];
        if (newDataTypeConfig && testData) {
            generateTests(oldDataType, newType, newDataTypeConfig, testData);
        }
    });
});