import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');
    queryBuilder.where('user.id = :id', { id });

    return await queryBuilder.getOne();
  }

  async update(id: number, user: UserEntity): Promise<any> {
    return await this.userRepository.update(id, user);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
