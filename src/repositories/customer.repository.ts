import { Repository } from "typeorm";
import Customer from "../entities/customer.entity";
import { AppDataSource } from "../data-source";

export const customerRepository: Repository<Customer> =
  AppDataSource.getRepository("Customer");
