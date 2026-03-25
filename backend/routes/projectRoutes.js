// routes/projectRoutes.js
import express from "express";
import { addProject, getProjects } from "../controllers/projectController.js";

const router = express.Router();

// POST: Add a project
router.post("/", addProject);

// GET: Fetch all projects
router.get("/", getProjects);

export default router; // <-- use default export
