import { NextFunction, Request, Response } from "express";
import {
  createCustomerService,
  deleteCustomerService,
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

export const deleteCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerId } = req.params;

    await deleteCustomerService(customerId);

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
