Start with `npm run start`

Creates a server with /api and /fv-api endpoints: - Data at each /api endpoint is stored in the database - Data from each /fv-api endpoint is processed and re-routed to an /api endpoint

Tasks:

-   Add 'is_anomalous' to item and resource definitions
-   Add new fields to weather_events
-   Edit translators and/or tables if appropriate
-   Check process for modifying tables and/or re-using policies

## To update API schema:

-   add a new test data point to tests/testData.js
-   edit incoming schema definition in schemas/old
-   add/edit config for that data type in config/types/old
-   test schema with `npm run test:schemas`
-   edit translator function in utils/translation
-   add/edit new data schema definition in schemas/new
-   add any lookup id fields : table names in config/index.js
-   test with `npm run test:translations`
-   test with `npm run test:routes`
-   add data types to DATA_LOAD_ORDER in config/index.js
-   run `node scripts/loadData.js`
