import express from 'express';
import { getOldRouteConfigs } from '../config/apiConfig.js';

const router = express.Router();

getOldRouteConfigs().forEach(config => {
    router.post(config.route, ...config.middlewares);
});

export default router;