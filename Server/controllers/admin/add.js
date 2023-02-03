import express from "express"
import authMiddleWare from "../../middleware/auth/index.js"
import fs from "fs/promises"
import { v4 as uuidv4 } from 'uuid'

const addBooksRouter = express.Router()

addBooksRouter.post("/", authMiddleWare , async (req,res)=>{
   try {

    if(req.payload.role != "admin"){
        res.status(409).json({"message":"you are unauthorized to this action"})
    }

    let booklist = await fs.readFile("library.json")

    booklist = JSON.parse(booklist)
    let foundBook = booklist.find(ele=> ((ele.isbn == req.body.isbn)))

    console.log(foundBook)

    if(foundBook){
        res.status(400).json({"message":"book already present"})
    }

    let {title , author, coverImageUrl, publisher, synopsis, pageCount, isbn} = req.body

    let id= uuidv4()
    let new_book = {title,author,coverImageUrl,publisher,synopsis,pageCount,isbn,id}
    booklist.push(new_book)

    await fs.writeFile("library.json",JSON.stringify(booklist))

    res.status(200).json({"message":"book successfully added","id":`${id}`})

   } catch (error) {
    console.log(error);
    res.status(501).json({"message":"internal server error"})
   }
})

export default addBooksRouter