const Category = require("../model/category")

exports.create=async(req,res,next)=>{
    try {
        const { name }=req.body
        
        const result=await Category.findOne({name})
        
        if(result){
           return res.status(400).json(`"${name}" already exist`)
        }
        const category=await new Category({name}).save()
        res.json(category)

    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.list=async(req,res,next)=>{
    try {
        const category=await Category.find({})
        res.json(category)

        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.read=async(req,res,next)=>{
    try {
        const id=req.params.id
        const category=await Category.findById({_id:id})
        res.json(category)
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.update=async(req,res,next)=>{
    try {
        const id=req.params.id
        const { name }=req.body
        
        
        const category=await Category.findOneAndUpdate({_id:id},{name},{new:true})
        
        res.json(category)
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.remove=async(req,res,next)=>{
    try {
        const id=req.params.id
       
        const category=await Category.findOneAndRemove({_id:id})
        
        res.json(category)
        
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
