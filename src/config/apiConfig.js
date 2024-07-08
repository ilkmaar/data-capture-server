// config/apiConfig.js
import { validateSchema } from "../middleware/validateSchema.js";
import { translateData } from "../middleware/translateData.js";
import insertIntoTable from "../middleware/insertIntoTable.js";

import { newDataTypes } from "./newDataConfig.js";
import { oldDataTypes } from "./oldDataConfig.js";

export const getNewDataTypeConfig = (type) => newDataTypes[type];
export const getOldDataTypeConfig = (type) => oldDataTypes[type];

// Utility functions
export const getExternalFetchConfigs = () => 
    Object.entries(oldDataTypes).map(([type, config]) => ({
        type,
        url: config.externalUrl,
        schema: config.schema
    }));

export const getOldRouteConfigs = () =>
    Object.entries(oldDataTypes).map(([type, config]) => {
        const middlewares = [validateSchema(config.schema)];
        
        if (config.router) {
            middlewares.push(
                config.router,
                async (req, res, next) => {
                    try {
                        const { translatedEvent, newType } = req;
                        const newTypeConfig = getNewDataTypeConfig(newType);

                        if (!newTypeConfig) {
                            return res.status(404).send('New type configuration not found');
                        }

                        req.body = translatedEvent;

                        const newMiddlewares = [
                            validateSchema(newTypeConfig.schema),
                            insertIntoTable(newTypeConfig.table),
                        ];

                        for (const middleware of newMiddlewares) {
                            await new Promise((resolve, reject) => {
                                middleware(req, res, (err) => {
                                    if (err) reject(err);
                                    else resolve();
                                });
                            });
                        }
                        next();
                    } catch (err) {
                        next(err);
                    }
                }
            );
        } else {
            const newType = config.newTypes[0];
            const newTypeConfig = getNewDataTypeConfig(newType);

            if (!newTypeConfig) {
                throw new Error(`New type configuration not found for type: ${newType}`);
            }

            middlewares.push(
                translateData(newTypeConfig.translator),
                validateSchema(newTypeConfig.schema),
                insertIntoTable(newTypeConfig.table),
            );
        }

        return {
            type,
            route: `/${type}`,
            middlewares,
        };
    });

export const getNewRouteConfigs = () =>
    Object.entries(newDataTypes).map(([type, config]) => ({
        type,
        route: `/${type}`,
        middlewares: [
            validateSchema(config.schema),
            insertIntoTable(config.table),
        ],
    }));