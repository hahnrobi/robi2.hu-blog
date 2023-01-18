import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from 'src/crypto/crypto.service';
import { Users2Service } from 'src/users2/users2.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: Users2Service,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService
    ) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);
    const passwordHash = await this.usersService.getUserPasswordHash(user.id);
    if (user && await this.cryptoService.checkPasswordAgainstHash(pass, passwordHash)) {
      return user;
    }
    await delayLogin();
    return null;
  }

  public async login(user: any) {
    const payload = { sub: user.id  };
    return {
      access_token: this.jwtService.sign(payload, {expiresIn: "10m"}),
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
 