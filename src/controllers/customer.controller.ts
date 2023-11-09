import { NextFunction, Request, Response } from "express";
import { listCustomersService } from "../services/customer.services";

export const listCustomersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await listCustomersService();

    return res.json(users);
  } catch (error) {
    next(error);
  }
};
