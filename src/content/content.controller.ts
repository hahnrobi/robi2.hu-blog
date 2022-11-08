import { Body, Controller, Post, Optional, Param, Response, HttpException, HttpStatus, Get, Query, ParseIntPipe, DefaultValuePipe, Delete, Put } from '@nestjs/common';
import { ContentService } from './content.service';

export class ContentController {
    constructor(private readonly content: ContentService) {}

    @Get('')
    async getItems(
        @Optional() @Query('pageSize', new DefaultValuePipe(20),  ParseIntPipe) pageSize,
        @Optional() @Query('pageIndex',  new DefaultValuePipe(0), ParseIntPipe) pageIndex = 0
    )
    {
        return this.content.getItems({pageSize: pageSize, pageIndex: pageIndex});
    }
    @Get('id/:id')
    async getItemById(
        @Param('id') id,
    )
    {
        return this.content.getItemById(id);
    }
    @Get('slug/:id')
    async getItemBySlug(
        @Param('slug') slug,
    )
    {
        return this.content.getItemBySlug(slug);
    }
    
    @Put(':id')
    async updateItem(
        @Param('id') id,
        @Body() data
    )
    {
        return this.content.updateItem(id, data);
    }

    @Post('')
    async addItem(@Body() body) {
        const result = await this.content.addItem(body);
        if(result) {
            return result;
        } else {
            throw new HttpException("Content type does not exists", HttpStatus.NOT_FOUND);
        }
    }
    
    @Delete(':id')
    async deleteItem(
        @Param('id') id,
    )
    {
        return this.content.deleteItem(id);
    }

}
