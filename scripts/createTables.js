import supabase from '../src/db/supabase.js';
import actionQueries from './sql/actionQueries.js';

console.log('Starting table creation...');
console.log(`Found ${actionQueries.length} action queries to execute`);

// Function to execute a query with robust error handling
async function executeQuery(query) {
	try {
		console.log(`Executing query: ${query.substring(0, 50)}...`);

		// Using the direct SQL method
		const { data, error } = await supabase.sql(query);

		if (error) {
			console.error('Error executing query:', error.message);
			return false;
		} else {
			console.log('Query executed successfully');
			return true;
		}
	} catch (err) {
		console.error('Exception executing query:', err.message);
		return false;
	}
}

// Main function to create the tables
async function createTables() {
	console.log('Creating tables...');

	let successCount = 0;
	let failCount = 0;

	// Execute each query in the actionQueries array
	for (let i = 0; i < actionQueries.length; i++) {
		const query = actionQueries[i];
		console.log(`Processing query ${i + 1} of ${actionQueries.length}`);

		const success = await executeQuery(query);
		if (success) {
			successCount++;
		} else {
			failCount++;
		}
	}

	console.log(
		`Table creation complete. Success: ${successCount}, Failed: ${failCount}`,
	);
}

// Run the function
createTables()
	.then(() => {
		console.log('Setup complete');
		process.exit(0);
	})
	.catch((err) => {
		console.error('Setup failed:', err);
		process.exit(1);
	});
