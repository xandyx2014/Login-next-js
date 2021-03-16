export class UserPasswordIsRequired extends Error {
    constructor(value) {
        super(`The passowrd is Required`);
    }
}