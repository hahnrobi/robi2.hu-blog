import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3000,
  DATABASE_CONN: process.env.DATABASE_CONN
});

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` , load: [configuration]}),
    MongooseModule.forRoot(process.env.DATABASE_CONN),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log("Running path: ", __dirname);
    console.log("Database Connection string: " + process.env.DATABASE_CONN);
  }
}
