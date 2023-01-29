import express from "express"

const registrationRouter = express.Router()

registrationRouter.post("/",(req,res)=>{
    res.send("Registration HIT.")
})

export default registrationRouter
