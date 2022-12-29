
import {Prisma} from '@prisma/client'




export class UpdateArticleDto {
  title?: string;
slug?: string;
body?: Prisma.InputJsonValue;
published?: boolean;
}
