import { Injectable } from '@nestjs/common';
import { CreateCronDto } from './dto/create-cron.dto';
import { Cron } from './entities/cron.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CronService {
  constructor(
    @InjectRepository(Cron)
    private usersRepository: Repository<Cron>,
  ) {}
  async create(createCronDto: CreateCronDto[]) {
    return await this.usersRepository.save(createCronDto);
  }
  async getGroups(): Promise<Cron[]> {
    return await this.usersRepository.find();
  }
}
