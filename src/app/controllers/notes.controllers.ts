import { Request, Response } from "express"; // Import Request and Response types from express
import { INote } from "../../types/noteTypes";
import { notesServices } from "../services/notes.services";

const postController = async (req: Request, res: Response) => {
  try {
    const inputNote: INote = req.body;

    const newNote = await notesServices.postNotes(inputNote);
    if (!newNote) {
      return res
        .status(400)
        .json({ status: "error", message: "Something went wrong!" });
    }
    return res
      .status(201)
      .json({ status: "success", message: "Successfully noted." });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error in post Not Controller:", error);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};

const getAllNotes = async (req: Request, res: Response) => {
  try {
    const _id =
      (req as any)?.accessTokenData?._id || (req as any)?.refreshTokenData?._id;

    const userAllToNotes = await notesServices.getAllNotes(_id);
    if (!userAllToNotes) {
      return res
        .status(400)
        .json({ status: "error", message: "Something went wrong!" });
    }

    return res.status(201).json({
      status: "success",
      message: "Successfully get all posts.",
      data: userAllToNotes,
    });
  } catch (error) {
    console.error("Error in getNoteController:", error);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};

const noteDetails = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const noteDetails = await notesServices.getNoteDetails(_id);
    if (!noteDelete) {
      return res.status(400).json({ status: "error", message: "Empty!" });
    }
    return res.status(201).json({
      status: "success",
      message: "Successfully get note details.",
      data: noteDetails,
    });
  } catch (error) {
    console.error("Error in Not Details Controller:", error);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};

const noteUpdates = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const updatedNoted = { message: "updating.... server......", _id: _id };
    if (!noteDelete) {
      return res.status(400).json({ status: "error", message: "Empty!" });
    }
    return res.status(201).json({
      status: "success",
      message: "Successfully get updated.",
      data: updatedNoted,
    });
  } catch (error) {
    console.error("Error in Not Details Controller:", error);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};

const noteDelete = async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const deletedNote = await notesServices.deleteNote(_id);
    if (!noteDelete) {
      return res
        .status(400)
        .json({ status: "error", message: "Something went wrong!" });
    }
    return res.status(201).json({
      status: "success",
      message: "Successfully deleted.",
      data: deletedNote,
    });
  } catch (error) {
    console.error("Error in Not Details Controller:", error);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};
export const notesControllers = {
  postController,
  getAllNotes,
  noteDetails,
  noteUpdates,
  noteDelete,
};
