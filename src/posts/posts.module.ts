import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.model';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { AuthorSchema } from './author.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'Author', schema: AuthorSchema },
    ]),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
