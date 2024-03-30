import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();




mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('db connected'))
    .catch(err => console.error('Error connecting to database:', err));