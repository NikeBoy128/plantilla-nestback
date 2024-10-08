import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 100,
  })
  name: string;

  @Column('varchar', {
    length: 102,
  })
  lastName: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  avatarUrl?: string;

  @Column('varchar', {
    length: 255,
  })
  email: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  password?: string;

  @Column('boolean', {
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt?: Date;
}
