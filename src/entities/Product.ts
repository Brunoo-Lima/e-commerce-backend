import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToMany(() => Sale, (sale) => sale.products)
  @JoinColumn({ name: 'sale_id' })
  sales: Sale[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
