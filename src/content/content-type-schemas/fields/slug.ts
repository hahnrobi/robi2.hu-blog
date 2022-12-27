import { ContentTypeCmsSchemaFieldValidation } from "../content-type.schema";
import { BaseField } from "./base";

export class SlugField extends BaseField {
    constructor(
        public name: string,
        public label: string,
        public validations: ContentTypeCmsSchemaFieldValidation[] = []
    ) {
        super(name, label, 'slug', validations);
    }
}