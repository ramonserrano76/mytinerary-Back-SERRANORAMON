import joi from 'joi';
import joiPwd from 'joi-password-complexity';

const complexityOptons = {
    min: 4,
    max: 30,
    lowercase: 1,
    uppercase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
}

export const SignInSchema = joi.object({
    email: joi.string().email().required(),
    password: joiPwd(complexityOptons),
});