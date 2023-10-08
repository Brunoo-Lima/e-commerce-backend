import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Sale } from './Sale';

@Entity('deliveries')
export class Delivery {
  @PrimaryColumn()
  id!: string;
  @Column()
  date_delivery!: Date;
  @Column()
  observation: string;

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Sale, (sale) => sale.deliveries)
  @JoinColumn({ name: 'sale_id' })
  sale!: Sale;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
