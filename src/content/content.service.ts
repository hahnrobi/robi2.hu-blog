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

            const relParams = this.makeAggregationParams({relationCountsFields: args.relationCounts, aggregateFields: args.aggregate });
            const selectParams = Object.keys(relParams).length > 0 ? {
                include: {
                ...relParams
                }
            } : undefined;

            const queryCondition = {
                take: args.pagination.pageSize,
                skip: args.pagination.pageIndex,
                where: args.filters,
                orderBy: args.orderBy,
            }

            const items= await <T[]>this.prisma[this.contentType].findMany({...queryCondition,...selectParams})
            const pagination = args.pagination && {
                    pageIndex: args.pagination.pageIndex,
                    pageSize: args.pagination.pageSize,
                    total: await this.prisma[this.contentType].count(queryCondition)
            };

            return {pagination, items, schema};
            }
    }
    async getItemById<T>(id: string, args: any) {
        const schema = args.withSchema ? this.getCmsSchema(this.contentType) : undefined;

        const additionalIncludes = this.makeAggregationParams({relationCountsFields: args.relationCountsFields, aggregateFields: args.aggregate})

        const selectParams = Object.keys(additionalIncludes).length > 0 ? {
            include: {
            ...additionalIncludes
            }
        } : undefined;

        return {
            item: await this.prisma[this.contentType].findUnique({
            where: {
                id: id
            },
            ...selectParams
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


    private makeAggregationParams(args: {relationCountsFields?: string[], aggregateFields?: string[]}) {
        const {relationCountsFields, aggregateFields} = args;
        let countSelect = {};
        let aggregateSelect = {};
        relationCountsFields && relationCountsFields.forEach(element => {
            countSelect = {...countSelect, [element]: true}
        });
        aggregateFields && aggregateFields.forEach(element => {
            aggregateSelect = {...aggregateSelect, [element]: true}
        });


        const countQuery = Object.keys(countSelect).length > 0 ? { _count: {
                select: countSelect,
            },
        } : {}
        return {
            ...aggregateSelect,
            ...countQuery
        }
    }
}
