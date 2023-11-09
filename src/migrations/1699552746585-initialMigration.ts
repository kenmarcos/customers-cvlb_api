import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699552746585 implements MigrationInterface {
    name = 'InitialMigration1699552746585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cellphone" character varying NOT NULL, "birthdate" TIMESTAMP NOT NULL, "isClubMember" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "UQ_413de651cfd9c576b99cec83fd3" UNIQUE ("cpf"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "district" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying, "title" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "customerId" uuid, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_b5976584943ec93aa5394a55320" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_b5976584943ec93aa5394a55320"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
