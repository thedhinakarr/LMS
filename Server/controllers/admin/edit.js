import express from "express"
import authMiddleWare from "../../middleware/auth/index.js"
import fs from "fs/promises"

const adminEditBookRouter = express.Router()

adminEditBookRouter.post("/:book_id", authMiddleWare, async (req, res) => {
    try {

        if(req.payload.role != "admin"){
            res.status(409).json({"message":"unauthorized action"})
        }
        let library = await fs.readFile("library.json")
        library = JSON.parse(library)

        /*
        {
        "title": "Product Market Fit",
        "author": "Meraj Faheem",
        "coverImageUrl": "https://code.in",
        "publisher": "EdVenture Park",
        "synopsis": "This is a Very Great Book",
        "isbn": "1234-HNI-87",
        "book_id": "671bc507-7e17-43d1-8e9d-3b7a177bf6f3"
       },
     */
       let bookIndex = library.findIndex(ele => ele.book_id == req.params.book_id)
       let book = library.find(ele => ele.book_id == req.params.book_id)
       console.log(book)

       let book_id = req.params.book_id

       if(!book){
        res.status(401).json({"messasge":"Book not found"})
       }
       console.log(req.body)

       let {title, author, coverImageUrl,publisher,synopsis, pageCount, isbn} = req.body
       let updated_book = { title,author,coverImageUrl,publisher,synopsis,pageCount,isbn ,book_id}

       library.splice(bookIndex,1,updated_book)

       console.log(library)

       await fs.writeFile("library.json",JSON.stringify(library))

       res.status(200).json({"message":`book -->${id}<-- successfully editted`})

    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "Internal server error" })
    }
})


export default adminEditBookRouter 