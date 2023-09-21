import 'dotenv/config.js';
import '../../config/database.js';
import User from '../../models/User.js'

let userData = [
    {
        "username": "Ramón Serrano",
        "email": "developer@ramonserranoprofile.tech",
        "password": "ramoncito-1234"
    },
]
User.insertMany(userData);