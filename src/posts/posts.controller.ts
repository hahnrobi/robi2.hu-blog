import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  async getAll(@Query('offset') offset: number = 0, @Query('limit') limit = 0) {
    return await this.postsService.getPosts(offset, limit);
  }
  @Get('/:slug')
  async getPost(@Param('slug') slug: string) {
    return await this.postsService.getPost(slug);
  }
  @Get('id/:id')
  async getPostById(@Param('id') id: string) {
    return await this.postsService.getPostById(id);
  }
}
