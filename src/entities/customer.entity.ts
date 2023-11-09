import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./address.entity";

@Entity("customers")
export default class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar", { unique: true })
  email: string;

  @Column("varchar", { unique: true })
  cpf: string;

  @Column("varchar")
  cellphone: string;

  @Column("date")
  birthdate: Date;

  @Column("boolean")
  isClubMember: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Address, (address) => address.customer)
  addresses: Address[];
}
