import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    
    //@UseGuards(JwtAuthGuard)
    @Get('menu')
    getMenu() {
        return this.adminService.getAdminMenu();
    }
}
