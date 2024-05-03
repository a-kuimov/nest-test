import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private usersRepository: Repository<Group>,
  ) {}
  async create(createGroupDto: CreateGroupDto[]) {
    return await this.usersRepository.save(createGroupDto);
  }
  async getGroups(): Promise<Group[]> {
    return await this.usersRepository.find();
  }
}
