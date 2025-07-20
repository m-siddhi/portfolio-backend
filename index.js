import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

// Root route for '/'
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the backend API!");
});

// Optional test route for '/api'
app.get("/api", (req, res) => {
  res.send("API is up and running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
