export type SearchParam = {

}

export type PaginationParams = {
    pageIndex: number,
    pageSize: number
}

export type GetRequestParams<T> = {
    withSchema?: boolean,
    search?: SearchParam[],
    count?: string[],
    orderBy?: {[key in keyof T]: 'asc' | 'desc'}[],
    aggregate?: (keyof T)[] | string[],
    pagination?: PaginationParams
}