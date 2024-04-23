import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://cdn-ru.bitrix24.ru/',
      'https://cdn-ru.bitrix24.ru',
      'http://localhost:5000',
    ],
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Authorization',
    ],
    credentials: true,
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(5019);
}
bootstrap();
