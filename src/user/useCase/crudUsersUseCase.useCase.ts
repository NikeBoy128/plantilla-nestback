import { Injectable } from '@nestjs/common';
import { CrudUsersService } from '../services/crudUsers.service';
import { CreateOrUpdateUserFromAdminDto } from '../dtos/user.dto';
import { Users } from 'src/shared/entities/users.entity';
import { CrudPreferencesService } from '../services/crudPreferences.service';
import { GetCategoriesService } from '../services/getCategories.service';
import { Preferences } from 'src/shared/entities/preferences.entity';

@Injectable()
export class CrudUsersUseCase {
  constructor(
    private readonly crudUserService: CrudUsersService,
    private readonly crudPreferencesService: CrudPreferencesService,
    private readonly crudCategoriesService: GetCategoriesService,
  ) {}

  async create(userDto: CreateOrUpdateUserFromAdminDto): Promise<number> {
    const user: Users = {
      id: userDto.id,
      name: userDto.name,
      lastName: userDto.lastName,
      email: userDto.email,
      password: userDto.password,
      isActive: userDto.isActive,
    };

    const userId = await this.crudUserService.create(user);

    const categories =
      await this.crudCategoriesService.getCategoriesByDescription(
        userDto.prefrences,
      );

    const userPreferences: Preferences[] = [];

    categories.forEach((category) => {
      userPreferences.push({
        userId,
        categoryId: category.id,
      });
    });

    await this.crudPreferencesService.create(userPreferences);
    return userId;
  }
}
