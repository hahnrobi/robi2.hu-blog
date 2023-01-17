import { Controller } from '@nestjs/common';
import { ContentController } from '../content.controller';
import { ContentService } from '../content.service';
import { CreateArticleTagDto } from '../models/articleTag/dto/create-articleTag.dto';
import { UpdateArticleTagDto } from '../models/articleTag/dto/update-articleTag.dto';
import { ArticleTag } from '../models/articleTag/entities/articleTag.entity';

@Controller('content/article-tag')
export class ArticleTagController
    extends ContentController<
    CreateArticleTagDto,
    UpdateArticleTagDto,
    ArticleTag
    > {
    constructor(private readonly contentService: ContentService) {
        super(contentService);
    }
}
