import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [
    { provide: 'CONTENT_TYPE', useValue: "article"},
    ContentService],
  controllers: [ContentController],
  imports: [PrismaModule]
})
export class ContentModule {}
