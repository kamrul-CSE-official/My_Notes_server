import express from "express";
import { authControllers } from "../controllers/auth.controllers";

const router = express.Router();

router.post("/regester", authControllers.registerGeneralController);
router.post("/regester/lawyer", authControllers.registerLawyerController);
router.post("/login", authControllers.loginController);
router.get("/logout", authControllers.logoutController);

export default router;
