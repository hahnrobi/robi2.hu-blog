import { Injectable } from '@nestjs/common';
import { Post, PostSchema } from './post.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostCategory } from './post-category/post-category.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
    @InjectModel("PostCategory") private readonly postCategoryModel: Model<PostCategory>
    ) {}

  async insertTest(
    title: string,
    slug: string,
    excerpt: string,
    content: string,
  ) {
    const newPost = new this.postModel({
      title: title,
      slug: slug,
      excerpt: excerpt,
      content: content,
      publishDate: new Date(2020, 2, 1, 7, 10, 20, 0),
    });
    const id = await newPost.save();
    return id;
  }

  async getPosts(offset = 0, limit = 10) {
    if (limit > 20) {
      limit = 20;
    }
    if (limit <= 0) {
      limit = 10;
    }
    return {
      posts: await this.postModel
        .find()
        .select(['-content'])
        .sort([['publishDate', -1]])
        .skip(offset)
        .limit(limit)
        .populate('author')
        .exec(),
      total: await this.postModel.count().exec(),
      offset: offset,
      limit: limit,
    };
  }

  async getPost(slug: string) {
    return await this.postModel
      .findOne({ slug: slug })
      .populate('author')
      .exec();
  }
  async getCategories() {
    return await this.postCategoryModel.find().exec();
  }
  async addCategory(category: PostCategory) {
    const newCategory = new this.postCategoryModel({
      title: category.title,
      slug: category.slug
    })
    const id = await newCategory.save();
    return id;
  }
}
