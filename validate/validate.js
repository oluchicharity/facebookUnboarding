//import hapi joi
const hapijoivalidator= require("@hapi/joi")

//create a function for it

const validateFacebook= (data)=>{
    const validateUser= hapijoivalidator.object({
        firstName:hapijoivalidator.string().required(),
        surname: hapijoivalidator.string().required(),
        newPassword: hapijoivalidator.string().required(),
        dateOfBirth: hapijoivalidator.string().required(),
        gender: hapijoivalidator.string().required().max(1),
        email:hapijoivalidator.string().required()
    });
    return validateUser.validate(data)
};

const validateLogin= (data)=>{
    const validating= hapijoivalidator.object({
        newPassword: hapijoivalidator.string().required(),
        email:hapijoivalidator.string().required()
    })
    return validating.validate(data)
}

module.exports={validateFacebook,validateLogin }