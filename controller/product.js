const Brand = require("../model/brand");
const Category = require("../model/category");
const Product = require("../model/product");

exports.create=async(req,res,next)=>{
    try {
        const{ item,art_no,sku_id,description,pack_size,pur_size,mrp_price,category,brand }=req.body
        if(!item || !art_no || !sku_id || !description || !pack_size || !pur_size || !mrp_price || !category || !brand){
            return res.status(400).json("all fields are required")
        }
        const categoryExist=await Category.findOne({_id:category})
        if(!categoryExist){
            return res.status(400).json(`category does't exist`)
        }
        const brandExist=await Brand.findOne({_id:brand})
        if(!brandExist){
            return res.status(400).json(`brand does't exist`)
        }
        const product=await new Product(req.body).save()
        res.json(product)





    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.read=async(req,res,next)=>{
    try {
        const id=req.params.id
        const product=await Product.findById({_id:id})
        
            .populate("category","name")
            .populate("brand","name")
        res.json(product)
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.update=async(req,res,next)=>{
    try {
        const id=req.params.id
        const{ item,art_no,sku_id,description,pack_size,pur_size,mrp_price,category,brand }=req.body
        if(!item || !art_no || !sku_id || !description || !pack_size || !pur_size || !mrp_price || !category || !brand){
            return res.status(400).json("all fields are required")
        }
        const categoryExist=await Category.findOne({_id:category})
        if(!categoryExist){
            return res.status(400).json(`category does't exist`)
        }
        const brandExist=await Brand.findOne({_id:brand})
        if(!brandExist){
            return res.status(400).json(`brand does't exist`)
        }
        
        
        const product=await Product.findOneAndUpdate({_id:id},{name},{new:true})
        
        res.json(product)
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.remove=async(req,res,next)=>{
    try {
        const id=req.params.id
        const product=await Product.findOneAndRemove({_id:id})
        
        res.json(product)
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.list=async(req,res,next)=>{
    try {
        const product=await Product.find({})
            
            .populate("category","name")
            .populate("brand","name")
            
        res.json(product)
    } catch (error) {
        console.log(error);
        next(error)
    }
}