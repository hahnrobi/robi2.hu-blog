import { ContentTypeCmsSchema } from '../content-type.schema';


export const articleCategoryCmsSchema: ContentTypeCmsSchema = {
    listColumns: ['title'],
    searchable: false,
    searchableFields: [],
    draftable: false,
    versioning: false,
    fields: []
}