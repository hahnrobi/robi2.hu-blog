

export type ContentTypeCmsSchemaFieldTypes = 'text' | 'textarea' | 'title' | 'slug' | 'select' | 'editor';
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
    listOptions: ContentTypeCmsSchemaListOptions
    searchable: boolean,
    searchableFields: string[],
    draftable: boolean,
    versioning: boolean,
    fields: ContentTypeCmsSchemaField[],
    editorLayout?: ContentEditorLayoutBase[]
}

export type ContentTypeCmsSchemaListOptions = {
    actions: ContentTypeCmsSchemaListAction[],
    columns: ContentTypeCmsSchemaListColumns[]
}

export type ContentTypeCmsSchemaListColumns = {
    fieldName: string,
    title: string,
    hint?: string,
    defaultHidden?: boolean
}
export type ContentTypeCmsSchemaListAction =  'view' | 'publish' | 'unpublish' | 'edit' | 'delete';


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
    itemType: 'field' | 'editor'
    fieldName: string
}