import mongoose from "mongoose";

export async function connectDB() {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/notes-mini-app");
        console.log("DB connected");
    } catch (error) {
        console.log(error);
        throw new Error("DB connection failed");
    }

}