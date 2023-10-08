import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './Category';
import { Sale } from './Sale';

@Entity('products')
export class Product {
  @PrimaryColumn()
  id!: string;
  @Column()
  name!: string;
  @Column()
  description: string;
  @Column()
  price!: number;
  @Column()
  url: string;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Sale, (sale) => sale.products)
  sale: Sale;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
