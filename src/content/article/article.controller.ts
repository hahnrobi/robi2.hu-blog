import { Controller } from '@nestjs/common';
import { ContentController } from '../content.controller';
import { ContentService } from '../content.service';
import { CreateArticleDto } from '../models/article/dto/create-article.dto';
import { UpdateArticleDto } from '../models/article/dto/update-article.dto';
import { Article } from '../models/article/entities/article.entity';

@Controller('content/article')
export class ArticleController
    extends ContentController<
    CreateArticleDto,
    UpdateArticleDto,
    Article
    > {
    constructor(private readonly contentService: ContentService) {
        super(contentService);
    }
}
