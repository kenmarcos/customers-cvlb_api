import { NextFunction, Request, Response } from "express";
import {
  createCustomerService,
  listCustomersService,
} from "../services/customer.services";

export const createCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const newUser = await createCustomerService(body);

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

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
