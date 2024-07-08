// middleware/routingMiddleware.js
import { getNewDataTypeConfig } from '../config/apiConfig.js';
import routeEvent from '../utils/routingLogic.js';

/**
 * Middleware to handle routing logic for various data types.
 *
 * @param {string} dataType - The type of data to route.
 * @returns {function} Middleware function for routing data.
 */
export const createRoutingMiddleware = (dataType) => {
    return async (req, res, next) => {
        try {
            const { newType } = routeEvent(dataType, req.body);
            const { translator } = getNewDataTypeConfig(newType);

            req.translatedEvent = await translator(req.body);
            req.newType = newType;

            next();
        } catch (error) {
            console.error("Routing error:", error);
            res.status(400).json({ message: 'Routing failed', error: error.message });
        }
    };
};

export const routeInteractionEvents = createRoutingMiddleware('interaction-events');
export const routePatchEvents = createRoutingMiddleware('patches-events');
export const routeItemDefinitions = createRoutingMiddleware('item-definitions');
export const routeItems = createRoutingMiddleware('items');