import { MigrationInterface, QueryRunner } from "typeorm";

export class FKCollaboratorUser1630541743342 implements MigrationInterface {
  name = "FKCollaboratorUser1630541743342";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."collaborator" ADD "user_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "public"."collaborator" ADD CONSTRAINT "UQ_2b516ff163b9e85cb9adecc76c8" UNIQUE ("user_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."collaborator" ADD CONSTRAINT "FK_2b516ff163b9e85cb9adecc76c8" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."collaborator" DROP CONSTRAINT "FK_2b516ff163b9e85cb9adecc76c8"`);
    await queryRunner.query(`ALTER TABLE "public"."collaborator" DROP CONSTRAINT "UQ_2b516ff163b9e85cb9adecc76c8"`);
    await queryRunner.query(`ALTER TABLE "public"."collaborator" DROP COLUMN "user_id"`);
  }
}
