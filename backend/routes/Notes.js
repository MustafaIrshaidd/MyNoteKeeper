import express from "express";
import NotesController from "../controllers/NotesController.js";
import { upload } from "../services/MulterService.js";

const notesRoutes = express.Router();

// GET Routers
notesRoutes.get("/notes", NotesController.getAllNotes);
notesRoutes.get("/notes/:id", NotesController.getNoteByID);
notesRoutes.get("/notes/search/:title", NotesController.searchNotesByTitle);

// POST Routers
notesRoutes.post("/notes", upload.single("image"), NotesController.addNote);

// DELETE Routers
notesRoutes.delete("/notes/:id", NotesController.deleteNoteByID);

// UPDATE Routers
notesRoutes.put(
  "/notes/:id",
  upload.single("image"),
  NotesController.updateNoteByID
);

export default notesRoutes;
