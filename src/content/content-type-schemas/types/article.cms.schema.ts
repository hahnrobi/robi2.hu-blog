import { EditorField } from './../fields/editor';
import { SelectField } from './../fields/select';
import { SlugField } from './../fields/slug';
import { TitleField } from './../fields/title';
import {
  ContentEditorLayoutColumn,
  ContentEditorLayoutContent,
  ContentTypeCmsSchema,
} from '../content-type.schema';
import { TextField } from '../fields/text';
import { ChipsField } from '../fields/chips';

export const articleContentCmsSchema: ContentTypeCmsSchema = {
  listOptions: {
    actions: ['edit', 'publish', 'unpublish', 'delete'],
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
  fields: [
    new TitleField('title', 'TITLE', [
      { name: 'required' },
      { name: 'minLength', params: 2 },
    ]),
    new SlugField('slug', 'SLUG', [
      { name: 'required' },
      { name: 'minLength', params: 4 },
    ]),
    new EditorField('body', 'BODY', [
      { name: 'required' },
    ]),
    new SelectField(
      'categoryId',
      'CATEGORY',
      [{ name: 'required' }],
      'article-category',
    ),
    new ChipsField(
      'tags',
      'TAGS',
      [{ name: 'required' }],
      'article-tag',
    ),
  ],
  editorLayout: [
    {
      type: 'row',
      children: [
        <ContentEditorLayoutColumn>{
          type: 'column',
          params: { width: '12' },
          children: [
            <ContentEditorLayoutContent>{
              type: 'content',
              itemType: 'field',
              fieldName: 'title',
            },
          ],
        },
      ],
    },
    {
          type: 'row',
          children: [
            <ContentEditorLayoutColumn>{
              type: 'column',
              params: { width: '8' },
              children: [
                <ContentEditorLayoutContent>{
                  type: 'content',
                  itemType: 'editor',
                  fieldName: 'body',
                },
              ],
            },
            <ContentEditorLayoutColumn>{
              type: 'column',
              params: { width: '4' },
              children: [
                <ContentEditorLayoutContent>{
                  type: 'content',
                  itemType: 'field',
                  fieldName: 'slug',
                },
                <ContentEditorLayoutContent>{
                    type: 'content',
                    itemType: 'field',
                    fieldName: 'categoryId',
                },
                <ContentEditorLayoutContent>{
                  type: 'content',
                  itemType: 'field',
                  fieldName: 'tags',
              },
              ],
            },
          ],
    },
  ],
};
