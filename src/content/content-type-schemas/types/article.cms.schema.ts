import { ContentTypeCmsSchema } from '../content-type.schema';
import { TextField } from '../fields/text';


export const articleContentCmsSchema: ContentTypeCmsSchema = {
    listColumns: ['title', 'slug'],
    searchable: false,
    searchableFields: [],
    draftable: false,
    versioning: false,
    fields: [
        new TextField(
            'title',
            'TITLE', 
            []
        )
    ]
}