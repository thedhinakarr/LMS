import express from "express"
import fs from "fs/promises"

import authMiddleWare from "../../middleware/auth/index.js"

const adminDeleteBookRouter = express.Router()

adminDeleteBookRouter.delete("/:book_id", authMiddleWare, async (req, res) => {
    try {

        if (req.payload.role != "admin") {
            res.status(409).json({ "message": "you are unauthorized to this action" })
        }

        let library = await fs.readFile("library.json")
        library = JSON.parse(library)

        console.log(req.params.book_id)

        let foundBookIndex = library.findIndex(ele => ele.book_id == req.params.book_id)


        if (foundBookIndex == -1) {
            res.status(401).json({ "message": "book not found/ Invalid Book id" })
        }

        else {
            console.log(foundBookIndex)
            library.splice(foundBookIndex,1)
            await fs.writeFile("library.json", JSON.stringify(library))
            res.status(200).json({ "message": `Book --${req.params.book_id}-- successfully deleted` })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ "message": "Internal server error" })
    }
})

export default adminDeleteBookRouter