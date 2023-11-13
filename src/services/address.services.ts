import AppError from "../errors/appError";
import { CreateAddressBody } from "../interfaces/address.interfaces";
import { addressRepository } from "../repositories/address.repository";
import { customerRepository } from "../repositories/customer.repository";

export const createAddressService = async (body: CreateAddressBody) => {
  const customer = await customerRepository.findOneBy({ id: body.customerId });

  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  const newAddress = addressRepository.create({ ...body, customer });

  await addressRepository.save(newAddress);

  return newAddress;
};

export const deleteAddressService = async (addressId: string) => {
  const address = await addressRepository.findOneBy({ id: addressId });
  if (!address) {
    throw new AppError("Address not found", 404);
  }

  await addressRepository.remove(address);
};
