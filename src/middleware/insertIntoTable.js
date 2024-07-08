import supabase from '../db/supabase.js';

/**
 * Middleware to insert or upsert data into a specified table in the Supabase database.
 *
 * @param {string} table - The table name where the data will be inserted.
 * @returns {function} Middleware function for inserting data.
 */
export const insertIntoTable = (table) => {
    return async (req, res) => {
        try {
            // Upsert the validated data into the Supabase database
            const { data: result, error: upsertError } = await supabase
                .from(table)
                .upsert(req.body)
                .select();

            if (upsertError) {
                console.error('Error upserting data:', upsertError.message);
                return res.status(500).json({ error: upsertError.message });
            }

            res.status(201).json(result);

        } catch (error) {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ error: 'Unexpected error occurred' });
        }
    };
};

export default insertIntoTable;