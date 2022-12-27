import { SelectField } from './../fields/select';
import { SlugField } from './../fields/slug';
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
        ),
        new SlugField(
            'slug',
            'SLUG', 
            [{name: 'required'}, {name: 'minLength', params: 4}]
        ),
        new SelectField(
            'categoryId',
            'CATEGORY', 
            [{name: 'required'}],
            'article-category'
        )
    ]
}