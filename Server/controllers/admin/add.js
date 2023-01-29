import express from "express"

const addBooksRouter = express.Router()

addBooksRouter.post("/",(req,res)=>{
    res.send("ADMIN ADD BOOKS HIT.")
})

export default addBooksRouter