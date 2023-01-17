
import {Article} from '../../article/entities/article.entity'


export class ArticleTag {
  id: string ;
title: string ;
slug: string ;
articles?: Article[] ;
}
