import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    slug: {type: String, required: true, unique: true, index: true},
    profilePictore: {type: String}
    }
)

export class Author {
    constructor(
        public id: string,
        public name: string,
        public slug: string,
    ){}
    public profilePicture: string
}