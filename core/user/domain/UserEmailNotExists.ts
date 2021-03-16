export class UserEmailNotExists extends Error{
    constructor() {
        super(`Email is already in use`);
    }
}