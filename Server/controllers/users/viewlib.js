import express from "express"
import fs from "fs/promises"
import authMiddleWare from "../../middleware/auth/index.js"

const viewLibRouter = express.Router()

viewLibRouter.get("/",async (req,res)=>{
    
    try {
        let booklist = await fs.readFile("library.json")
        booklist = JSON.parse(booklist)
        res.status(200).json(booklist)

    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
        
    }
})


export default viewLibRouter