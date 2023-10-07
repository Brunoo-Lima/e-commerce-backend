import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './Product';

@Entity('categories')
export class Category {
  @PrimaryColumn()
  id!: string;
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
