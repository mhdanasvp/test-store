const express = require('express');
const router=express.Router()
const { create, read, list,remove, update }=require("../controller/brand");


router.post("/brand",create)
router.get("/brand/:id",read)
router.get("/brands",list)
router.put("/brand/:id",update)
router.delete("/brand/:id",remove)



module.exports=router