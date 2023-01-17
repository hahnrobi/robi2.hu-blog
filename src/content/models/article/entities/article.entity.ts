
import {Prisma} from '@prisma/client'
import {ArticleCategory} from '../../articleCategory/entities/articleCategory.entity'
import {ArticleTag} from '../../articleTag/entities/articleTag.entity'


export class Article {
  id: string ;
title: string ;
slug: string ;
body: Prisma.JsonValue  | null;
published: boolean  | null;
category?: ArticleCategory ;
categoryId: string ;
tags?: ArticleTag[] ;
}
