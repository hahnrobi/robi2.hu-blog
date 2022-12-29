
import {Prisma} from '@prisma/client'
import {ApiExtraModels} from '@nestjs/swagger'
import {ConnectArticleCategoryDto} from '../../articleCategory/dto/connect-articleCategory.dto'

export class CreateArticleCategoryRelationInputDto {
    connect: ConnectArticleCategoryDto;
  }

@ApiExtraModels(ConnectArticleCategoryDto,CreateArticleCategoryRelationInputDto)
export class CreateArticleDto {
  title: string;
slug: string;
body?: Prisma.InputJsonValue;
published?: boolean;
category: CreateArticleCategoryRelationInputDto;
}
