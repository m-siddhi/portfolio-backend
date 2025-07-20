import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST, // e.g., 'sql123.infinityfree.com'
  user: process.env.DB_USER, // e.g., 'epiz_12345678'
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // e.g., 'epiz_12345678_portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

export default db;
