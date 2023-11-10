import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateIsCLubMemberColumn1699574858384 implements MigrationInterface {
    name = 'UpdateIsCLubMemberColumn1699574858384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "isClubMember" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "isClubMember" DROP DEFAULT`);
    }

}
