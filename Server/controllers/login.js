import express from "express"

const loginRouter = express.Router()

loginRouter.post("/",(req,res)=>{
    res.send("LOGIN HIT.")
})

export default loginRouter