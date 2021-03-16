export class UserIsRequiredError extends Error {
    constructor(value: string) {
        super(`El name is required`);
    }
}