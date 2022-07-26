import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.model';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { AuthorSchema } from './author.model';
import { PostCategorySchema } from './post-category/post-category.model';
import { PostCategoryController } from './post-category/post-category.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'Author', schema: AuthorSchema },
      { name: "PostCategory", schema: PostCategorySchema}
    ]),
  ],
  providers: [PostsService],
  controllers: [PostsController, PostCategoryController],
})
export class PostsModule {}
