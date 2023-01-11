import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentService } from '../content.service';
import { ArticleTagController } from './article-tag.controller';

@Module({
  providers: [
    {
        provide: 'CONTENT_TYPE',
        useValue: "articleTag"
    },
    ContentService
],
imports: [PrismaModule],
  controllers: [ArticleTagController]
})
export class ArticleTagModule {}
