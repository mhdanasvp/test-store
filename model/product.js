const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema

const productSchema= new mongoose.Schema({
    item:{
        type:String,
        min:3,
        max:25,
        required:true,
        unique:true
    },
    art_no:{
        type:Number,
        required:true
    },
    sku_id:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    pack_size:{
        type:String,
        required:true
    },
    pur_size:{
        type:Number,
        required:true
    },
    mrp_price:{
        type:Number,
        required:true
    },
    category:{
        type:ObjectId,
        ref:"Category",
        required:true
    },
    brand:{
        type:ObjectId,
        ref:"Brand",
        required:true
    }

},{timestamps:true})

const Product=mongoose.model("Product",productSchema)

module.exports=Product