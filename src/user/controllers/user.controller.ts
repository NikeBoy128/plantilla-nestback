import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { InitDataUseCase } from '../useCase/initData.useCase';
import { Request } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/authGuard';
import { CreateOrUpdateUserFromAdminDto } from '../dtos/user.dto';
import { CrudUsersUseCase } from '../useCase/crudUsersUseCase.useCase';
import { CreateRecordResponseDto } from 'src/shared/dtos/response.dto';
import { CREATED_MESSAGE } from 'src/shared/const/const';

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
  async create(
    @Body() userDto: CreateOrUpdateUserFromAdminDto,
  ): Promise<CreateRecordResponseDto> {
    const rowId = await this.crudUsersUseCase.create(userDto);
    return {
      codeStatus: HttpStatus.OK,
      rowId,
      message: CREATED_MESSAGE,
    };
  }
}
