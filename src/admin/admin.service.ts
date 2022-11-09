import { Injectable } from '@nestjs/common';
import { CmsAdminMenu, CmsAdminMenuItemActionType } from './definitions/CmsAdminMenu.model';

@Injectable()
export class AdminService {

    getAdminMenu() {
        return <CmsAdminMenu>{
            items: [
                {
                    identifier: 'ARTICLES',
                    icon: 'fa-newspaper',
                    action: {
                        type: CmsAdminMenuItemActionType.LIST_PAGE,
                        contentType: 'article'
                    },
                    children: [
                        {
                            identifier: 'ARTICLES',
                            icon: 'fa-newspaper',
                            action: {
                                type: CmsAdminMenuItemActionType.LIST_PAGE,
                                contentType: 'article'
                            }
                        },
                        {
                            identifier: 'ARTICLE-CATEGORIES',
                            icon: 'fa-newspaper',
                            action: {
                                type: CmsAdminMenuItemActionType.LIST_PAGE,
                                contentType: 'articleCategory'
                            },
                        }
                    ]
                }
            ]
        }
    }
}
