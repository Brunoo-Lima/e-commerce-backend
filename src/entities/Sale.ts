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
  JoinTable,
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

  @Column()
  user_id: string;

  @Column()
  product_id: string;

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Product, (product) => product.sales)
  @JoinColumn({ name: 'product_id' })
  products: Product[];

  @ManyToOne(() => User, (user) => user.sales)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Delivery, (delivery) => delivery.sales)
  deliveries: Delivery[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
