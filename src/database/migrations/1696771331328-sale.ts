import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class sale1696771331328 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales',
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
            name: 'total',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
          },
          //   {
          //     name: 'product_id',
          //     type: 'uuid',
          //   },
          //   {
          //     name: 'user_id',
          //     type: 'uuid',
          //   },
          {
            name: 'observation',
            type: 'varchar',
          },
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
        //     name: 'fk_sale_product',
        //     columnNames: ['product_id'],
        //     referencedTableName: 'products',
        //     referencedColumnNames: ['id'],
        //     onDelete: 'CASCADE',
        //     onUpdate: 'CASCADE',
        //   },
        //   {
        //     name: 'fk_sale_user',
        //     columnNames: ['user_id'],
        //     referencedTableName: 'users',
        //     referencedColumnNames: ['id'],
        //     onDelete: 'CASCADE',
        //     onUpdate: 'CASCADE',
        //   },
        // ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'sales_products',
        columns: [
          {
            name: 'product_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'sale_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'fk_sale_product',
      new TableForeignKey({
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'fk_sale_sales',
      new TableForeignKey({
        columnNames: ['sale_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sales',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sales_products');
    await queryRunner.dropTable('sales');
  }
}
