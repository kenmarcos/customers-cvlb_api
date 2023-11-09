import { AppDataSource } from "../data-source";

interface CustomerBody {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: Date;
  isClubMember: boolean;
}

export const createCustomerService = async (body: CustomerBody) => {
  const customerRepository = AppDataSource.getRepository("Customer");

  const newCustomer = customerRepository.create(body);

  await customerRepository.save(newCustomer);

  const createdCustomer = await customerRepository.findOneBy({
    id: newCustomer.id,
  });

  return createdCustomer;
};

export const listCustomersService = async () => {
  const customerRepository = AppDataSource.getRepository("Customer");

  const users = await customerRepository.find();

  return users;
};
