import * as mongoose from 'mongoose';

export const PostCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
});

export class PostCategory {
  constructor(
    public id: string,
    public title: string,
    public slug: string,
  ) {}
}
