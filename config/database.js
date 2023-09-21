import 'dotenv/config.js';
import mongoose from 'mongoose';


let mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true,} )
    .then ( () => console.log('Connected to MongoDB successfully'))
    .catch ( error => console('Error to get MongoDB connection',error))