import { Request, Response, NextFunction } from "express";
import {
  createAddressService,
  deleteAddressService,
} from "../services/address.services";
import { CreateAddressBody } from "../interfaces/address.interfaces";

export const createAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body: CreateAddressBody = req.body;

    const newAddress = await createAddressService(body);

    res.status(201).json(newAddress);
  } catch (error) {
    next(error);
  }
};

export const deleteAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { customerId } = req.params;

    await deleteAddressService(customerId);

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
