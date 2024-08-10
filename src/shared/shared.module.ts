import { Module, DynamicModule } from '@nestjs/common';
import { SharedUserRepository } from './repositories/sharedUserRepository.repository';

@Module({})
export class SharedModule {
  static forRoot(): DynamicModule {
    return {
      module: SharedModule,
      providers: [SharedUserRepository],
      exports: [],
      imports: [],
    };
  }
}
