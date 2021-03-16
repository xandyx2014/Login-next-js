import { ExgPattern } from "../../../shared/helpers/ExgPattern";
import { InvalidArgumentError } from "../../shared/value-object/InvalidArgumentError";
import { StringValueObject } from "../../shared/value-object/StringValueObject";
import { UserNameIsRequiredError } from "./UserIsRequired";
import { UserNameMinLeghtError } from "./UserNameMinLeght";

export class UserName extends StringValueObject {
    constructor(value) { 
        super(value);
        this.ensureIsRequired(value);
        this.ensureLengthIsValidName(value);
        this.ensureIsValidName(value);
    }
    private ensureIsRequired(value) {
        if (typeof value === 'undefined' || value === null) {
            throw new UserNameIsRequiredError(value);
        }
    }
    private ensureLengthIsValidName(value: string) {
        if (value.length <= 6) {
            throw new UserNameMinLeghtError('Minimum 6 carateres');
        }
    }
    private ensureIsValidName(value) {
        if(ExgPattern.isValidName.test(value)) {
            return;
        }
        throw new InvalidArgumentError(`The name is invalid ${value}`);
    }
}