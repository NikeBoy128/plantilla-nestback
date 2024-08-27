import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posts } from './post.entity';
import { Categories } from './categories.entity';

@Entity({ name: 'PostCategories' })
export class PostCategories {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'bigint' })
  postId: number;

  @Column({ type: 'bigint' })
  categoryId: number;

  @ManyToOne(() => Posts, (post) => post.id)
  @JoinColumn({ name: 'postId' })
  post: Posts;

  @ManyToOne(() => Categories, (category) => category.id)
  @JoinColumn({ name: 'categoryId' })
  category: Categories;
}
