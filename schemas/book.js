const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authorSurname: {
        type: String,
        required: true
    },
    authorFirstName: {
        type: String,
        required: true
    },
    yearPublished:{
        type: Number,
        required: false
    },
    read: {
        type: Boolean,
        default: false
    },
    wikipediaLink: {
        type: String,
        required: false
    },
    additionalNotes: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Book", bookSchema)