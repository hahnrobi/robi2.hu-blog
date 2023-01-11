import { ContentTypeCmsSchemaFieldValidation } from "../content-type.schema";
import { BaseField } from "./base";
import { RelationField } from "./relation";

export class SelectField extends RelationField {
    constructor(
        public name: string,
        public label: string,
        public validations: ContentTypeCmsSchemaFieldValidation[] = [],
		public collectionName: string,
        public useProp?: string
    ) {
        super(name, label, 'select', validations, collectionName, useProp);
    }
}