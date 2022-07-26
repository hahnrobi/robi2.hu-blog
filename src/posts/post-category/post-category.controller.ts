import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from '../posts.service';
import { PostCategory } from './post-category.model';

@Controller('post-category')
export class PostCategoryController {
    constructor(private readonly postsService: PostsService) {

    }
    @Get()
    async getAll() {
      return await this.postsService.getCategories();
    }
    @Post()
    async addCategory(@Body() category: PostCategory) {
      return await this.postsService.addCategory(category);
    }
}
