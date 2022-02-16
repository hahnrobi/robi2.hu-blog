import * as mongoose from 'mongoose';
import { Author } from './author.model';

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  publishDate: { type: Date, required: true, default: Date.now },
  excerpt: { type: String },
  content: { type: String, required: true },
  featuredImage: { type: String },
  featuredImageCopyright: { type: String },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
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
  ) {}
  public featuredImage: string;
  public featuredImageCopyright: string;
  public excerpt: string;
}
