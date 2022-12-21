import { Controller, Get } from '@nestjs/common';
import { CmsAdminMenu, CmsAdminMenuItemActionType } from '../definitions/CmsAdminMenu.model';

@Controller('menu')
export class MenuController {

    @Get('/')
    getMenu() {
        return <CmsAdminMenu>{
            items: [
                {
                    identifier: 'ARTICLE',
                    icon: 'wysiwyg',
                    action: {
                        type: CmsAdminMenuItemActionType.LIST_PAGE,
                        contentType: 'article',
                    }

                }
            ]
        }
    }
}
