import express from "express"
import deleteUserRouter from "./deleteuser.js"
import UserFetchBookRouter from "./fetchbook.js"
import viewLibRouter from "./viewlib.js"

const mainUserRouter = express.Router()

mainUserRouter.use("/deleteUser",deleteUserRouter)
mainUserRouter.use("/fetchbook",UserFetchBookRouter)
mainUserRouter.use("/viewlib",viewLibRouter)

export default mainUserRouter