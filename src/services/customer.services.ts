import { AppDataSource } from "../data-source";

export const listCustomersService = async () => {
  const customerRepository = AppDataSource.getRepository("Customer");

  const users = await customerRepository.find();

  return users;
};
