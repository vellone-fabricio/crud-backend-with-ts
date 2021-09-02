import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCollaboratorTable1630541541412 implements MigrationInterface {
  name = "CreateCollaboratorTable1630541541412";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "collaborator_job_position_enum" AS ENUM('Diretor', 'Gestor', 'Empregado')`);
    await queryRunner.query(
      `CREATE TABLE "collaborator" ("id" SERIAL NOT NULL, "job_position" "collaborator_job_position_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_aa48142926d7bdb485d21ad2696" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "collaborator"`);
    await queryRunner.query(`DROP TYPE "collaborator_job_position_enum"`);
  }
}
