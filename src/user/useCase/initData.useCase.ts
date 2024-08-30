import { Injectable } from '@nestjs/common';
import { InitDataService } from '../services/initData.service';

@Injectable()
export class InitDataUseCase {
  constructor(private readonly initDatService: InitDataService) {}

  async run(userId: number) {
    const userInitData = await this.initDatService.run(userId);
    const avatarFallBack =
      userInitData.name
        .split(' ')
        .map((name) => name[0])
        .join('') +
      userInitData.lastName
        .split(' ')
        .map((name) => name[0])
        .join('');
    return { ...userInitData, avatarFallBack };
  }
}
