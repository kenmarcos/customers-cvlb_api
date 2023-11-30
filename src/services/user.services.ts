import "dotenv/config";
import bcrypt from "bcrypt";
import AppError from "../errors/appError";
import { CreateUserBody, LoginUserBody } from "../interfaces/user.interfaces";
import { userRepository } from "../repositories/user.repository";
import jwt from "jsonwebtoken";

export const createUserService = async (body: CreateUserBody) => {
  const { name, email, cpf, cellphone, password } = body;

  const user = userRepository.create({
    name,
    email,
    cpf,
    cellphone,
    password,
  });

  await userRepository.save(user);

  const newUser = await userRepository.findOneBy({ id: user.id });

  return newUser;
};

export const loginUserService = async (body: LoginUserBody) => {
  const { email, password } = body;

  const user = await userRepository.findOne({
    where: { email },
    select: ["id", "password"],
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Incorrect password", 401);
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });

  return token;
};
