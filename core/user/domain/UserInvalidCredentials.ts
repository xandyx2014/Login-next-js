export class UserInvalidCredentials extends Error {
    constructor() {
        super(`Invalid credentials`);
    }
}