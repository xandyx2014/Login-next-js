import { ExgPattern } from "../../../shared/helpers/ExgPattern";
import { Bcrypt } from "../../shared/value-object/Bcrypt";
import { InvalidEmailError } from "../../shared/value-object/InvalidEmailError";
import { UserPasswordIsRequired } from "./UserPasswordRequired";

export default class UserPassword extends Bcrypt {
    constructor(value) { 
        super(value);
        this.ensureIsRequired(value);
        this.ensureIsValidPassword(value);
    }
    private ensureIsRequired(value) {
        if (typeof value === 'undefined' || value === null) {
            throw new UserPasswordIsRequired(value);
        }
    }
    ensureIsValidPassword(value) {
        if (!ExgPattern.isValidPassword.test(value)) {
            console.log(!ExgPattern.isValidPassword.test(value));
            throw new InvalidEmailError(`The password not is valid`);
        }
    }
}