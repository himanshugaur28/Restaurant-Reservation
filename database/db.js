import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Restaurant",
        });
        console.log("DB connection successful");
    } catch (error) {
        console.log("DB connection failed", error);
    }
};
