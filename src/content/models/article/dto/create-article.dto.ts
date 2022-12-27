
import {ApiExtraModels} from '@nestjs/swagger'
import {ConnectArticleCategoryDto} from '../../articleCategory/dto/connect-articleCategory.dto'

export class CreateArticleCategoryRelationInputDto {
    connect: ConnectArticleCategoryDto;
  }

@ApiExtraModels(ConnectArticleCategoryDto,CreateArticleCategoryRelationInputDto)
export class CreateArticleDto {
  title: string;
slug: string;
content?: string;
published?: boolean;
category: CreateArticleCategoryRelationInputDto;
}
