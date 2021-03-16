import { ExgPattern } from "../../../shared/helpers/ExgPattern";
import { InvalidArgumentError } from "../../shared/value-object/InvalidArgumentError";
import { StringValueObject } from "../../shared/value-object/StringValueObject";

export class UserName extends StringValueObject {
    constructor(value) { 
        super(value);
        this.ensureLengthIsValidName(value);
    }
    private ensureLengthIsValidName(value) {
        if(ExgPattern.isValidName.test(value)) {
            return;
        }
        throw new InvalidArgumentError(`The name is invalid ${value}`);
    }
}