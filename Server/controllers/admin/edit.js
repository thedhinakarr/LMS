import express from "express"


const adminEditBookRouter = express.Router()

adminEditBookRouter.post("/:book_id",(req,res)=>{
    res.send(`Admin edit book route hit ${req.params.book_id}`)
})


export default adminEditBookRouter 