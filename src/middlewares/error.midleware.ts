import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";
import { QueryFailedError } from "typeorm";

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message });
  }

  if (err instanceof QueryFailedError) {
    return res.status(400).json({
      message: err.driverError.detail,
    });
  }

  return res.status(500).json({
    message: "Internal Server Error",
  });
};
