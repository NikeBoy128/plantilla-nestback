import { Injectable } from '@nestjs/common';
import { Preferences } from 'src/shared/entities/preferences.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserPreferenceRepository extends Repository<Preferences> {
  constructor(dataSource: DataSource) {
    super(Preferences, dataSource.createEntityManager());
  }
}
