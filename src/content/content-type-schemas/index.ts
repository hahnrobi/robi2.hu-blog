import { articleCategoryCmsSchema } from "./types/article-category.cms.schema";
import { articleContentCmsSchema } from "./types/article.cms.schema";

export const CmsSchemas = {
    article: articleContentCmsSchema,
    articleCategory: articleCategoryCmsSchema
}