import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from 'src/shared/entities/users.entity';
import { SharedUserRepository } from 'src/shared/repositories/sharedUserRepository.repository';

@Injectable()
export class CrudUsersService {
  constructor(private readonly userRepository: SharedUserRepository) {}

  async create(user: Users): Promise<number> {
    const recordExists = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (recordExists) {
      throw new HttpException(
        'El correo electronico se encuentra en uso',
        HttpStatus.BAD_REQUEST,
      );
    }
    const userCreated = await this.userRepository.save(user);

    return userCreated.id;
  }

  async update(user: Users) {
    await this.userRepository.update(user.id, user);
  }
}
