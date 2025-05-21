const Book = require("../schemas/book")

exports.getAllBooks = async (request,response) =>{
    try{
      const books = await Book.find();
      response.send(books);
    } catch(error){
       response.status(500).send({error: "Failed to fetch books."})
    }
}
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
        const book = await Book.find(request.params.title)
        if (!book){
            return response.status(404).send({error: "Book not found"})
        }
        response.send(book)
    } catch (error) {
        response.status(500).send({error: "Failed to find book."})
    }
}

exports.getBookByAuthorSurname = async (request, response) => {
    try {
        const surname = String(request.params.authorSurname);
        const book = await Book.find({ "authorSurname" : { $regex : new RegExp(surname, "i") } })
        if (!book){
            return response.status(404).send({error: "Book not found"})
        }
        response.send(book)
    } catch (error) {
        response.status(500).send({error: "Failed to find book."})
    }
}
 

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