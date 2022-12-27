import { ContentTypeCmsSchemaFieldValidation } from "../content-type.schema";
import { BaseField } from "./base";

export class TitleField extends BaseField {
    constructor(
        public name: string,
        public label: string,
        public validations: ContentTypeCmsSchemaFieldValidation[] = []
    ) {
        super(name, label, 'title', validations);
    }
}