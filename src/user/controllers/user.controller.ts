import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InitDataUseCase } from '../useCase/initData.useCase';
import { Request } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/authGuard';
import { CreateOrUpdateUserFromAdminDto } from '../dtos/user.dto';
import { CrudUsersUseCase } from '../useCase/crudUsersUseCase.useCase';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly initDataUseCase: InitDataUseCase,
    private readonly crudUsersUseCase: CrudUsersUseCase,
  ) {}

  @Get('init-data')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async initData(@Request() req) {
    return await this.initDataUseCase.run(req.user.sub);
  }

  @Post('/')
  async create(@Body() userDto: CreateOrUpdateUserFromAdminDto) {
    return await this.crudUsersUseCase.create(userDto);
  }
}
