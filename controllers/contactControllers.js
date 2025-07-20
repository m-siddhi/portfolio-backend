import db from "../config/db.js";

export const submitContactForm = (req, res) => {
  const { name, email, website, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const sql =
    "INSERT INTO contacts (name, email, website, message) VALUES (?, ?, ?, ?)";
  const values = [name, email, website, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Error inserting contact form:", err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(200).json({ message: "Form submitted successfully" });
  });
};
