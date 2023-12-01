import { loginUserService } from "./../services/user.services";
import { NextFunction, Request, Response } from "express";
import { CreateUserBody } from "../interfaces/user.interfaces";
import { createUserService } from "../services/user.services";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body: CreateUserBody = req.body;

    const newUser = await createUserService(body);

    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const token = await loginUserService(body);

    return res.json({ token });
  } catch (error) {
    next(error);
  }
};
