import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { log } from 'console';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto[]) {
    return this.tasksService.create(createTaskDto);
  }

  @Post('/delete')
  async deleteTodo() {
    this.tasksService.delete();
  }
}
