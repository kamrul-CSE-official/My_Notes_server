import Note from "../models/note.model";
import { INote } from "../../types/noteTypes";

const postNotes = async (data: INote) => {
  const query = await Note.create(data);
  return query;
};

const getAllNotes = async (id: string) => {
  const query = await Note.find({ userId: id });
  return query;
};

const getNoteDetails = async (id: string) => {
  const query = await Note.findById(id);
  return query;
};

const deleteNote = async (id: string) => {
  const query = await Note.deleteOne({ _id: id });
  return query;
};

export const notesServices = {
  postNotes,
  getAllNotes,
  getNoteDetails,
  deleteNote,
};
