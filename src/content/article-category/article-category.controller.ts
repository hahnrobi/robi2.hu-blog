import { Controller } from '@nestjs/common';
import { ContentController } from '../content.controller';
import { ContentService } from '../content.service';
import { CreateArticleCategoryDto } from '../models/articleCategory/dto/create-articleCategory.dto';
import { UpdateArticleCategoryDto } from '../models/articleCategory/dto/update-articleCategory.dto';
import { ArticleCategory } from '../models/articleCategory/entities/articleCategory.entity';

@Controller('content/article-category')
export class ArticleCategoryController
    extends ContentController<
    CreateArticleCategoryDto,
    UpdateArticleCategoryDto,
    ArticleCategory
    > {
    constructor(private readonly contentService: ContentService) {
        super(contentService);
    }
}
