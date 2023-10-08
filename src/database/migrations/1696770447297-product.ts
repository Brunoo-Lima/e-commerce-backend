import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class product1696770447297 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'url',
            type: 'varchar',
          },
          //   {
          //     name: 'category_id',
          //     type: 'uuid',
          //   },
          //   {
          //     name: 'sale_id',
          //     type: 'uuid',
          //   },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        // foreignKeys: [
        //   {
        //     name: 'fk_product_category',
        //     columnNames: ['category_id'],
        //     referencedTableName: 'categories',
        //     referencedColumnNames: ['id'],
        //     onDelete: 'CASCADE',
        //     onUpdate: 'CASCADE',
        //   },
        //   {
        //     name: 'fk_product_sale',
        //     columnNames: ['sale_id'],
        //     referencedTableName: 'sales',
        //     referencedColumnNames: ['id'],
        //     onDelete: 'CASCADE',
        //     onUpdate: 'CASCADE',
        //   },
        // ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
