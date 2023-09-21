import User from '../models/User.js';

 async function emailExists(req, res, next) {
    const exists = await User.findOne({ email: req.body.email });
    if (!exists) {
        return next(); // Continúa con la siguiente función middleware
    }
    // Si el correo electrónico ya existe, envía una respuesta de error y no continúes
    return res.status(400).json({
        success: false,
        message: 'Email already exists'
    });
}
export default emailExists;