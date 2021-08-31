import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1630447712132 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
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
            isUnique: true,
          },
          {
            name: "area",
            type: "varchar",
          },
          {
            name: "creation_date",
            type: "date",
          },
          {
            name: "description",
            type: "varchar",
            length: "256",
          },
          {
            name: "director",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }
}
