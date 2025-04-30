# Data Capture Server

A robust ETL (Extract, Transform, Load) pipeline for processing and standardizing game data from FableVision's API, making it available for querying and real-time subscriptions through Supabase.

## Overview

This service acts as a bridge between legacy and new data formats, providing:

- Data cleaning and standardization
- Field name normalization
- Addition of missing data and values
- Structured database storage
- Support for both legacy and new API formats

## Architecture

The server provides two main API paths:
- `/api/*` - Direct storage of data in the new format
- `/fv_api/*` - Compatibility layer for legacy data that translates to the new format

### Data Categories

The system processes various types of game data:
- Entity data (worlds, players, creatures, resources)
- Action data (crafting, foraging, giving)
- Record data (weather, friendship, locations)
- Info data (colors, factions, areas)
- Time data (days, seasons, game times)

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Validation**: Joi
- **Testing**: Mocha, Chai, Supertest
- **Logging**: Winston

## Getting Started

### Prerequisites

- Node.js (v16+)
- NPM
- Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```

### Running the Server

```
npm run start
```

## API Usage

The server accepts POST requests to endpoints matching the data type:

```
POST /api/world           # New format
POST /fv_api/world        # Legacy format (will be translated)
```

Each endpoint validates incoming data against a schema before processing.

## Development

### Testing

```
npm run test:schemas      # Test schema validation
npm run test:translations # Test data translation (requires database)
npm run test:routes       # Test API endpoints
```

### Extending the API

To add or update a data type:

1. Add test data to `tests/testData.js`
2. Define/update schemas in `schemas/old` and `schemas/new`
3. Configure data type in `config/types/old` and update as needed
4. Create/update translator in `utils/translation`
5. Add any new lookup fields to `config/index.js`
6. Update database tables in Supabase
7. Add data types to `DATA_LOAD_ORDER` in `config/index.js`
8. Run tests to verify

## License

MIT