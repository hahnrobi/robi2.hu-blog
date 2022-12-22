
import {ArticleCategory} from '../../articleCategory/entities/articleCategory.entity'


export class Article {
  id: string ;
title: string ;
content: string  | null;
published: boolean  | null;
category?: ArticleCategory ;
categoryId: string ;
}
