import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MenuController } from './menu/menu.controller';

@Module({
  controllers: [AdminController, MenuController],
  providers: [AdminService]
})
export class AdminModule {}
