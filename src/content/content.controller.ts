import { Body, Controller, Post, Optional, Param, Response, HttpException, HttpStatus, Get, Query, ParseIntPipe, DefaultValuePipe, Delete, Put } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    constructor(private readonly content: ContentService) {}

    @Get(':contentType')
    async getItems(
        @Param('contentType') contentType,
        @Optional() @Query('pageSize', new DefaultValuePipe(20),  ParseIntPipe) pageSize,
        @Optional() @Query('pageIndex',  new DefaultValuePipe(0), ParseIntPipe) pageIndex = 0
    )
    {
        return this.content.getItems(contentType, {pageSize: pageSize, pageIndex: pageIndex});
    }
    @Get(':contentType/by-id/:id')
    async getItemById(
        @Param('contentType') contentType,
        @Param('id') id,
    )
    {
        return this.content.getItemById(contentType, id);
    }
    @Get(':contentType/by-slug/:id')
    async getItemBySlug(
        @Param('contentType') contentType,
        @Param('slug') slug,
    )
    {
        return this.content.getItemBySlug(contentType, slug);
    }

    @Delete(':contentType/:id')
    async deleteItem(
        @Param('contentType') contentType,
        @Param('id') id,
    )
    {
        return this.content.deleteItem(contentType, id);
    }

    
    @Put(':contentType/:id')
    async updateItem(
        @Param('contentType') contentType,
        @Param('id') id,
        @Body() data
    )
    {
        return this.content.updateItem(contentType, id, data);
    }

    @Post(':contentType')
    async addItem(@Param('contentType') contentType, @Body() body) {
        const result = await this.content.addItem(contentType, body);
        if(result) {
            return result;
        } else {
            throw new HttpException("Content type does not exists", HttpStatus.NOT_FOUND);
        }
    }
}
