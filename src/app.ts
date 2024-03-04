import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";
import { protectRoute } from "./app/middlewares/protectRoute";

import authRouters from "./app/routers/auth.routers";
import notesRouters from "./app/routers/notes.routes";

const app = express();

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message:
    "Sorry, you have exceeded the request limit. Please try again later after some times.",
});

// Middleware setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1", (req, res) => {
  res.send("My Note📒");
});

app.use("/api/v1/auth", limiter, authRouters);
app.use("/api/v1/notes", protectRoute, notesRouters);

// error hendler
app.use((req: Request, res: Response, next: NextFunction) => {
  next("Requested URL was not found!");
});

app.use((err: any, req: Request, res: Response) => {
  if (err.message) {
    res.status(500).json({ status: "fail", message: err.message });
  }
});

export default app;
