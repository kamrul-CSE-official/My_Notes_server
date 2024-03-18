import express, { Request, Response } from "express";
import appointmentController from "../controllers/appointment.controllers";
import { protectRoute } from "../middlewares/protectRoute";

const router = express.Router();

// Async error handler middleware
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch((err: Error) => next(err));
  };
};

// Protect routes
router.use(protectRoute);

// Appointment routes
router.post("/", asyncHandler(appointmentController.takeAnAppointment));
router.get("/", asyncHandler(appointmentController.getAppointments));
router.get("/:id", asyncHandler(appointmentController.getAppointmentById));
router.put("/:id", asyncHandler(appointmentController.updateAppointment));
router.delete("/:id", asyncHandler(appointmentController.deleteAppointment));

export default router;
