import { ExgPattern } from "../../../shared/helpers/ExgPattern";
import { InvalidEmailError } from "../../shared/value-object/InvalidEmailError";
import { StringValueObject } from "../../shared/value-object/StringValueObject";
import { UserEmailIsRequiredError } from "./UserEmailIsRequired";

export class UserEmail extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureIsRequired(value);
        this.ensureLengthIsValidEmail(value);
    }
    private ensureIsRequired(value) {
        if (typeof value === 'undefined' || value === null) {
            throw new UserEmailIsRequiredError(`The email is required`);
        }
    }
    private ensureLengthIsValidEmail(value: string): void {
        if (!ExgPattern.isValidEmail.test(value)) {
            console.log(!ExgPattern.isValidEmail.test(value));
            throw new InvalidEmailError(`the email ${value} not is email valid`);
        }
    }
}