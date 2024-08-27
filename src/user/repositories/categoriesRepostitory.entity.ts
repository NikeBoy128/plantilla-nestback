import { Injectable } from '@nestjs/common';
import { Categories } from 'src/shared/entities/categories.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CategoriesRepository extends Repository<Categories> {
  constructor(dataSource: DataSource) {
    super(Categories, dataSource.createEntityManager());
  }
}
