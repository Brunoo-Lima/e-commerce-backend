import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './Product';
import { User } from './User';
import { Delivery } from './Delivery';

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

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToMany(() => Product, (product) => product.sales)
  @JoinColumn({ name: 'product_id' })
  products: Product[];

  @ManyToOne(() => User, (user) => user.sales)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Delivery, (delivery) => delivery.sale)
  deliveries: Delivery[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
