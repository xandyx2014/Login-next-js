import { JsonWebToken } from "../../../shared/value-object/jwt";
import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserInvalidCredentials } from "../../domain/UserInvalidCredentials";
import { UserName } from "../../domain/UserName";
import UserPassword from "../../domain/UserPassword";
import UserRepository from "../../domain/userRepository";
import { LoginUserRequest } from "./userLoginRequest";

export class UserLogin {
    
    constructor(private repository: UserRepository){}
    public async post(request: LoginUserRequest) {
        const userEmail = new UserEmail(request.email);
        const userPassword= new UserPassword(request.password);
        const userFind = await this.repository.searchByEmail(userEmail);
        if (!userFind) {
            throw new UserInvalidCredentials();
        }
        const bcrypt = userPassword.compareSync(request.password, userFind.password );
        if (!bcrypt) {
            throw new UserInvalidCredentials();
        }
        const user = User.createToLogin(new UserId(userFind.id), userEmail, new UserName(userFind.name));
        const token = JsonWebToken.sign(user);
        return {
            id: userFind.id,
            name: userFind.name,
            email: userFind.email,
            token
        };
    }
}