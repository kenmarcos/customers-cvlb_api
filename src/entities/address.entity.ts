import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Customer from "./customer.entity";

@Entity("addresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  zipCode: string;

  @Column("varchar")
  state: string;

  @Column("varchar")
  city: string;

  @Column("varchar")
  district: string;

  @Column("varchar")
  street: string;

  @Column("int")
  number: number;

  @Column("varchar", { nullable: true })
  complement: string;

  @Column("varchar", { nullable: true })
  title: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Customer, (customer) => customer.addresses, {
    onDelete: "CASCADE",
  })
  customer: Customer;
}
