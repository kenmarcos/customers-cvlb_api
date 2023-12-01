import "dotenv/config";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    throw new AppError("Missing authorization header", 401);
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded: any) => {
    if (error) {
      throw new AppError("Invalid token", 401);
    }

    const userId = decoded.userId;

    req.userId = userId;

    next();
  });
};
