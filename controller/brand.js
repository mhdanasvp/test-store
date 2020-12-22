const Brand = require("../model/brand")

exports.create=async(req,res,next)=>{
    try {
        const { name }=req.body
        
        const result=await Brand.findOne({name})
        
        if(result){
           return res.status(400).json(`"${name}" already exist`)
        }
        const brand=await new Brand({name}).save()
        res.json(brand)

    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.list=async(req,res,next)=>{
    try {
        const brand=await Brand.find({})
        res.json(brand)

        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.read=async(req,res,next)=>{
    try {
        const id=req.params.id
        const brand=await Brand.findById({_id:id})
        res.json(brand)
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.update=async(req,res,next)=>{
    try {
        const id=req.params.id
        const { name }=req.body
        
        
        const brand=await Brand.findOneAndUpdate({_id:id},{name},{new:true})
        
        res.json(brand)
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
exports.remove=async(req,res,next)=>{
    try {
        const id=req.params.id
       
        const brand=await Brand.findOneAndRemove({_id:id})
        
        res.json(brand)
        
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
