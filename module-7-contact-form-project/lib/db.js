import mongoose from "mongoose";

export async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to database", connection.connection.host);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to connect to database", error);
    }
}