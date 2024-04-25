import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto[]) {
    return await this.taskRepository.save(createTaskDto);
  }
  async delete(id: number) {
    log('IDDDDDD', id);
    return await this.taskRepository
      .createQueryBuilder()
      .delete()
      .from(Task)
      .where('groupId = :id', { id: id })
      .execute();
  }
}
