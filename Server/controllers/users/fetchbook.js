import express from "express"
import authMiddleWare from "../../middleware/auth/index.js"
import fs from "fs/promises"

const UserFetchBookRouter = express.Router()

UserFetchBookRouter.get("/:book_id",authMiddleWare,async (req,res)=>{
    try {  
        let booklist = await fs.readFile("library.json")
        booklist = JSON.parse(booklist)
        
        let foundBook = booklist.find(ele => ele.book_id == req.params.book_id)

        if(!foundBook){
            res.status(401).json({"message":"book not found"})
        }

        res.status(200).json(foundBook)
    } catch (error) {
        console.log(error)
        res.status(501).json({"message":"internal server error"})
    }
})


export default UserFetchBookRouter