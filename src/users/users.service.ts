import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  private readonly users = [
    {
      userId: 1,
      email: 'john@gmail.com',
      password: '$2a$15$yJtJuC30x.sddPv3q3wcBe/bHO8aZvkIou/jMYg3MSBybrwqk8aN.',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({"email" : email}).exec();
  }
  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id);
  }
}