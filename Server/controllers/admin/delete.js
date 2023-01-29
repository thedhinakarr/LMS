import express from "express"

const adminDeleteBookRouter = express.Router()

adminDeleteBookRouter.delete("/:book_id",(req,res)=>{
    res.send(`ADMIN DELETE BOOK ROUTE HIT ${req.params.book_id}`)
})

export default adminDeleteBookRouter