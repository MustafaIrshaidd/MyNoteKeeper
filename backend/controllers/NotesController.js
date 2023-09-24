import NoteModel from "../models/NotesModel.js";
import path from "path";
import NotesModel from "../models/NotesModel.js";

export default {
  getAllNotes: async (req, res) => {
    try {
      const notes = await NotesModel.find();
      res.json(notes);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  getNoteByID: async (req, res) => {
    try {
      const _id = req.params.id;
      const obj = await NoteModel.findOne({ _id });
      if (!obj) {
        return res.status(404).json({ message: "ToDo list not found" });
      }
      res.json(obj);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  addNote: async (req, res) => {
    const { title, content } = req.body;

    const image = req.file.path;
    const fileName = path.basename(image);

    const newNote = new NoteModel({ title, content, image: fileName });

    const response = await newNote.save();

    res.send(response);
  },

};
