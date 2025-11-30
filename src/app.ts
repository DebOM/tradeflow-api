// src/app.ts
import express, { Router, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import {logger} from "./middlewares/logger";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import { userRouter } from "./modules/users/user.route";

export const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(logger);

// Simple routes
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Helper function to capitalize the first letter of a string
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

app.get('/hello', (req: Request, res: Response) => {
  const userName = typeof req.query.name === 'string' ? req.query.name : 'Guest';
  res.json({ message: `Welcome ${capitalize(userName)}!!!` });
});

// Users routes
app.use("/users", userRouter);

// ⬇️ Catch-all 404 (no path string)
app.use(notFound);

// ⬇️ Centralized error handler (must be last)
app.use(errorHandler);