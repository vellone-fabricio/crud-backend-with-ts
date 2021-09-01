import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobPositions1630528843579 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "job_positions",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
        ],
      }),
    );

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("job_positions")
      .values([{ name: "Diretor" }, { name: "Gestor" }, { name: "Empregado" }])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("job_positions");
  }
}
