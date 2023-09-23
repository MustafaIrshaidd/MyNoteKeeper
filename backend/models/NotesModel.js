import mongoose from "mongoose";
import { formatDate } from "../services/Formatters";

const { Schema } = mongoose;

const notes = new Schema({
  title: { type: String, default: "Untitled" },
  content: { type: String, default: "Content" },
  image: { type: String },
  timestamps: {
    createdAt: {
      type: String,
      set: formatDate(),
    },
    updatedAt: false,
  },
});

export default mongoose.model("notes", notes);
