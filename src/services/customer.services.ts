import { AppDataSource } from "../data-source";
import AppError from "../errors/appError";

interface CreateCustomerBody {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: Date;
  isClubMember: boolean;
}

export const createCustomerService = async (body: CreateCustomerBody) => {
  try {
    const customerRepository = AppDataSource.getRepository("Customer");

    const newCustomer = customerRepository.create(body);

    await customerRepository.save(newCustomer);

    const createdCustomer = await customerRepository.findOneBy({
      id: newCustomer.id,
    });

    return createdCustomer;
  } catch (error: any) {
    throw new AppError(error.detail, 400);
  }
};

export const listCustomersService = async () => {
  const customerRepository = AppDataSource.getRepository("Customer");

  const users = await customerRepository.find();

  return users;
};
