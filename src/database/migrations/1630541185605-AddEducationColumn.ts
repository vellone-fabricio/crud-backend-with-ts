import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEducationColumn1630541185605 implements MigrationInterface {
  name = "AddEducationColumn1630541185605";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."user_education_enum" AS ENUM('infantil', 'fundamental', 'medio', 'superior', 'pos-grad', 'mestrado', 'doutorado')`,
    );
    await queryRunner.query(`ALTER TABLE "public"."user" ADD "education" "public"."user_education_enum" NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "education"`);
    await queryRunner.query(`DROP TYPE "public"."user_education_enum"`);
  }
}
