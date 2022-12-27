

export type ContentTypeCmsSchemaFieldTypes = 'text' | 'textarea' | 'title' | 'slug' | 'select';
export type ContentTypeCmsSchemaFieldValidation = {
    name: 'required' | 'min' | 'max' | 'minLength' | 'maxLength';
    params?: any;
}

export type ContentTypeCmsSchemaField = {
    name: string;
    label: string;
    type: ContentTypeCmsSchemaFieldTypes;
    validations: ContentTypeCmsSchemaFieldValidation[];
    
}
export type ContentTypeCmsSchema = {
    listColumns: string[],
    searchable: boolean,
    searchableFields: string[],
    draftable: boolean,
    versioning: boolean,
    fields: ContentTypeCmsSchemaField[],
    editorLayout?: ContentEditorLayoutBase
}

export type CmsSchema = {
    [key: string]: ContentTypeCmsSchema
}


export type ContentEditorLayoutBaseAdditionalParams = {
    isSidebar?: boolean
}
export type ContentEditorLayoutBaseType = 'column' | 'row' | 'content' | 'tab-container' | 'tab-item'

export type ContentEditorLayoutBase = {
    children?: ContentEditorLayoutBase[],
    type: ContentEditorLayoutBaseType,
    attrs?: ContentEditorLayoutBaseAdditionalParams
}

export type ContentEditorLayoutRow = ContentEditorLayoutBase & {
    type: 'row'
}

export type ContentEditorLayoutColumn = ContentEditorLayoutBase & {
    type: 'column'
    params: any
}

export type ContentEditorLayoutTabContainer = {
    children: [ContentEditorLayoutTabItem]
    type: 'tab-container'
}

export type ContentEditorLayoutTabItem = ContentEditorLayoutBase & {
    type: 'tab-item'
}

export type ContentEditorLayoutContent = ContentEditorLayoutBase & {
    type: 'content',
    itemType: 'field' | 'wysiwyg-1'
    fieldName: string
}