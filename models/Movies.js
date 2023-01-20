const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({                 /*Defining a schema for database */ 
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    dateOfRelease:{
        type:Date,
        required:true
    },
    favCharacter:{
        type:String,
        required:true
    },
    movieRating:{
        type:Number,
        required:true
    }
});

const Movies=mongoose.model('Movies',movieSchema);
module.exports=Movies;