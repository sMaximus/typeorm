import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Info } from './tables/Info';
import { User } from './tables/User';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(User)
    private entityRepository: Repository<User>,
    @InjectRepository(Info)
    private entityRepositoryInfo: Repository<Info>,
  ) {}

  async find(id?: number): Promise<User[]> {
    if (id) {
      return await this.entityRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.info', 'info')
        .where('user.id = :id', { id: id })
        .getMany();
    }

    return await this.entityRepository.find();
  }

  async create(entity: User): Promise<User> {
    return await this.entityRepository.save(entity);
  }

  async add(entity: Info): Promise<Info> {
    return await this.entityRepositoryInfo.save(entity);
  }

  async update(entity: User): Promise<UpdateResult> {
    return await this.entityRepository.update(entity.id, entity);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.entityRepository.delete(id);
  }
}
