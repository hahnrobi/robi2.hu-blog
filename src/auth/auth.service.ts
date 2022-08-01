import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from 'src/crypto/crypto.service';
import { User, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService
    ) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && await this.cryptoService.checkPasswordAgainstHash(pass, user.password)) {
      return user;
    }
    await delayLogin();
    return null;
  }

  public async login(user: any) {
    const payload = { sub: user._id  };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

function delayLogin() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done!');
      }, Math.floor(Math.random() * 12) * 600);
    });
 }
 