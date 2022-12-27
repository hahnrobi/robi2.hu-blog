import { ContentTypeCmsSchemaFieldTypes, ContentTypeCmsSchemaFieldValidation } from "../content-type.schema";
import { BaseField } from "./base";

export class RelationField extends BaseField {
    constructor(
        public name: string,
        public label: string,
		type: ContentTypeCmsSchemaFieldTypes,
        public validations: ContentTypeCmsSchemaFieldValidation[] = [],
		public collectionName: string
    ) {
        super(name, label, type, validations);
    }
}