import supabase from '../src/db/supabase.js';
import actionQueries from './sql/actionQueries.js';
import infoQueries from './sql/infoQueries.js';
import entityQueries from './sql/entityQueries.js';
import recordQueries from './sql/recordQueries.js';
import timeQueries from './sql/timeQueries.js';

// Export the setupDatabase function
export { setupDatabase };

// Define ALL_TABLES array based on the queries we'll be executing
const ALL_TABLES = [
	'public.worlds',
	'public.days',
	'public.time_of_days',
	'public.seasons',
	'public.game_times',
	'public.colors',
	'public.creature_types',
	'public.factions',
	'public.islands',
	'public.locations',
	'public.plots',
	'public.patches',
	'public.resource_categories',
	'public.resource_types',
	'public.item_categories',
	'public.item_varieties',
	'public.item_definitions',
	'public.inventories',
	'public.players',
	'public.creatures',
	'public.items',
	'public.data_tables',
	'public.request_board_items',
	'public.avatar_update_actions',
	'public.treatment_actions',
	'public.creature_interaction_events',
	'public.medical_room_send_events',
	'public.triage_events',
	'public.patch_measure_events',
	'public.creature_stats_events',
	'public.sickness_events',
	'public.player_trade_item_events',
	'public.smashing_minigame_events',
	'public.rune_minigame_events',
	'public.weather_records',
	'public.patch_health_records',
	'public.player_move_records',
	'public.creature_move_records',
	'public.creature_activity_records',
	'public.friendship_records',
	'public.imbalance_records',
];

// Policy definitions
const ANON_CAN_SELECT_POLICY = {
	name: 'anon_can_select',
	definition: `CREATE POLICY "anon_can_select" ON TABLE_NAME
    FOR SELECT 
    TO anon
    USING (true);`,
};

const SERVICE_CAN_INSERT_POLICY = {
	name: 'service_can_insert',
	definition: `CREATE POLICY "service_can_insert" ON TABLE_NAME
    FOR INSERT 
    TO service_role
    WITH CHECK (true);`,
};

// Define which policies apply to which tables
const policiesToApply = [
	{
		policy: ANON_CAN_SELECT_POLICY,
		applies_to: ALL_TABLES,
	},
	{
		policy: SERVICE_CAN_INSERT_POLICY,
		applies_to: ALL_TABLES,
	},
];

// Function to execute a batch of SQL queries
async function executeQueries(queries) {
	console.log(`Executing ${queries.length} queries...`);
	for (const query of queries) {
		try {
			const { error } = await supabase.rpc('execute_sql', { sql: query });
			if (error) {
				console.error('Error executing query:', error.message);
				console.error('Query:', query.substring(0, 100) + '...');
			} else {
				console.log('Query executed successfully');
			}
		} catch (error) {
			console.error('Exception executing query:', error.message);
		}
	}
}

async function setSecurityPolicies(policiesToApply) {
	console.log('Setting security policies...');
	for (const { policy, applies_to } of policiesToApply) {
		for (const tableName of applies_to) {
			// Enable RLS for the table (only needed once per table)
			const enableRLSQuery = `ALTER TABLE ${tableName} ENABLE ROW LEVEL SECURITY;`;
			try {
				let { error: rlsError } = await supabase.rpc('execute_sql', {
					sql: enableRLSQuery,
				});
				if (rlsError) {
					console.error(
						`Error enabling RLS on table ${tableName}:`,
						rlsError.message,
					);
					continue;
				}

				// Apply the policy to the table
				const policyQuery = policy.definition.replace(
					'TABLE_NAME',
					tableName,
				);
				let { error: policyError } = await supabase.rpc('execute_sql', {
					sql: policyQuery,
				});
				if (policyError) {
					console.error(
						`Error applying policy ${policy.name} to table ${tableName}:`,
						policyError.message,
					);
				} else {
					console.log(
						`Policy ${policy.name} applied to table ${tableName}`,
					);
				}
			} catch (error) {
				console.error(
					'Exception setting security policy:',
					error.message,
				);
			}
		}
	}
}

// Main function to set up the database
async function setupDatabase() {
	console.log('Setting up database...');

	try {
		// Check if all query arrays are available
		console.log(
			'Action queries:',
			actionQueries ? actionQueries.length : 'undefined',
		);
		console.log(
			'Time queries:',
			timeQueries ? timeQueries.length : 'undefined',
		);
		console.log(
			'Info queries:',
			infoQueries ? infoQueries.length : 'undefined',
		);
		console.log(
			'Entity queries:',
			entityQueries ? entityQueries.length : 'undefined',
		);
		console.log(
			'Record queries:',
			recordQueries ? recordQueries.length : 'undefined',
		);

		// Create tables in proper order
		console.log('Creating time-related tables...');
		await executeQueries(timeQueries);

		console.log('Creating info tables...');
		await executeQueries(infoQueries);

		console.log('Creating entity tables...');
		await executeQueries(entityQueries);

		console.log('Creating action tables...');
		await executeQueries(actionQueries);

		console.log('Creating record tables...');
		await executeQueries(recordQueries);

		// Apply security policies
		await setSecurityPolicies(policiesToApply);

		console.log('Database setup complete!');
	} catch (error) {
		console.error('Error setting up database:', error.message);
	}
}

// If this file is being executed directly
if (process.argv[1] === import.meta.url) {
	setupDatabase()
		.then(() => {
			console.log('Setup complete. Exiting.');
			process.exit(0);
		})
		.catch((error) => {
			console.error('Setup failed:', error);
			process.exit(1);
		});
}
