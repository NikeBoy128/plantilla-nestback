import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categoriesRepostitory';
import { In } from 'typeorm';

@Injectable()
export class GetCategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getCategoriesByDescription(description: string[]) {
    return await this.categoriesRepository.find({
      where: { description: In(description) },
    });
  }

  async getCategories() {
    return await this.categoriesRepository.find();
  }
}
