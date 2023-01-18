import { AuthService } from './auth.service';
import { Users2Service } from 'src/users2/users2.service';
import { Controller, Get, Post, UseGuards, Request, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginCheckResponse } from './definitions/login-check-state';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: Users2Service
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return this.userService.getUserById(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('login-check')
    loginCheck(@Request() req) {
        return <LoginCheckResponse>{
            state: "valid"
        }
    }
}
