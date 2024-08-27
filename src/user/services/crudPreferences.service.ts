import { Injectable } from '@nestjs/common';
import { UserPreferenceRepository } from '../repositories/userPreference.repository';
import { Preferences } from 'src/shared/entities/preferences.entity';

@Injectable()
export class CrudPreferencesService {
  constructor(
    private readonly userPreferenceRepository: UserPreferenceRepository,
  ) {}

  async create(userPreference: Preferences[]) {
    const userPreferenceCreated =
      await this.userPreferenceRepository.save(userPreference);

    return userPreferenceCreated;
  }
}
