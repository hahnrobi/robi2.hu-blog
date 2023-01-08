import { Body, Controller, Post, Optional, Param, Response, HttpException, HttpStatus, Get, Query, ParseIntPipe, DefaultValuePipe, Delete, Put, Logger } from '@nestjs/common';
import { ContentService } from './content.service';
import { parse as parseQs } from 'qs';
import { FilterParams, QuerySortParams } from 'src/definitions/api-request-options';
import { convertQuerySortToDbSort } from './utils/query-sort-convert';

export class ContentController<CreateDto, UpdateDto, T> {
    constructor(private readonly content: ContentService) {}

    @Get('')
    async getItems(
        @Optional() @Query('pageSize', new DefaultValuePipe(20),  ParseIntPipe) pageSize,
        @Optional() @Query('pageIndex',  new DefaultValuePipe(0), ParseIntPipe) pageIndex = 0,
        @Optional() @Query('schema',  new DefaultValuePipe(0), ParseIntPipe) schema = 0,
        @Optional() @Query('relationCounts') relationCountsString = "",
        @Optional() @Query('filters') filtersQs: string,
        @Optional() @Query('sort') sortQs: string
    )
    {
        const relationCounts = relationCountsString && relationCountsString.split(',');
        const withSchema = schema === 1;
        const filters = parseQs(filtersQs) as FilterParams;

        
        const sortingParsed = parseQs(sortQs) as QuerySortParams;
        let sorting = null;
        if(sortingParsed) {
            sorting = convertQuerySortToDbSort<T>(sortingParsed);
        }

        return this.content.getItems<T>(
            {
                pagination: {pageSize: pageSize, pageIndex: pageIndex},
                filters: filters,
                orderBy: sorting,
                relationCounts: relationCounts,
                withSchema: withSchema});
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
    )
    {
        const withSchema = schema === 1;
        return this.content.getItemById<T>(id, {withSchema: withSchema});
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
