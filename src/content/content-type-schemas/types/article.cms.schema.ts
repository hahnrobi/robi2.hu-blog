import { TitleField } from './../fields/title';
import { ContentTypeCmsSchema } from '../content-type.schema';
import { TextField } from '../fields/text';


export const articleContentCmsSchema: ContentTypeCmsSchema = {
    listColumns: ['title', 'slug'],
    searchable: false,
    searchableFields: [],
    draftable: false,
    versioning: false,
    fields: [
        new TitleField(
            'title',
            'TITLE', 
            [{name: 'required'}, {name: 'minLength', params: 2}]
        )
    ]
}