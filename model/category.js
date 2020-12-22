const mongoose = require('mongoose');

const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:25,
        required:true,
        unique:true
    }
},{timestamps:true})

const Category=mongoose.model("Category",categorySchema)

module.exports=Category