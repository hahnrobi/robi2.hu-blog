import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Users2Service } from './users2.service';

@Controller('users2')
export class Users2Controller {
    constructor(private readonly service: Users2Service) {}
    @Get(':id')
    async getUser(
        @Param('id') id
    ) {
        return await this.service.getUser(id);
    }
    @Post('')
    async createUser(
        @Body() body
    ) {
        return await this.service.createUser(body.email, body.password, body);
    }
}
