export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        console.log('Error de validación de esquema');
        const formattedErrors = error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
        }));
        return res.status(400).json({ error: formattedErrors});
    }
};  

