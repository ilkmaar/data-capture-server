// middleware/validateSchema.js
/**
 * Middleware to validate request body against a Joi schema.
 *
 * @param {object} schema - Joi schema object for validation.
 * @returns {function} Middleware function for validation.
 */
export const validateSchema = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({ 
                message: 'Validation failed',
                errors: error.details.map(({ path, message }) => ({
                    field: path.join('.'),
                    message
                }))
            });
        }

        req.validatedData = value;
        next();
    };
};