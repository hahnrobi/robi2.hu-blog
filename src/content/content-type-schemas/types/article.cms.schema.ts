import { ContentTypeCmsSchema } from '../content-type.schema';


export const articleContentCmsSchema: ContentTypeCmsSchema = {
    listColumns: ['title', 'slug'],
    searchable: false,
    searchableFields: [],
    draftable: false,
    versioning: false
}