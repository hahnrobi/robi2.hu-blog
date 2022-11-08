import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { ComplexResponse, ListResponseMeta } from 'src/definitions/api-response';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentService {
    private readonly contentType: string;
    constructor(
        @Inject('CONTENT_TYPE') private ct: string,
        private readonly prisma:PrismaService) {
            this.contentType = ct;
            Logger.log("init with injector value: " + this.contentType);
    }

    async addItem<T>(data: T): Promise<T | boolean> {
        if(this.prisma.hasOwnProperty(this.contentType)) {
            return this.prisma[this.contentType].create({data: data});
        }
        return false;
    }

    async getItems<T>(
        args = {
            pageIndex: 0,
            pageSize: 20
        }
    ): Promise<ComplexResponse<T[], ListResponseMeta>> {
        if(this.prisma.hasOwnProperty(this.contentType)) {
            return {
                meta:  {
                    pageIndex: args.pageIndex,
                    pageSize: args.pageSize,
                    total: await this.prisma[this.contentType].count()
                },
                items: await <T[]>this.prisma[this.contentType].findMany({
                    take: args.pageSize,
                    skip: args.pageIndex
                })
            }
        }
    }

    async getItemById<T>(id: string) {
        return this.prisma[this.contentType].findUnique({
            where: {
                id: id
            }
        })
    }

    async getItemBySlug<T>(slug: string) {
        return this.prisma[this.contentType].findUnique({
            where: {
                slug: slug
            }
        })
    }

 
    async updateItem<T>(id: string, data: T) {
        return this.prisma[this.contentType].update({
            where: {
                id: id
            }, 
            data: data
        })
    }  

    async deleteItem<T>(id: string) {
        return this.prisma[this.contentType].delete({
            where: {
                id: id
            }
        }) ? true : false
    }
}
