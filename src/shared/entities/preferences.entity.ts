import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';
import { Categories } from './categories.entity';

@Entity({ name: 'Preferences' })
export class Preferences {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;
  @Column({ type: 'bigint' })
  userId: number;
  @Column({ type: 'bigint' })
  categoryId: number;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user?: Users;

  @ManyToOne(() => Categories, (category) => category.id)
  @JoinColumn({ name: 'categoryId' })
  category?: Categories;
}
