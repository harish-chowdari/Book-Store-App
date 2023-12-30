const express = require("express")
const router = express.Router()

const booksController = require("../controllers/CRUD")

router.get("/", booksController.getAllBookS)
router.post("/addbook", booksController.addBook)
router.get("/:id",booksController.getById)
router.delete("/:id", booksController.deleteBook)
router.put("/:id", booksController.updateBook)

module.exports = router