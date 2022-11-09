export type CmsAdminMenu = {
    items: CmsAdminMenuItem[]
}

export type CmsAdminMenuItem = {
    identifier: string,
    icon: string,
    action: CmsAdminMenuItemAction,
    children?: CmsAdminMenuItem[]
}
export enum CmsAdminMenuItemActionType {
    LIST_PAGE = 'list',
}
export type CmsAdminMenuItemAction = {
    type: CmsAdminMenuItemActionType,
    contentType?: string,
    url?: string
}