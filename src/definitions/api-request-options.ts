export type SearchParam = {

}

export type FilterParams = {
    [key: string]: {
        [key in FilterOperators]: any
    }
}

export type PaginationParams = {
    pageIndex: number,
    pageSize: number
}

export type FilterOperators = "equals" | "not" | "in" | "notIn" | "lt" | "lte" | "gt" | "gte" | "contains" | "search" | "mode" | "startsWith" | "endsWith"
export const FilterLogicalOperators = ["AND", "OR", "NOT"]


export type GetRequestParams<T> = {
    search?: SearchParam[],
    filters?: FilterParams,
    count?: string[],
    orderBy?: {[key in keyof T]: 'asc' | 'desc'}[],
    aggregate?: (keyof T)[] | string[],
    pagination?: PaginationParams
}