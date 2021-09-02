import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompanyTable1630541323625 implements MigrationInterface {
  name = "CreateCompanyTable1630541323625";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "company" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "area" character varying NOT NULL, "creation_date" TIMESTAMP NOT NULL, "description" character varying NOT NULL, "director" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "company"`);
  }
}
