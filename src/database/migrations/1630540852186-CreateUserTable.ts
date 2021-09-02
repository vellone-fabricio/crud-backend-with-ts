import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1630540852186 implements MigrationInterface {
  name = "CreateUserTable1630540852186";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
