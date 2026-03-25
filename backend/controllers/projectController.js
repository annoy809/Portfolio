// controllers/projectController.js
import Project from "../models/Project.js";

// Add a new project
export const addProject = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debug
    const project = new Project(req.body);
    await project.save();

    res.json({
      success: true,
      message: "Project Stored Successfully!"
    });
  } catch (error) {
    console.error("Project Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // newest first
    res.json({ success: true, projects });
  } catch (error) {
    console.error("Get Projects Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
