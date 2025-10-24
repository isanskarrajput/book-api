// routes/books.js
import express from "express";
const router = express.Router();

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" }
];

// 📖 GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// ➕ POST a new book
router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// ✏️ PUT (update) a book by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return res.status(404).json({ error: "Book not found." });

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// ❌ DELETE a book by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Book not found." });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

export default router;
