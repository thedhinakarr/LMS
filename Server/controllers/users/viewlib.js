import express from "express"

const viewLibRouter = express.Router()


viewLibRouter.get("/",(req,res)=>{
res.send("VIEW LIB ROUTE HIT.")
})


export default viewLibRouter