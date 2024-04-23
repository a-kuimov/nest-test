import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';
import { Group } from './groups/entities/group.entity';
import { Task } from './tasks/entities/task.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '37.143.9.134',
      port: 3306,
      username: 'uts',
      password: 'uts123UTS!@#',
      database: 'uts',
      entities: [Group, Task],
      synchronize: false,
    }),
    ConfigModule.forRoot(),
    GroupsModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
