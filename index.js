// index.js
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env before anything else
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

connectDB(); // Connect to MongoDB

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("🎉 Welcome to the backend API!");
});

app.get("/api", (req, res) => {
  res.send("API is up and running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
