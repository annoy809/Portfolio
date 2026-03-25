// models/Project.js
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  githubUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", ProjectSchema);
