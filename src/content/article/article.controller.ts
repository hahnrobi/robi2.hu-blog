import { Controller } from '@nestjs/common';
import { ContentController } from '../content.controller';
import { ContentService } from '../content.service';

@Controller('content/article')
export class ArticleController extends ContentController {
    constructor(private readonly contentService: ContentService) {
        super(contentService);
    }
}
