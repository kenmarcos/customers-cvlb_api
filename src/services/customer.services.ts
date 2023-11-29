import { ILike } from "typeorm";
import AppError from "../errors/appError";
import {
  CreateCustomerBody,
  UpdateCustomerBody,
} from "../interfaces/customer.interfaces";
import { addressRepository } from "../repositories/address.repository";
import { customerRepository } from "../repositories/customer.repository";

export const createCustomerService = async (body: CreateCustomerBody) => {
  try {
    const {
      name,
      email,
      birthdate,
      cellphone,
      cpf,
      isClubMember,
      ...addressData
    } = body;

    const newCustomer = customerRepository.create({
      name,
      email,
      birthdate,
      cellphone,
      cpf,
      isClubMember,
    });
    await customerRepository.save(newCustomer);

    const newAddress = addressRepository.create({
      ...addressData,
      customer: newCustomer,
    });
    await addressRepository.save(newAddress);

    const customer = await customerRepository.findOne({
      where: {
        id: newCustomer.id,
      },
      relations: {
        addresses: true,
      },
    });

    return customer;
  } catch (error: any) {
    throw new AppError(error.detail, 400);
  }
};

export const listCustomersService = async ({
  page,
  perPage,
  search,
}: {
  page: number;
  perPage: number;
  search?: string;
}) => {
  const [customers, totalCount] = await customerRepository.findAndCount({
    skip: (page - 1) * perPage,
    take: perPage,
    order: {
      createdAt: "DESC",
    },
    where: search
      ? [{ name: ILike(`%${search}%`) }, { cpf: ILike(`%${search}%`) }]
      : undefined,
  });

  return {
    customers,
    totalCount,
  };
};

export const listCustomerByIdService = async (customerId: string) => {
  const customer = await customerRepository.findOne({
    where: {
      id: customerId,
    },
    relations: {
      addresses: true,
    },
  });

  return customer;
};

export const updateCustomerService = async (
  customerId: string,
  body: UpdateCustomerBody
) => {
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
