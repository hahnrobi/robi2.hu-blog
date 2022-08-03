import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PostsService } from '../posts.service';
import { PostCategory } from './post-category.model';

@Controller('post-category')
export class PostCategoryController {
    constructor(private readonly postsService: PostsService) {

    }
    @Get()
    async getAll(@Query('offset') offset: number = 0, @Query('limit') limit = 0) {
      return await this.postsService.getCategories(offset, limit);
    }
    @Post()
    async addCategory(@Body() category: PostCategory) {
      return await this.postsService.addCategory(category);
    }
    @Put(":id")
    async updateCategory(@Param('id') id: string, @Body() category: PostCategory) {
      return await this.postsService.updateCategory(id, category);
    }
}
