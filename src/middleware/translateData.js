// middleware/translation.js
/**
 * Middleware to translate validated data using a translator function.
 *
 * @param {function} translator - Function to translate data.
 * @returns {function} Middleware function for translating data.
 */
export const translateData = (translator) => {
    return async (req, res, next) => {
        const { validatedData } = req;

        try {
            const translatedData = await translator(validatedData);
            req.body = translatedData;
            next();
        } catch (error) {
            console.error("Error translating data:", error);
            res.status(422).json({ 
                message: 'Translation failed',
                error: error.message 
            });
        }
    };
};