import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: ['http://robi2.hu', 'https://robi2.hu', 'http://localhost:4200']
    },
  });

  const config = new DocumentBuilder()
  .setTitle('Byline API')
  .setDescription('The API documentation for the byline CMS')
  .setVersion('0.1')
  .addTag('byline')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static',
    immutable: true,
    maxAge: 36000000,
  });

  await app.listen(3000);
}
bootstrap();
