import express from "express";
import { notesControllers } from "../controllers/notes.controllers";

const router = express.Router();

router.get("/", notesControllers.getAllNotes);
router.post("/", notesControllers.postController);
router.get("/:_id", notesControllers.noteDetails);
router.patch("/:_id", notesControllers.noteUpdates);
router.delete("/:_id", notesControllers.noteDelete);

export default router;
