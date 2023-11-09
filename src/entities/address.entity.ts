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

  @Column()
  zipCode: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  title: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Customer, (customer) => customer.addresses)
  customer: Customer;
}
