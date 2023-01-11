import { Body, Controller, Post, Optional, Param, Response, HttpException, HttpStatus, Get, Query, ParseIntPipe, DefaultValuePipe, Delete, Put, Logger, BadRequestException } from '@nestjs/common';
import { ContentService } from './content.service';
import { parse as parseQs } from 'qs';
import { FilterParams } from 'src/definitions/api-request-options';

export class ContentController<CreateDto, UpdateDto, T> {
    constructor(private readonly content: ContentService) {}

    @Get('')
    async getItems(
        @Optional() @Query('pageSize', new DefaultValuePipe(20),  ParseIntPipe) pageSize,
        @Optional() @Query('pageIndex',  new DefaultValuePipe(0), ParseIntPipe) pageIndex = 0,
        @Optional() @Query('schema',  new DefaultValuePipe(0), ParseIntPipe) schema = 0,
        @Optional() @Query('relationCounts') relationCountsString = "",
        @Optional() @Query('populate') populateQs: string,
        @Optional() @Query('filter') filtersQs: string
    )
    {
        const relationCounts = relationCountsString && relationCountsString.split(',');
        const withSchema = schema === 1;
        const filters = parseQs(filtersQs) as FilterParams;
        const populateFields = Object.keys(parseQs(populateQs) as object) ?? null;
        return await this.content.getItems<T>({pagination: {pageSize: pageSize, pageIndex: pageIndex}, filters: filters, relationCounts: relationCounts, withSchema: withSchema, aggregate: populateFields});
    }

    @Get('schema')
    async getSchema()
    {
        return this.content.getCmsSchema();
    }

    @Get('id/:id')
    async getItemById(
        @Param('id') id,
        @Optional() @Query('schema',  new DefaultValuePipe(0), ParseIntPipe) schema = 0,
        @Optional() @Query('populate') populateQs: string,
    )
    {
        const withSchema = schema === 1;
        const populateFields = Object.values(parseQs(populateQs) as object) ?? null;
        return this.content.getItemById<T>(id, {withSchema: withSchema, aggregate: populateFields});
    }
    @Get('slug/:id')
    async getItemBySlug(
        @Param('slug') slug,
    )
    {
        return this.content.getItemBySlug<T>(slug);
    }
    
    @Put(':id')
    async updateItem(
        @Param('id') id,
        @Body() data: UpdateDto
    )
    {
        return this.content.updateItem(id, data);
    }

    @Post('')
    async addItem(@Body() body: CreateDto) {
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
