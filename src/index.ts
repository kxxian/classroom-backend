import express from "express";

const app = express();
const PORT = 8000;

// JSON middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running 🚀",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
