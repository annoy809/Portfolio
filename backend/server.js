// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js"; // if you have projectRoutes

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully ✔");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✔"))
  .catch((err) => console.log("Mongo Error ❌", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
