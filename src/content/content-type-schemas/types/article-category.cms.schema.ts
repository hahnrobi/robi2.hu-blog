import { ContentTypeCmsSchema } from '../content-type.schema';
import { SlugField } from '../fields/slug';
import { TitleField } from '../fields/title';


export const articleCategoryCmsSchema: ContentTypeCmsSchema = {
    listOptions: {
        actions: ['edit', 'delete'],
        columns: [
          {
            fieldName: 'title',
            title: 'TITLE'
          },
          {
            fieldName: '_count.articles',
            title: 'ARTICLE_COUNT'
          }
        ]
      },

    searchable: false,

    searchableFields: [],

    draftable: false,

    versioning: false,

    fields: [
      new TitleField('title', 'TITLE', [
        { name: 'required' },
        { name: 'minLength', params: 2 },
      ]),
      new SlugField('slug', 'SLUG', [
        { name: 'required' },
        { name: 'minLength', params: 4 },
      ]),
    ],

    relationCounts: ['articles']
}