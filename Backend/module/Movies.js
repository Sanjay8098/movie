import mongoose from "mongoose";

const Movies=mongoose.model('Movies', new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required:true
    },
    img:{
        type: String,
        required:true
    },
    discription:{
        type: String,
        required:true
    }
}));

export default Movies;