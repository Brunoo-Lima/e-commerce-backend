import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './Product';
import { User } from './User';

@Entity('sales')
export class Sale {
  @PrimaryColumn()
  id!: string;
  @Column()
  total!: number;
  @Column()
  description: string;
  @Column()
  observation: string;

  @OneToMany(() => Product, (product) => product.sale)
  products: Product[];

  @ManyToOne(() => User, (user) => user.sales)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
