const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/bookControllers");
//const {getAllBooks, getBookById, getBookByTitle, getBookByAuthorSurname, createBook, updateBookById, deleteBookById } = require("../controllers/bookControllers");


router.get("/", bookControllers.getAllBooks);
router.get("/:id", bookControllers.getBookById);
router.get("/title/:title", bookControllers.getBookByTitle);
router.get("/authorSurname/:authorSurname", bookControllers.getBookByAuthorSurname);

router.post("/", bookControllers.createBook);

router.put("/:id", bookControllers.updateBookById);

router.delete("/:id", bookControllers.deleteBookById);


module.exports = router;