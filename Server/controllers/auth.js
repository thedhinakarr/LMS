import express from "express"
import jwt from "jsonwebtoken"

import authMiddleWare from "../middleware/auth/index.js"

const authRouter = express.Router()

authRouter.post("/",authMiddleWare,async (req,res)=>{
    try {
        res.status(200).json({"payload":req.payload})
       
    } catch (error) {
        console.log(error)
    }
})

export default authRouter