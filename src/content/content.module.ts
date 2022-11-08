import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { ArticleCategoryModule } from './article-category/article-category.module';

@Module({
  imports: [PrismaModule, ArticleModule, ArticleCategoryModule],
  exports: [ArticleModule, ArticleCategoryModule]
})
export class ContentModule {}
