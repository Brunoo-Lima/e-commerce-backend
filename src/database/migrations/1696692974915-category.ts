import { MigrationInterface, QueryRunner } from 'typeorm';

export class category1696692974915 implements MigrationInterface {
  name = 'category1696692974915';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` CREATE TABLE "categories" (
        "id" character varying NOT NULL,
        "name" character varying NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_categories_id" PRIMARY KEY ("id")
    );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
