export class UserNameIsRequiredError extends Error {
    constructor(value: string) {
        super(`El name is required`);
    }
}