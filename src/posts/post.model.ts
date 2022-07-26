import * as mongoose from 'mongoose';
import { Author } from './author.model';
import { PostCategory } from './post-category/post-category.model';

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  publishDate: { type: Date, required: true, default: Date.now },
  excerpt: { type: String },
  content: { type: String, required: true },
  featuredImage: { type: String },
  featuredImageCopyright: { type: String },
  tags: [
    {
      label: String,
      slug: String
    }
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostCategory',
    required: true
  },
});

export class Post {
  constructor(
    public id: string,
    public title: string,
    public slug: string,
    public publishDate: number,
    public content: string,
    public author: Author,
    public category: PostCategory,
  ) {}
  public featuredImage: string;
  public featuredImageCopyright: string;
  public excerpt: string;
  public tags: PostTag[];
}

export interface PostTag {
  label: string,
  slug: string
}