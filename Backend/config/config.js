import mongoose from "mongoose";

const config=async()=>{
    try {
        await mongoose.connect('mongodb://localhost/Sanjay')
        // await mongoose.connect('mongodb:mongodb+srv://sanjay:<852741>@cluster0.h2td0sl.mongodb.net/')
        console.log("DB connected");
    } catch (error) {
        console.log("couldn't connect DB",error);
    }
}

export default config;