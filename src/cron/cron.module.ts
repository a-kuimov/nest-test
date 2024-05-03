import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { CronController } from './cron.controller';
import { Cron } from './entities/cron.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cron])],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
