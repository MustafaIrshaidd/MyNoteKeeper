import NoteModel from "../models/NotesModel.js";
import path from "path";
import NotesModel from "../models/NotesModel.js";
import fs from "fs";

export default {
  getAllNotes: async (req, res) => {
    const pageNumber = req.query.page;
    const startIndex = (pageNumber - 1) * 10;
    try {
      let result;
      if (isNaN(pageNumber) || pageNumber < 1) {
        result = await NotesModel.find();
      } else {
        result = await NotesModel.find({}, null, {
          skip: startIndex,
          limit: 10,
        });
      }
      if (!result) {
        return res.status(404).json({ message: "no results" });
      }
      res.json(result);
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
  searchNotesByTitle: async (req, res) => {
    const pageNumber = req.query.page;
    const startIndex = (pageNumber - 1) * 10;
    const searchTerm = req.params.title;
    try {
      let result;
      if (isNaN(pageNumber) || pageNumber < 1) {
        result = await NoteModel.find({
          title: { $regex: searchTerm, $options: "i" },
        });
      } else {
        result = await NoteModel.find(
          {
            title: { $regex: searchTerm, $options: "i" },
          },
          null,
          {
            skip: startIndex,
            limit: 10,
          }
        );
      }
      if (!result) {
        return res.status(404).json({ message: "no results" });
      }
      res.json(result);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  addNote: async (req, res) => {
    const { title, content } = req.body;

    // const image = req.file.path;
    // const fileName = path.basename(image);
    const fileName = req.file.filename;

    const newNote = new NoteModel({ title, content, image: fileName });

    const response = await newNote.save();

    res.send(response);
  },
  deleteNoteByID: async (req, res) => {
    try {
      const _id = req.params.id;

      const obj = await NoteModel.findOne({ _id });

      if (obj && obj.image) {
        await fs.unlink(`images/notes/${obj.image}`, (err) => {
          if (err) {
            console.error("Error deleting image:", err);
          } else {
            console.log("Image deleted successfully");
          }
        });
      }

      if (!obj) {
        return res.status(404).json({ message: "not found" });
      }

      await NoteModel.deleteOne({ _id });

      res.send({ status: "success" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  updateNoteByID: async (req, res) => {
    try {
      const _id = req.params.id;
      const obj = await NoteModel.findOne({ _id });
      const newObj = req.body;

      if (!obj) {
        return res.status(404).json({ message: "not found" });
      }

      if (req.file) {
        const newImage = req.file.path;
        const fileName = path.basename(newImage);
        newObj.image = fileName;

        if (obj && obj.image) {
          await fs.unlink(`images/notes/${obj.image}`, (err) => {
            if (err) {
              console.error("Error deleting image:", err);
            } else {
              console.log("Image deleted successfully");
            }
          });
        }
      }

      await NoteModel.updateOne({ _id }, { $set: newObj });

      res.send({ status: "success" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};
