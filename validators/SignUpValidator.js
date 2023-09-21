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

export const SignUpSchema = joi.object({
    name: joi.string(),
    email: joi.string().email().required(),
    password: joiPwd(complexityOptons),
    image: joi.string().uri(),
    country: joi.string(),
    birth_date: joi.date().max(Date.now()),
    age: joi.number().min(0).max(80),
    phone: joi.number(),
    verified: joi.boolean(),
})