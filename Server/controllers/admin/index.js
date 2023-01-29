import express  from "express"
import addBooksRouter from "./add.js"
import adminDeleteBookRouter from "./delete.js"
import adminEditBookRouter from "./edit.js"
import adminFetchRouter from "./fetch.js"


const mainAdminRouter = express.Router()

mainAdminRouter.use("/books/add",addBooksRouter)
mainAdminRouter.use("/books/fetch",adminFetchRouter)
mainAdminRouter.use("/books/edit",adminEditBookRouter)
mainAdminRouter.use("/books/delete",adminDeleteBookRouter)



export default mainAdminRouter