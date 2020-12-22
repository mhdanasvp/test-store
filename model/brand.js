const mongoose = require('mongoose');

const brandSchema= new mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:25,
        required:true,
        unique:true
    }
},{timestamps:true})

const Brand=mongoose.model("Brand",brandSchema)

module.exports=Brand