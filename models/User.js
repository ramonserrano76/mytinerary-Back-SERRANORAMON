import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },    
    image: { type: String, default: 'https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Isolated-PNG.png' },
    birth_date: { type: Date },
    age: { type: Number },
    phone: { type: Number },
    country: { type: String },
    verified: { type: Boolean, default: false }
},
    {
        timestamps: true
    }
)

const User = model('users', userSchema)

export default User