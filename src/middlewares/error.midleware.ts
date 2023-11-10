import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({
    message: "Internal Server Error",
  });
};
