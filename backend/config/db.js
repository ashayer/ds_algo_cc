import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();


//mongoose connection to cloud mongo
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}