import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Preferences } from './preferences.entity';
import { Posts } from './post.entity';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  name?: string;

  @Column('varchar', {
    length: 102,
    nullable: true,
  })
  lastName?: string;

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
    nullable: false,
  })
  password?: string;

  @Column('boolean', {
    default: true,
  })
  isActive: boolean;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  userName: string;
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

  @OneToMany(() => Preferences, (preference) => preference.userId)
  preferences?: Preferences[];

  @OneToMany(() => Posts, (post) => post.userCreatorId)
  posts?: Posts[];
}
