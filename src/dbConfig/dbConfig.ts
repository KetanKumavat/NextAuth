import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection;
        connection.on('Connected',()=>{
            console.log(" Successfully Connected to MongoDB");
        })
        connection.on('error',(err)=>{
            console.log("Error connecting to MongoDB",err);
            process.exit();
        })
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }    
}