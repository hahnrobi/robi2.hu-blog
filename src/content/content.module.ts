import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [PrismaModule, ArticleModule]
})
export class ContentModule {}
