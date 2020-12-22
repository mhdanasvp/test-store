const express = require('express');
const router=express.Router()
const { create, read, list,remove, update }=require("../controller/product");


router.post("/product",create)
router.get("/product/:id",read)
router.get("/products",list)
router.put("/product/:id",update)
router.delete("/product/:id",remove)



module.exports=router