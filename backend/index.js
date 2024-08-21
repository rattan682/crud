const express=require("express")
const { userroutes } = require("./Routes/user")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

const connectdb=async()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/crud")
        console.log("database connected successfully")
    } catch (error) {
        console.log(error.message)
    }
}

connectdb()
app.use("/",userroutes)
app.listen(2000,()=>{
    console.log("your server is running ")
})