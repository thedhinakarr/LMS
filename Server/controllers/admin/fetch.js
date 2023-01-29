import express from "express"

const adminFetchRouter = express.Router()

adminFetchRouter.get("/:book_id",(req,res)=>{
    res.send("ADMIN BOOK FETCH HIT "+ req.params.book_id)
})

export default adminFetchRouter