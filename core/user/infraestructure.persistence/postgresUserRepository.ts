import {UserRegisterRequest} from "../application/register/userRegisterRequest";
import { User } from "../domain/User";
import UserRepository from "../domain/userRepository";

export default class PostgreUserRepository implements UserRepository {
    public save(user: User) {
        return { ...user.toPrimitives(), password: user.toPassword()};
    }
}