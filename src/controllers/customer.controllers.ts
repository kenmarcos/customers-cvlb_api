import { NextFunction, Request, Response } from "express";
import {
  createCustomerService,
  deleteCustomerService,
  listCustomerByIdService,
  listCustomersService,
  updateCustomerService,
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
    const PAGE_DEFAULT = 1;
    const PER_PAGE_DEFAULT = 10;

    const page = Number(req.query.page) || PAGE_DEFAULT;
    const perPage = Number(req.query.perPage) || PER_PAGE_DEFAULT;

    const customerList = await listCustomersService(page, perPage);

    return res.json(customerList);
  } catch (error) {
    next(error);
  }
};

export const listCustomerByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerId } = req.params;

    const customer = await listCustomerByIdService(customerId);

    res.json(customer);
  } catch (error) {
    next(error);
  }
};

export const updateCustomerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerId } = req.params;
    const body = req.body;

    const updatedCustomer = await updateCustomerService(customerId, body);

    res.status(200).json(updatedCustomer);
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
