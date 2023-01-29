import express from "express"

const UserFetchBookRouter = express.Router()

UserFetchBookRouter.get("/:book_id",(req,res)=>{
    // console.log(req.params.book_id)
    res.send("fetchbook route hit. "+ req.params.book_id)
})

export default UserFetchBookRouter