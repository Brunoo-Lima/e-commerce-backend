import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
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

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Sale, (sale) => sale.products)
  sales: Sale[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
