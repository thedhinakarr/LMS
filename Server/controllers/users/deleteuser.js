import express from "express"


const deleteUserRouter = express.Router()

deleteUserRouter.delete("/",(req,res)=>{
    res.send("DELETE USER HIT")
})

export default deleteUserRouter