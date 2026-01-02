import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();  // ← This is where it might fail
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Contact Save Error:", error); // ← Add this line to see actual error
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
