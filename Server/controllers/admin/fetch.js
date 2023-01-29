import express from "express"
import fs from "fs/promises"
import authMiddleWare from "../../middleware/auth/index.js"

const adminFetchRouter = express.Router()

adminFetchRouter.get("/:book_id",authMiddleWare,async (req,res)=>{
   try {
        if(req.payload.role != "admin"){
            res.status(409).json({"message":"you are an imposter"})
        }

        let library = await fs.readFile("library.json")
        library = JSON.parse(library)

        let foundBook = library.find(ele=> ele.book_id == req.params.book_id)

        if(!foundBook){
            res.status(401).json({"message":"Book not found"})
        }
        else res.status(200).json({"message":"book found",foundBook})
        
   } catch (error) {
    console.log(error)
    res.status(500).json({"message":"internal server error"})
   }
})

export default adminFetchRouter