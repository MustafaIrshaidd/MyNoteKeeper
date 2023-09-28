import mongoose from "mongoose";
import { formatDate } from "../services/Formatters.js";

const { Schema } = mongoose;

const notes = new Schema(
  {
    title: { type: String, default: "Untitled" },
    content: { type: String, default: "Content" },
    image: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

notes.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (doc, ret) { 
    ret.id = ret._id;
    ret.createdAt = formatDate(ret.createdAt);
    delete ret._id;
  }
});

export default mongoose.model("notes", notes);
