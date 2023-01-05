import { Controller, Get } from '@nestjs/common';
import { CmsAdminMenu, CmsAdminMenuItemActionType } from '../definitions/CmsAdminMenu.model';

@Controller('menu')
export class MenuController {

    @Get('/')
    getMenu() {
        return <CmsAdminMenu>{
            items: [
                {
                    identifier: 'HOME',
                    icon: 'home',
                    action: {
                        type: CmsAdminMenuItemActionType.HOMEPAGE,
                    }
                },
                {
                    identifier: 'ARTICLES',
                    icon: 'wysiwyg',
                    action: {
                        type: CmsAdminMenuItemActionType.LIST_PAGE,
                        contentType: 'article',
                    },
                    children: [
                        {
                            identifier: 'ARTICLE_CREATE',
                            icon: 'wysiwyg',
                            action: {
                                type: CmsAdminMenuItemActionType.EDITOR,
                                contentType: 'article',
                            },
                        }
                    ]
                },
                {
                    identifier: 'ARTICLE_CATEGORIES',
                    icon: 'wysiwyg',
                    action: {
                        type: CmsAdminMenuItemActionType.LIST_PAGE,
                        contentType: 'article-category',
                    },
                    children: [
                        {
                            identifier: 'ARTICLE_CATEGORY_CREATE',
                            icon: 'wysiwyg',
                            action: {
                                type: CmsAdminMenuItemActionType.EDITOR,
                                contentType: 'article-category',
                            },
                        }
                    ]
                }
            ]
        }
    }
}
