import express from "express";
import cors from "cors";
import subjectsRouter from "./routes/subjects";

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// JSON middleware
app.use(express.json());

app.use("/api/subjects", subjectsRouter);

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
