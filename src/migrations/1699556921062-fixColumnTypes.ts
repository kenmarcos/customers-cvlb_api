import { MigrationInterface, QueryRunner } from "typeorm";

export class FixColumnTypes1699556921062 implements MigrationInterface {
    name = 'FixColumnTypes1699556921062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "birthdate" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "birthdate" TIMESTAMP NOT NULL`);
    }

}
