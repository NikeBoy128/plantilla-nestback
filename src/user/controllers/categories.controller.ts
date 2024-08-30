import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetCategoriesService } from '../services/getCategories.service';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: GetCategoriesService) {}

  @Get('/')
  async getCategories() {
    return await this.categoriesService.getCategories();
  }
}
