import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { GetRequestParams } from 'src/definitions/api-request-options';
import { ComplexResponse, ListResponseMeta } from 'src/definitions/api-response';
import { PrismaService } from 'src/prisma/prisma.service';
import { CmsSchemas } from './content-type-schemas';
import { CmsSchema, ContentTypeCmsSchema } from './content-type-schemas/content-type.schema';

@Injectable()
export class ContentService {
    private readonly contentType: string;
    private readonly cmsSchemas: CmsSchema= CmsSchemas;
    constructor(
        @Inject('CONTENT_TYPE') private ct: string,
        private readonly prisma:PrismaService) {
            this.contentType = ct;
            Logger.log("init with injector value: " + this.contentType);
    }

    getCmsSchema(contentType?: string) : ContentTypeCmsSchema | null {
        return this.cmsSchemas[contentType ?? this.contentType];
    }

    async addItem<T>(data: T): Promise<T | boolean> {
        if(this.prisma.hasOwnProperty(this.contentType)) {
            return this.prisma[this.contentType].create({data: data});
        }
        return false;
    }

    async getItems<T>(
        args: GetRequestParams<T> = {
            pagination: {
                pageIndex: 0,
                pageSize: 20    
            },
        }
    ): Promise<ComplexResponse<T[]>> {
        if(this.prisma.hasOwnProperty(this.contentType)) {
            const schema = args.withSchema ? this.getCmsSchema(this.contentType) : undefined;
            const pagination = args.pagination && {
                    pageIndex: args.pagination.pageIndex,
                    pageSize: args.pagination.pageSize,
                    total: await this.prisma[this.contentType].count()
            };

            const relParams = this.makeRelationCountParams(args.relationCounts);
            const selectParams = relParams ? {
                include: {
                ...relParams
                }
            } : undefined;

            const items= await <T[]>this.prisma[this.contentType].findMany({
                    take: args.pagination.pageSize,
                    skip: args.pagination.pageIndex,
                    where: args.filters,
                    orderBy: args.orderBy,
                    ...selectParams
                })
            return {pagination, items, schema};
            }
    }
    async getItemById<T>(id: string, args: any) {
        const schema = args.withSchema ? this.getCmsSchema(this.contentType) : undefined;

        return {
            item: await this.prisma[this.contentType].findUnique({
            where: {
                id: id
            }
        }),
        schema,

        }
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


    private makeRelationCountParams(relationCountsFields: string[]) {
        if(!relationCountsFields || relationCountsFields.length === 0) {
            return undefined;
        }
        let sel = {};
        relationCountsFields.forEach(element => {
            sel = {...sel, [element]: true}
        });

        if(sel) {
            return {_count: {
                select: sel,
            },
            }
        }else {
            return undefined;
        }
    }
}
