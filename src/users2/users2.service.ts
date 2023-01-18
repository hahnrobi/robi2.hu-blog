import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Users2Service {
    constructor(private readonly prisma: PrismaService) {}

    async getUserById(id: string) {
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }
    async getUserByEmail(email: string) {
        return await this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }
    async getUserPasswordHash(id: string) {
        return (await this.prisma.userPassword.findUnique({
            where: {
                userId: id
            }
        })).password
    }
    async createUser(email: string, password: string, otherFields: any) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return await this.prisma.user.create({
            data: {
                ...otherFields,
                email: email,
                password: {
                    create: [
                        {
                            password: hashedPassword
                        }
                    ]
                }
            }
        }
        )
    }
}
