import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '37.143.9.134',
      port: 3306,
      username: 'uts',
      password: 'uts123UTS!@#',
      database: 'uts',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
