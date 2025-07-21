// controllers/contactControllers.js
import Contact from "../models/Contact.js";

export const submitContactForm = async (req, res) => {
  const { name, email, website, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const newContact = new Contact({ name, email, website, message });
    await newContact.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Error saving contact form:", error);
    res.status(500).json({ message: "Server error" });
  }
};
