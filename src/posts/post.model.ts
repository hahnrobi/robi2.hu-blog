import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema(
    {
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true, index: true},
    publishDate: {type: Date, required: true, default: Date.now},
    excerpt: {type: String, required: true},
    content: {type: String, required: true},
    featuredImage: {type: String},
    featuredImageCopyright: {type: String}
    }
)

export class Post {
    constructor(
        public id: string,
        public title: string,
        public slug: string,
        public publishDate: number,
        public excerpt: string,
        public content: string
    ){}
    public featuredImage: string;
    public featuredImageCopyright: string
}