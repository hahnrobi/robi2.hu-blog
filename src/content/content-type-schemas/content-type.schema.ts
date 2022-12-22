

export type ContentTypeCmsSchemaFieldTypes = 'text' | 'textarea';
export type ContentTypeCmsSchemaFieldValidation = {
    name: 'required' | 'min' | 'max' | 'minLength' | 'maxLength';
    params: any;
}

export type ContentTypeCmsSchemaField = {
    name: string;
    label: string;
    type: ContentTypeCmsSchemaFieldTypes;
    validation: ContentTypeCmsSchemaFieldValidation[];
    
}
export type ContentTypeCmsSchema = {
    listColumns: string[],
    searchable: boolean,
    searchableFields: string[],
    draftable: boolean,
    versioning: boolean
    fields: ContentTypeCmsSchemaField[];
}

export type CmsSchema = {
    [key: string]: ContentTypeCmsSchema
}