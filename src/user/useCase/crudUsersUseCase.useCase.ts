import { Injectable } from '@nestjs/common';
import { CrudUsersService } from '../services/crudUsers.service';
import { CreateOrUpdateUserFromAdminDto } from '../dtos/user.dto';
import { Users } from 'src/shared/entities/users.entity';
import { CrudPreferencesService } from '../services/crudPreferences.service';
import { GetCategoriesService } from '../services/getCategories.service';
import { Preferences } from 'src/shared/entities/preferences.entity';
import { PasswordService } from 'src/auth/services/password.service';

@Injectable()
export class CrudUsersUseCase {
  constructor(
    private readonly crudUserService: CrudUsersService,
    private readonly crudPreferencesService: CrudPreferencesService,
    private readonly crudCategoriesService: GetCategoriesService,
    private readonly passwordService: PasswordService,
  ) {}

  async create(userDto: CreateOrUpdateUserFromAdminDto): Promise<number> {
    const user: Users = {
      email: userDto.email,
      password: userDto.password,
      isActive: userDto.isActive,
      userName: userDto.userName,
      name: userDto.name,
      lastName: userDto.lastName,
    };

    user.password = await this.passwordService.hash(user.password);

    const userId = await this.crudUserService.create(user);

    const categories =
      await this.crudCategoriesService.getCategoriesByDescription(
        userDto.preferences,
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
