import express from 'express';
import { getNewRouteConfigs } from '../config/apiConfig.js';

const router = express.Router();

getNewRouteConfigs().forEach(config => {
    router.post(config.route, ...config.middlewares);
});

export default router;