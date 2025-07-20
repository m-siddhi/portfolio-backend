// routes/contactRoutes.js
import express from "express";
import { submitContactForm } from "../controllers/contactControllers.js";

const router = express.Router();

router.post("/", submitContactForm);

export default router;
