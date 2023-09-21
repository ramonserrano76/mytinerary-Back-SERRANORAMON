

const validator = (Schema) => (req, res, next) => {
        const validation = Schema.validate(req.body, { abortEarly: false });
        
        if (validation.error) {
            console.log(validation);
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }
        return next();
    }

export default validator;