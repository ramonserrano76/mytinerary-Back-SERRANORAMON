import User from '../models/User.js'

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        req.user = {
            id: user._id,
            email: user.email,
            image: user.image,
            password: user.password,
            role: user.role,
        }
        return next()
    }
    return res
        .status(400)
        .json({ success: false, message: 'user does not exist!' })
}

export default accountExistsSignIn;