import { ExgPattern } from "../../../shared/helpers/ExgPattern";
import { InvalidEmailError } from "../../shared/value-object/InvalidEmailError";
import { StringValueObject } from "../../shared/value-object/StringValueObject";

export class UserEmail extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureLengthIsValidEmail(value);
    }
    private ensureLengthIsValidEmail(value: string): void {
        // console.log(ExgPattern.isValidEmail.test(value), value);
        if (!ExgPattern.isValidEmail.test(value)) {
            console.log(!ExgPattern.isValidEmail.test(value));
            throw new InvalidEmailError(`the email ${value} not is email valid`);
        }
        
    }
}