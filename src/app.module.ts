import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CryptoModule } from './crypto/crypto.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContentModule } from './content/content.module';
import { AdminModule } from './admin/admin.module';
import { Users2Module } from './users2/users2.module';

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
    AuthModule,
    UsersModule,
    CryptoModule,
    PrismaModule,
    ContentModule,
    AdminModule,
    Users2Module,
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
