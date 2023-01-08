import { QuerySortParams, SortParams } from "src/definitions/api-request-options"

export function convertQuerySortToDbSort<T>(input: QuerySortParams) : SortParams<T> {
    let res = [];
    const listOfKeys = Object.keys(input);
    listOfKeys.forEach(key => {
        const element = input[key];
        const splittedElem = element.split(':');
        const resObj = {};
        resObj[splittedElem[0]] = splittedElem[1] ?? 'asc';
        res.push(resObj);
    });
    return res as SortParams<T>;
}