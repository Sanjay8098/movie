import mongoose from "mongoose";

const config=async()=>{
  try {`1`
  await  mongoose.connect('mongodb://localhost:27017/movie')
  // await mongoose.connect("mongodb+srv://@cluster0.mp19l.mongodb.net/?retryWrites=true&w=majority")
  console.log("DBconected");
  
} catch (error) {
  console.log("error",error);
}
}
const db = connection;

export default db;