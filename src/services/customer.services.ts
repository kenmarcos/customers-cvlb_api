import { AppDataSource } from "../data-source";
import AppError from "../errors/appError";
import { customerRepository } from "../repositories/customer.repository";

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
    const newCustomer = await customerRepository.save(body);

    return newCustomer;
  } catch (error: any) {
    throw new AppError(error.detail, 400);
  }
};

export const listCustomersService = async () => {
  const users = await customerRepository.find();

  return users;
};

export const updateCustomerService = async (customerId: string, body: any) => {
  const customer = await customerRepository.findOneBy({ id: customerId });
  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  await customerRepository.save({
    id: customerId,
    ...body,
  });

  const updatedCustomer = await customerRepository.findOneBy({
    id: customerId,
  });

  return updatedCustomer;
};

export const deleteCustomerService = async (customerId: string) => {
  const customer = await customerRepository.findOneBy({ id: customerId });
  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  await customerRepository.remove(customer);
};
