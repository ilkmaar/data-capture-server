import supabase from '../src/db/supabase.js';
import infoQueries from './sql/infoQueries.js';
import timeQueries from './sql/timeQueries.js';
import entityQueries from './sql/entityQueries.js';
import actionQueries from './sql/actionQueries.js';
import recordQueries from './sql/recordQueries.js';

import { ALL_TABLES } from './config.js';

// Define your policies as objects
const ANON_CAN_SELECT_POLICY = {
	policyName: 'Allow anonymous read access',
	action: 'SELECT',
	condition: "auth.role() = 'anon'",
};

const SERVICE_CAN_INSERT_POLICY = {
	policyName: 'Allow service_role insert access',
	action: 'INSERT',
	condition: "auth.role() = 'service_role'",
};

const SPECIAL_POLICY = {
	policyName: 'Special access policy',
	action: 'ALL',
	condition: "auth.role() = 'service_role'",
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
	for (const query of queries) {
		const { error } = await supabase.rpc('execute_sql', { sql: query });
		if (error) {
			console.error('Error executing query:', error.message);
		} else {
			console.log('Query executed successfully');
		}
	}
}

async function setSecurityPolicies(policiesToApply) {
	for (const { policy, applies_to } of policiesToApply) {
		for (const tableName of applies_to) {
			// Enable RLS for the table (only needed once per table)
			const enableRLSQuery = `ALTER TABLE ${tableName} ENABLE ROW LEVEL SECURITY;`;
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

			// Drop existing policy if it exists
			const dropPolicyQuery = `DROP POLICY IF EXISTS "${policy.policyName}" ON ${tableName};`;
			let { error: dropError } = await supabase.rpc('execute_sql', {
				sql: dropPolicyQuery,
			});
			if (dropError) {
				console.error(
					`Error dropping policy "${policy.policyName}" on table ${tableName}:`,
					dropError.message,
				);
				continue;
			}

			// Create the policy
			const policyQuery = `
        CREATE POLICY "${policy.policyName}" ON ${tableName}
        FOR ${policy.action} USING (${policy.condition});
      `;
			let { error: policyError } = await supabase.rpc('execute_sql', {
				sql: policyQuery,
			});
			if (policyError) {
				console.error(
					`Error creating policy "${policy.policyName}" on table ${tableName}:`,
					policyError.message,
				);
			} else {
				console.log(
					`Policy "${policy.policyName}" applied successfully on table ${tableName}`,
				);
			}
		}
	}
}

// Main function to create tables and set policies
async function setupDatabase() {
	try {
		await executeQueries(infoQueries);
		await executeQueries(timeQueries);
		await executeQueries(entityQueries);
		await executeQueries(actionQueries);
		await executeQueries(recordQueries);

		// await setSecurityPolicies(policiesToApply);
	} catch (error) {
		console.error('Error setting up database:', error.message);
	}
}

// Run the setup
setupDatabase().catch(console.error);
