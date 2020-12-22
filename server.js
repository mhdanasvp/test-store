const express=require("express")
const mongoose=require("mongoose")
const{ readdirSync }=require('fs')
const morgan = require('morgan');
require("dotenv").config()

const app=express()

mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>console.log("mongoose running"))
.catch(err=>console.log(err))

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


readdirSync("./routes").map((r)=>app.use("/api",require(`./routes/${r}`)))

app.use((req,res,next)=>{
    const error=new Error("Not found")
    error.status=404
    next(error)
    
})
app.use((err,req,res,next)=>{
    res.status(err.status||500)
    res.send({
        status:err.status,
        message:err.message
    })
})


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
})

