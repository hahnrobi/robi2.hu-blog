import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post.model';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Post', schema: PostSchema}])],
    providers: [PostsService],
    controllers: [PostsController]
})
export class PostsModule {}
