require("../models/model")
const facebookModel = require("../models/model")
const validation=require("../validate/validate")
const jwt= require("jsonwebtoken")
require("dotenv").config()

const signUp = async (req,res)=>{
try {
    const {error}= await validation(req.body)
            if(error){
                res.status(500).json({message:error.message})
        }else{
            const{firstName, surname, newPassword,dateOfBirth,gender,email}=req.body
            
            if(!firstName){
                res.status(400).json(`please fill in your firstName`)
            }
            if(!surname){
                res.status(400).json(`please fill in your surname`)
            }
            if(!newPassword){
                res.status(400).json(`password is required`)
            }
            if(!dateOfBirth){
                res.status(400).json(`please fill in your DOB`)
            }
            if(!gender){
                res.status(400).json(`please specify your gender`)
            }
            if(!email){
                res.status(400).json(`you can not register without your email`)
            }
        const user=await facebookModel.create({
            firstName:firstName,
            surname:surname,
            newPassword:newPassword,
            dateOfBirth:dateOfBirth,
            gender:gender,
            email:email
        })
        res.status(200).json({message:`user has been created`, data:user})
    }
    
} catch (error) {
    res.send(error.message)
}
}

const login= async (req,res)=>{
try {
    const{email,newPassword}= req.body;
    const emailExist= await facebookModel.findOne({email})
    if(!emailExist){
        res.status(404).json({message:`user not found`})
    }
    if(!newPassword){
        req.status(400).json({message:`incorrect password`}) 
     }    
            const token=jwt.sign(
                {userId:emailExist._id, email:emailExist.email},process.env.SECRET,{expiresIn:"1d"})
               
               res.status(200).json({messsage:`login successful`, token})
    
} catch (error) {
    res.send(error.message)
}
}

module.exports={
    signUp,login
}


