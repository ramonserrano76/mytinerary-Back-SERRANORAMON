import User from "../../models/User.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";


const authController = {

    signUp: async (req, res, next) => {
        try {
            const { email, password } = req.body

            const userInDB = await User.findOne({ email })

            if (userInDB) {
                return res.json({ success: false, error: "email already registered" })
            }

            const passwordHash = bcryptjs.hashSync(password, 10)

            const newObj = { ...req.body }
            newObj.password = passwordHash

            const newUser = await User.create(newObj)

            const userResponse = { email: newUser.email, country: newUser.country, image: newUser.image, name: newUser.name, _id: newUser._id }

            const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, { expiresIn: '1h' })

            return res.status(201).json({
                success: true,
                user: userResponse,
                token: token,
                message: 'SignUp successfully'
            })

        } catch (error) {
            res.json({ success: false, error: error })
            next(error)
        }

    },

    signIn: async (req, res, next) => {
        try {
            let { email: emailBody, password } = req.body;
            const userInDB = await User.findOne({ email: emailBody });
            if (!userInDB) {
                return res.json({ success: false, error: "no user exists with this email" })
            };
            let passwordValidated = bcryptjs.compareSync(password, userInDB.password);
            if (!passwordValidated) {
                return res.json({ success: false, error: "Email o contraseña incorrecta" })
            };
            const userResponse = { email: userInDB.email, image: userInDB.image, name: userInDB.name, _id: userInDB._id }
            const token = jwt.sign({ email: userInDB.email, image: userInDB.image }, process.env.SECRET_KEY, { expiresIn: '1h' })

            return res
                .status(200)
                .json({
                    success: true,
                    user: userResponse,
                    token: token,
                    message: 'SignIn successfull'
                })
        } catch (error) {
            console.error(error)
            next(error)
        }
    },

    signInWithToken: (req, res) => {
        const userResponse = { email: req.user.email, image: req.user.image, name: req.user.name, _id: req.user._id }
        res.status(200).json({ success: true, user: userResponse, message: 'SignIn successfull' })
    },
}
export default authController;  