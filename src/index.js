import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import oldRoutes from './routes/oldRoutes.js';
import newRoutes from './routes/newRoutes.js';
import { errorHandler } from './utils/errorHandler.js';
import { logger } from './utils/logger.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Logger middleware
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	logger.info(`${req.method} ${req.url}`);
	next();
});

// Routes
app.use('/fv_api', oldRoutes);
app.use('/api', newRoutes);

// Error handling middleware
app.use(errorHandler);

// Only start the server if not in test mode
if (process.env.NODE_ENV !== 'test') {
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
}

// Export the app for testing
export default app;
