import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentService } from '../content.service';
import { ArticleCategoryController } from './article-category.controller';

@Module({
  providers: [
    {
        provide: 'CONTENT_TYPE',
        useValue: "articleCategory"
    },
    ContentService
],
imports: [PrismaModule],
  controllers: [ArticleCategoryController]
})
export class ArticleCategoryModule {}
