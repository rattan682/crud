const express=require("express")
const { getallusers, createnewuser, deleteuser, edituser } = require("../Controllers/user")
const userroutes=express.Router()
userroutes.get("/",getallusers)
userroutes.post("/create",createnewuser)
userroutes.delete("/delete/:id",deleteuser)
userroutes.put("/edit/:id",edituser)
module.exports={
    userroutes
}