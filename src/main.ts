import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: ['http://robi2.hu', 'https://robi2.hu', 'http://localhost:4200']
    },
  });

  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static',
    immutable: true,
    maxAge: 36000000,
  });

  await app.listen(3000);
}
bootstrap();
