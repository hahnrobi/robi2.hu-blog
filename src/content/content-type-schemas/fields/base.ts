import { ContentTypeCmsSchemaFieldTypes, ContentTypeCmsSchemaFieldValidation } from "../content-type.schema";

export abstract class BaseField {

        constructor(
            public name: string,
            public label: string,
            public type: ContentTypeCmsSchemaFieldTypes = 'text',
            public validations: ContentTypeCmsSchemaFieldValidation[] = []
        ) {

        }
}