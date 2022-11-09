export type ComplexResponse<T> = {
    items: T,
    pagination?: any,
    schema: any
}

export type ListResponseMeta = PaginableMeta & {
    populateable?: string[]
}

export type PaginableMeta = {
    pagination: {
        pageIndex: number,
        pageSize: number,
        total: number,
    }
}
