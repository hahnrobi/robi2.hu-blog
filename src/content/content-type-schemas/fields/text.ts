import { ContentTypeCmsSchemaFieldValidation } from "../content-type.schema";
import { BaseField } from "./base";

export class TextField extends BaseField {
    constructor(
        public name: string,
        public label: string,
        public validation: ContentTypeCmsSchemaFieldValidation[] = []
    ) {
        super(name, label, 'text', validation);
    }
}