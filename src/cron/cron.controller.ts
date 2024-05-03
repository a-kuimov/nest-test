import { Controller, Get, Post, Body } from '@nestjs/common';
import { CronService } from './cron.service';
import { CreateCronDto } from './dto/create-cron.dto';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  @Post()
  async create(@Body() createCronDto: CreateCronDto[]) {
    return await this.cronService.create(createCronDto);
  }

  @Get()
  async getGroups() {
    return await this.cronService.getGroups();
  }
}
