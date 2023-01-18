
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { CryptoModule } from 'src/crypto/crypto.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { Users2Module } from 'src/users2/users2.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    CryptoModule,
    Users2Module,
    JwtModule.register({
      secret: "TODO: CHANGE THIS",
      signOptions: { expiresIn: '6000s' },
    }),],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
