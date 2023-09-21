import { Router } from 'express';
import authController from '../controllers/users/authController.js';
import { SignUpSchema } from '../validators/SignUpValidator.js';
import { SignInSchema } from '../validators/SignInValidator.js';
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js'
import emailExists from '../middlewares/emailExists.js';
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js';
const authRouter = Router();

const { signUp, signIn, signInWithToken } = authController;

authRouter.post( '/up', validator(SignUpSchema), emailExists, signUp );
authRouter.post( '/in', validator(SignInSchema), accountExistsSignIn, signIn );
authRouter.post( '/token', passport.authenticate( 'jwt', {session:false}), signInWithToken )

export default authRouter;