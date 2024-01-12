const express= require("express")

const{ signUp, login, getAll }=require("../controllers/controller")
const authentication= require("../middleware/authentication")
// const validating= require("../validate/validate")

const router= express.Router()

router.post("/signUP", signUp)

router.post("/login", login)

router.get("/getAll", getAll)

module.exports= router