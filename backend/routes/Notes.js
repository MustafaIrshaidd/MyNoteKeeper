import express from "express";
import NotesController from "../controllers/NotesController.js";
import { upload } from "../services/MulterService.js";

const notesRoutes = express.Router();

// GET Routers
notesRoutes.get("/notes", NotesController.getAllNotes);
notesRoutes.get("/notes/:id", NotesController.getNoteByID);

// POST Routers
notesRoutes.post("/notes", upload.single("image"), NotesController.addNote);

// DELETE Routers

// UPDATE Routers

export default notesRoutes;
