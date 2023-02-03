import express from "express"
import jwt from "jsonwebtoken"
import fs from "fs/promises"
import bcrypt from "bcrypt"


import { userLoginValidations,errorMiddleWare } from "../middleware/validations/index.js"


const loginRouter = express.Router()

loginRouter.post("/",userLoginValidations(),errorMiddleWare, async (req,res)=>{
    try {
        
        let fileData = await fs.readFile("users.json")
        fileData = JSON.parse(fileData)

        if(fileData.length==0){
           return res.status(401).json({"error":"unauthorized"})

        }

        let foundUser = fileData.find((ele)=> ele.email == req.body.email)

        if(foundUser==false){
            res.status(401).json({"error":"unauthorized"})
        }

        const matchedPasswords =  bcrypt.compare(req.body.password,foundUser.password)
        if(!matchedPasswords){
            res.status(401).json({"error":"Unauthorized Access"})
        }

        const payload = {email : req.body.email, role : foundUser.role}
        const privateKey = "caesar"
        const token = jwt.sign(payload,privateKey,{expiresIn: `1hr`})

        res.status(200).json({"success":"logged in successfully",token})


    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Internal server error"})
    }
})

export default loginRouter