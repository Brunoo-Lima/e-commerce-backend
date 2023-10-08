import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Sale } from './Sale';

@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id!: string;
  @Column()
  name: string;
  @Column()
  email!: string;
  @Column()
  admin!: boolean;
  @Column()
  password!: string;

  @OneToMany(() => Sale, (sale) => sale.user)
  sales: Sale[];

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
