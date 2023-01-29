import express from "express"
import fs from "fs/promises"
import bcrypt from "bcrypt"
import randomStringGenerator from "../utils/index.js"

import { userRegistrationValidation,errorMiddleWare } from "../middleware/validations/index.js"

const registrationRouter = express.Router()

registrationRouter.post("/",userRegistrationValidation(),errorMiddleWare,async (req,res)=>{
    try {
        let {fullName, UserName, email, password ,role} = req.body;

        let fileData = await fs.readFile("users.json")
        fileData = JSON.parse(fileData)

        console.log(req.body.email)

        console.log("preethi@gmail.com" == req.body.email)

        let foundUser = fileData.find((ele)=> ele.email==req.body.email);

        if(foundUser){
            return res.status(409).json({"error":"User already exists"})
        }

        password = await bcrypt.hash(password,12);
        let user_id = randomStringGenerator(9)

        let finalNewUser = {user_id,fullName,UserName,email,password,role}

        fileData.push(finalNewUser)

        await fs.writeFile("users.json",JSON.stringify(fileData))
        res.status(200).json({"message":`${fullName} added successfully`})
    } catch (error) {
        console.log("Error")
        res.status(500).json({"error":"Internal server error"})
    }
})

export default registrationRouter
