import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export const validate =
  (schema: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      req.body = await schema.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      });

      return next();
    } catch (error: any) {
      return res.status(422).json({ error: error.errors });
    }
  };
