import { Schema, model, Types } from "mongoose";
import User from './User.js'; // Importa el modelo de usuarios

// Define cities Schema
const collection2 = 'cities';
const citiesSchema = new Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    briefDescription: { type: String, required: true },
    itineraries: [
        {
            name: { type: String, required: true },
            activities: [
                {
                    name: { type: String, required: true },
                    duration: { type: String, required: true },
                    price: { type: String, required: true },
                    likes: { type: Number, default: 0 },
                    tags: [{ type: String }]
                }
            ]
        }
    ],
    createdBy: { type: Types.ObjectId, ref: User.collection.name }
}, {
    timestamps: true
});
citiesSchema.index({
    title: 'text',
    location: 'text',
    briefDescription: 'text',
});

// Create model based on cities schema
const City = model(collection2, citiesSchema);

export default City;