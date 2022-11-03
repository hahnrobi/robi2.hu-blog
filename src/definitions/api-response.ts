export type ComplexResponse<T, M> = {
    items: T,
    meta: M
}

export type ListResponseMeta = PaginableMeta & {
    populateable?: string[]
}

export type PaginableMeta = {
    pageIndex: number,
    pageSize: number,
    total: number,
}
