// server.js
import express from "express";
import bookRoutes from "./routes/books.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("📚 Welcome to the Book API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
