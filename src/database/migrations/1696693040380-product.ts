import { MigrationInterface, QueryRunner } from 'typeorm';

export class product1696693040380 implements MigrationInterface {
  name = 'product1696693040380';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` CREATE TABLE "products" (
        "id" character varying NOT NULL,
        "name" character varying NOT NULL,
        "description" character varying,
        "price" numeric NOT NULL,
        "url" character varying,
        "category_id" character varying,
        CONSTRAINT "PK_08a7cf6c9eaa11f4a8f7bd452f6" PRIMARY KEY ("id")
    );
    
    
    ALTER TABLE "products"
            ADD CONSTRAINT "FK_category_id"
            FOREIGN KEY ("category_id")
            REFERENCES "categories"("id")
            ON DELETE SET NULL;
    `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE products`);
  }
}
