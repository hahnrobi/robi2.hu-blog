export type ContentTypeCmsSchema = {
    listColumns: string[],
    searchable: boolean,
    searchableFields: string[],
    draftable: boolean,
    versioning: boolean
}

export type CmsSchema = {
    [key: string]: ContentTypeCmsSchema
}