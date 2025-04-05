import mongoose from "mongoose";

 const connectDB = async () =>{ 
    try {
       await mongoose.connect(process.env.MONGO_URI, {dbName:"chart_analysis"});
       console.log("Database Successfully Connected");
    } catch (error) {
        console.log("Failed to connect database", error);
    }
}

export default connectDB;