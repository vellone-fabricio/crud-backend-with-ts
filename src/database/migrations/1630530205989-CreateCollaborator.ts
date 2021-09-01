import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCollaborator1630530205989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "collaborator",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "integer",
          },
          {
            name: "company_id",
            type: "integer",
          },
          {
            name: "position_id",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys("collaborator", [
      new TableForeignKey({
        name: "CollaboratorCompany",
        columnNames: ["company_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
      new TableForeignKey({
        name: "CollaboratorUser",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
      new TableForeignKey({
        name: "CollaboratorJobPositions",
        columnNames: ["position_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "job_positions",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("collaborator", "CollaboratorJobPositions");
    await queryRunner.dropForeignKey("collaborator", "CollaboratorUser");
    await queryRunner.dropForeignKey("collaborator", "CollaboratorCompany");
    await queryRunner.dropTable("collaborator");
  }
}
