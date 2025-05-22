# 📚 Book List API

A simple **Book List API** built using **Express (Node.js)**, **Mongoose**, and **MongoDB**, developed as part of *The Developer Academy* coursework.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/EKomin220/book-api.git
cd book-api
```

### 2. Initialize and Install Dependencies

```bash
npm init -y
npm install express mongoose dotenv nodemon
```

### 3. Set Up MongoDB

* Create a database on **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**.
* Save your connection string.

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGODB_URL="your MongoDB connection string"
```

---

## 🌐 Deployment

The API is live at:
🔗 [https://book-api-3j3g.onrender.com](https://book-api-3j3g.onrender.com)

---

## 📬 API Usage

Use the following endpoints in **Postman**, **Insomnia**, or other API tools:

### 📖 Get All Books

```http
GET /api/books
```

---

### 🔍 Get Book by ID

```http
GET /api/books/:id
```

---

### 🔎 Search by Title

```http
GET /api/books/title/:title
```

---

### 🔎 Search by Author Surname

```http
GET /api/books/authorSurname/:surname
```

---

### 🗑️ Delete Book by ID

```http
DELETE /api/books/:id
```

---

### ✏️ Update Book by ID

```http
PUT /api/books/:id
```

---

### ➕ Add a New Book

```http
POST /api/books
```

#### Required Fields:

* `title` (string)
* `authorSurname` (string)
* `authorFirstName` (string)

#### Optional Fields:

* `yearPublished` (number)
* `read` (boolean, default: false)
* `wikipediaLink` (string)
* `additionalNotes` (string)

#### 🧪 Example JSON Body:

```json
{
  "title": "War and Peace",
  "authorSurname": "Tolstoy",
  "authorFirstName": "Leo",
  "yearPublished": 1869,
  "read": true,
  "wikipediaLink": "https://en.wikipedia.org/wiki/War_and_Peace",
  "additionalNotes": "Classic Russian novel about war and society."
}
```

