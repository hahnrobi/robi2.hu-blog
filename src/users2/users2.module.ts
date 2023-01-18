import { Module } from '@nestjs/common';
import { Users2Service } from './users2.service';
import { Users2Controller } from './users2.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContentModule } from 'src/content/content.module';

@Module({
  imports: [PrismaModule, ContentModule],
  providers: [Users2Service],
  controllers: [Users2Controller]
})
export class Users2Module {}
