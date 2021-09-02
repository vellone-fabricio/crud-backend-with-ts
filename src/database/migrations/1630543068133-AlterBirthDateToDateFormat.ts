import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterBirthDateToDateFormat1630543068133 implements MigrationInterface {
    name = 'AlterBirthDateToDateFormat1630543068133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "birth_date" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "birth_date" TIMESTAMP NOT NULL`);
    }

}
