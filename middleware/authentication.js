const jwt= require("jsonwebtoken")
const facebookModel = require("../models/model")
require("dotenv").config()

const authentication= async (req,res,next)=>{
    try {
        const hasauthentication= req.headers.hasauthorization

  if(!hasauthentication){
    res.status(404).json(`user not authenticated`)
  }
  const token= hasauthentication.split(" ")[1]

  const decodeToken= jwt.verify(token, process.env.SECRET)

  if(!decodeToken){
    res.status(400).json(`invalid token`)
  }
  const user = await facebookModel.findById(decodeToken,_id)

  if(!user){
    res.status(404).json(`user not found`)
  }

  req.user= decodeToken

  next()
    } catch (error) {
        
    }

    module.exports= authentication
  



}