const mongoose= require("mongoose")

const facebookSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surname:{
        type:String
        
    },
    newPassword:{
        type:String
    },
    dateOfBirth:{
        type:String
    },
    gender:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
})

const facebookModel= mongoose.model("Facebook", facebookSchema)

module.exports=facebookModel