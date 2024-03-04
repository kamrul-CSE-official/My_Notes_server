import { Schema, model, Document, Model } from "mongoose";
import { INote } from "../../types/noteTypes";

// Interface for note document
export interface INoteDocument extends INote, Document {}

const noteSchema = new Schema<INoteDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = model<INoteDocument>("Note", noteSchema);

export default Note;
