

export type ContentTypeCmsSchemaFieldTypes = 'text' | 'textarea' | 'title' | 'slug' | 'select' | 'editor' | 'chips';
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
    /**
     * Options that could configure the list view in the CMS.
     */
    listOptions: ContentTypeCmsSchemaListOptions
    /**
     * Should be searchable in the generic search endpoint.
     */
    searchable: boolean,
    /**
     * List of fields that could be used for searching.
     */
    searchableFields: string[],
    /**
     * The entity can be saved as draft, so it would not be displayed on the site, only visible in the admin.
     */
    draftable: boolean,
    /**
     * Indicates whether the given content type could use versioning.
     * This means that after each change, you can track back all the different versions of the given entity.
     */
    versioning: boolean,
    /**
     * The list of fields for the admin editor's form generator.
     */
    fields: ContentTypeCmsSchemaField[],
    /**
     * Layout for the editor for the fields.
     * It can contain rows, columns and even tabs to create the layout for the editor.
     */
    editorLayout?: ContentEditorLayoutBase[],
    populateRelations?: string[],
    /**
     * Relational fields that should display the number of connected entities.
     */
    relationCounts?: string[]
}

export type ContentTypeCmsSchemaListOptions = {
    actions: ContentTypeCmsSchemaListAction[],
    columns: ContentTypeCmsSchemaListColumns[],
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