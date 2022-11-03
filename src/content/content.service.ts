import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ComplexResponse, ListResponseMeta } from 'src/definitions/api-response';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentService {
    constructor(private readonly prisma:PrismaService) {
    }

    async addItem<T>(itemTypeName: string, data: T): Promise<T | boolean> {
        if(this.prisma.hasOwnProperty(itemTypeName)) {
            return this.prisma[itemTypeName].create({data});
        }
        return false;
    }

    async getItems<T>(
        itemTypeName: string,
        args = {
            pageIndex: 0,
            pageSize: 20
        }
    ): Promise<ComplexResponse<T[], ListResponseMeta>> {
        if(this.prisma.hasOwnProperty(itemTypeName)) {
            return {
                meta:  {
                    pageIndex: args.pageIndex,
                    pageSize: args.pageSize,
                    total: await this.prisma[itemTypeName].count()
                },
                items: await this.prisma[itemTypeName].findMany({
                    take: args.pageSize,
                    skip: args.pageIndex
                })
            }
        }
    }

    async getItemById<T>(itemTypeName: string, id: string) {
        return this.prisma[itemTypeName].findUnique({
            where: {
                id: id
            }
        })
    }

    async getItemBySlug<T>(itemTypeName: string, slug: string) {
        return this.prisma[itemTypeName].findUnique({
            where: {
                slug: slug
            }
        })
    }

 
    async updateItem<T>(itemTypeName: string, id: string, data: T) {
        return this.prisma[itemTypeName].update({
            where: {
                id: id
            }, 
            data: data
        })
    }  

    async deleteItem<T>(itemTypeName: string, id: string) {
        return this.prisma[itemTypeName].delete({
            where: {
                id: id
            }
        }) ? true : false
    }
}
