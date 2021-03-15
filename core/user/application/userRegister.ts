import UserRepository from "../domain/userRepository";
import { UserRegisterRequest } from "./userRegisterRequest";
import { User } from '../domain/User';
import { UserId } from "../domain/UserId";
import { UserName } from "../domain/UserName";
import { UserEmail } from "../domain/UserEmail";
import UserPassword from "../domain/UserPassword";

export class UserRegister {
    constructor(private repository: UserRepository){}
    public post(request: UserRegisterRequest) {
        const id: UserId = new UserId(request.id);
        const name: UserName = new UserName(request.name);
        const email: UserEmail = new UserEmail(request.email);
        const password: UserPassword = new UserPassword(request.password);
        const user = User.create(id, name, email, password);
        return this.repository.save(user);
    }
}