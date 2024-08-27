import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Preferences } from './preferences.entity';
import { PostCategories } from './postCategories.entity';
@Entity({ name: 'Categories' })
export class Categories {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 100,
  })
  description: string;

  @OneToMany(() => Preferences, (preferences) => preferences.category)
  preferences: Preferences[];

  @OneToMany(() => PostCategories, (postCategories) => postCategories.category)
  postCategories: PostCategories[];
}
