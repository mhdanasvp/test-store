const express = require('express');
const router=express.Router()
const { create, read, list,remove, update }=require("../controller/category");


router.post("/category",create)
router.get("/category/:id",read)
router.get("/categories",list)
router.put("/category/:id",update)
router.delete("/category/:id",remove)



module.exports=router