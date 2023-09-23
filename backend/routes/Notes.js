import express from "express";
import NotesController from "../controllers/NotesController.js"

const notesRoutes = express.Router();

// GET Routers
notesRoutes.get("/notes", NotesController.get)


// POST Routers


// DELETE Routers


// UPDATE Routers


export default notesRoutes;
