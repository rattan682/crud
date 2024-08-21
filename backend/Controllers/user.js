const { usermodel } = require("../Models/users");

const getallusers = async (req, res) => {
  try {
    const allusers = await usermodel.find().sort({_id:-1});
    res.status(200).json(allusers)
  } catch (error) {
    res.status(500);
  }
};
const createnewuser=async(req,res)=>{
    try {
      console.log(req.body)
        const newuser=await usermodel.create(req.body)
        const allusers=await usermodel.find({})
        res.status(201).json(allusers)
    } catch (error) {
        res.status(500)
        
    }
}
const deleteuser=async(req,res)=>{
    try {
        await usermodel.findByIdAndDelete({_id:req.params.id})
        const allusers=await usermodel.find()
        res.status(200).json(allusers)
    } catch (error) {
        res.status(500)
        
    }
}
const edituser=async(req,res)=>{
    try {
        const id=req.params.id
        console.log(id)
        console.log(req.body)
        await usermodel.replaceOne({_id:id},req.body)
        const allusers=await usermodel.find()
        res.status(200).json(allusers)
    } catch (error) {
        res.status(500)
        
    }
}
module.exports = {
  getallusers,
  createnewuser,
  deleteuser,
  edituser
};
