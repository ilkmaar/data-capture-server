// Import all schema files
import * as infoSchemas from './infoSchemas.js';
import * as timeSchemas from './timeSchemas.js';
import * as entitySchemas from './entitySchemas.js';
import * as actionSchemas from './actionSchemas.js';
import * as recordSchemas from './recordSchemas.js';

// Export all schemas
export default { 
  ...infoSchemas, 
  ...timeSchemas, 
  ...entitySchemas, 
  ...actionSchemas, 
  ...recordSchemas 
};