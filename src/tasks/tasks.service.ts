import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto[]) {
    const id = createTaskDto[0].groupId;
    await this.taskRepository
      .createQueryBuilder()
      .delete()
      .from(Task)
      .where('id = :id', { id: id });
    return await this.taskRepository.save(createTaskDto);
  }
}
