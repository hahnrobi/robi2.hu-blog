import { ContentTypeCmsSchema } from '../content-type.schema';


export const articleCategoryCmsSchema: ContentTypeCmsSchema = {
    listOptions: {
        actions: ['edit', 'delete'],
        columns: [
          {
            fieldName: 'title',
            title: 'TITLE'
          }
        ]
      },
    searchable: false,
    searchableFields: [],
    draftable: false,
    versioning: false,
    fields: []
}