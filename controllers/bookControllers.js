const Book = require("../schemas/book")


exports.getAllBooks = async (request,response) =>{
    try{
      const books = await Book.find();
      response.send(books);
    } catch(error){
       response.status(500).send({error: "Failed to fetch books."})
    }
}

// ===== NOTES TO SELF  :
// The findById() method is specifically designed to query a document by its unique _id field in MongoDB.
// Since _id is unique, the route /:id is sufficient to identify a single resource (e.g., a specific book).
// in bookRoutes.js:  router.get("/:id", bookControllers.getBookById)
// The find() method is more flexible and can query multiple documents based on any field (e.g., title, authorSurname, etc.).
// Since title is not guaranteed to be unique, you need to explicitly specify it in the route (e.g., /title/:title) to differentiate it from other query types.
// to search by book title: .../api/books/title/war%20and%20peace
// to search by author surname: .../api/books/authorSurname/tolstoy

exports.getBookById = async (request, response) => {
    try {
        const book = await Book.findById(request.params.id)
        if (!book){
            return response.status(404).send({error: "Book not found"})
        }
        response.send(book)
    } catch (error) {
        response.status(500).send({error: "Failed to find book."})
    }
}

exports.getBookByTitle = async (request, response) => {
    try {
        const title = request.params.title;
        const books = await Book.find({ title: { $regex: new RegExp(`^${title}$`, "i") } }).exec();
        if (!books || books.length === 0) {
            return response.status(404).send({ error: "Book not found" });
        }
        response.send(books); // array - may be more than one
    } catch (error) {
        response.status(500).send({ error: "Failed to find book." });
    }
};


exports.getBookByAuthorSurname = async (request, response) => {
    try {
        const surname = request.params.authorSurname;
        const books = await Book.find({ authorSurname: { $regex: new RegExp(`^${surname}$`, "i") } }).exec();
        if (!books || books.length === 0) {
            return response.status(404).send({ error: "Book not found" });
        }
        response.send(books); // array - may be more than one
    } catch (error) {
        response.status(500).send({ error: "Failed to find book." });
    }
};
 
//=========================================


exports.createBook = async (request, response) => {
    try {
        const book = new Book(request.body)
        await book.save()
        response.send(book)
    } catch (error) {
        response.status(500).send({error: "Failed to create book."})
    }
}


exports.updateBookById = async (request, response) => {
    try{
      const book = await Book.findByIdAndUpdate(request.params.id, request.body, {
        new:true,
    });
    if (!book){
        return response.status(404).send({error: "Book not found"})
    }
    response.send(book);
    } catch(error){
        response.status(500).send({error: "Failed to update book."})
    }
}


exports.deleteBookById = async (request, response) => {
    try {
        const book = await Book.findByIdAndDelete(request.params.id)
        if (!book) {
            return response.status(404).send({error: "Book not found"})
        }
        response.status(200).send({success: "Book deleted"})
    } catch (error) {
        response.status(500).send({error: "Failed to delete book."})
    }
}