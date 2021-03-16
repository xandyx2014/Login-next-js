export class UserEmailAlreadyExists extends Error{
    constructor() {
        super(`Email is already in use`);
    }
}