import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true,  unique: true, index: true },
  name: { type: String, required: true, },
  password: { type: String, required: true },
});

export class User {
  constructor(
    public id: string,
    public email: string,
    public password: string
  ) {}
  public name: string;
}