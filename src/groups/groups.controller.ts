import { Controller, Post, Body, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(@Body() createGroupDto: CreateGroupDto[]) {
    return await this.groupsService.create(createGroupDto);
  }

  @Get()
  async getGroups() {
    return await this.groupsService.getGroups();
  }
}
