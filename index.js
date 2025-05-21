require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const bookRoutes = require("./routes/bookRoutes")
const mongoose = require("mongoose")
const MONGODB_URL = process.env.MONGODB_URL

app.use(express.json())

mongoose
    .connect(MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error))

app.use("/api/books", bookRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})