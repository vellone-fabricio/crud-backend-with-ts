import { MigrationInterface, QueryRunner } from "typeorm";

export class FKCollaboratorCompany1630541932075 implements MigrationInterface {
  name = "FKCollaboratorCompany1630541932075";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."collaborator" ADD "company_id " integer`);
    await queryRunner.query(
      `ALTER TABLE "public"."collaborator" ADD CONSTRAINT "FK_35a6b173d5f62fbae562da14e6d" FOREIGN KEY ("company_id ") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."collaborator" DROP CONSTRAINT "FK_35a6b173d5f62fbae562da14e6d"`);
    await queryRunner.query(`ALTER TABLE "public"."collaborator" DROP COLUMN "company_id "`);
  }
}
