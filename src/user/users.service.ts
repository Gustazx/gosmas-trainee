import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const { email, username, teams } = createUserDto;
    let { createdAt } = createUserDto;
    createdAt = new Date();

    return this.usersRepository.save({ email, username, createdAt, teams });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['teams'] });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
