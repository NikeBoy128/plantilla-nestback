import { Module } from '@nestjs/common';
import { CrudUsersService } from './services/crudUsers.service';
import { InitDataService } from './services/initData.service';
import { SharedUserRepository } from 'src/shared/repositories/sharedUserRepository.repository';
import { UserController } from './controllers/user.controller';
import { InitDataUseCase } from './useCase/initData.useCase';
import { SharedModule } from 'src/shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config';
import { CrudPreferencesService } from './services/crudPreferences.service';
import { CategoriesRepository } from './repositories/categoriesRepostitory';
import { UserPreferenceRepository } from './repositories/userPreference.repository';
import { CrudUsersUseCase } from './useCase/crudUsersUseCase.useCase';
import { GetCategoriesService } from './services/getCategories.service';
import { CategoriesController } from './controllers/categories.controller';
import { PasswordService } from 'src/auth/services/password.service';

@Module({
  imports: [
    SharedModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      // eslint-disable-next-line require-await
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    CrudUsersService,
    InitDataService,
    SharedUserRepository,
    CategoriesRepository,
    UserPreferenceRepository,
    InitDataUseCase,
    CrudUsersUseCase,
    CrudPreferencesService,
    GetCategoriesService,
    PasswordService,
  ],
  controllers: [UserController, CategoriesController],
})
export class UserModule {}
