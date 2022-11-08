import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentService } from '../content.service';
import { ArticleController } from './article.controller';

@Module({
    providers: [
        {
            provide: 'CONTENT_TYPE',
            useValue: "article"
        },
        ContentService
    ],
    imports: [PrismaModule],
    controllers: [ArticleController]
})
export class ArticleModule {}
