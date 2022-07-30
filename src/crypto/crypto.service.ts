import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CryptoService {
    private saltRounds = 12;
    async checkPasswordAgainstHash(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
    async generatePasswordHash(password: string) {
        return await bcrypt.hash(password, this.saltRounds);
    }
}
