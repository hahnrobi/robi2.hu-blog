
import {ArticleTagsOnArticles} from '../../articleTagsOnArticles/entities/articleTagsOnArticles.entity'


export class ArticleTag {
  id: string ;
title: string ;
slug: string ;
articles?: ArticleTagsOnArticles[] ;
}
