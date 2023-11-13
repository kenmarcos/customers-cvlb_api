import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAddressTable1699881625793 implements MigrationInterface {
    name = 'UpdateAddressTable1699881625793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_b5976584943ec93aa5394a55320"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_b5976584943ec93aa5394a55320" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_b5976584943ec93aa5394a55320"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_b5976584943ec93aa5394a55320" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
