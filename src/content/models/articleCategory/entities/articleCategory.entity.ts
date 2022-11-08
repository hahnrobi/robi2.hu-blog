
import {Article} from '../../article/entities/article.entity'


export class ArticleCategory {
  id: string ;
title: string ;
slug: string ;
articles?: Article[] ;
}
