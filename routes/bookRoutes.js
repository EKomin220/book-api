const express = require("express");
const router = express.Router();
const {getAllBooks, getBookById, getBookByTitle, getBookByAuthorSurname, createBook, updateBookById, deleteBookById } = require("../controllers/bookController");


router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.get("/:title", getBookByTitle);
router.get("/:authorSurname", getBookByAuthorSurname);

router.post("/", createBook);

router.put("/:id", updateBookById);

router.delete("/:id", deleteBookById);


module.exports = router;