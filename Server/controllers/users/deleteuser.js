import express from "express"
import jwt from "jsonwebtoken"
import fs from "fs/promises"


import authMiddleWare from "../../middleware/auth/index.js"

const deleteUserRouter = express.Router()

deleteUserRouter.delete("/",authMiddleWare,async (req,res)=>{

   try {
    let fileData = await fs.readFile("users.json")
    fileData = JSON.parse(fileData)
    let foundUser = fileData.find(ele => ele.elmail == req.payload.email)
    let foundUsersIndex = fileData.findIndex((ele)=> ele.email == req.payload.email)

    fileData.splice(foundUsersIndex,1)

    await fs.writeFile("users.json",JSON.stringify(fileData))
    
   res.status(200).json({"message":`We will miss you `})

   } catch (error) {
    console.log(error)
    res.status(500).json({"message":"Internal server error"})
   }
})

export default deleteUserRouter