import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Address from "../entities/address.entity";

export const addressRepository: Repository<Address> =
  AppDataSource.getRepository("Address");
