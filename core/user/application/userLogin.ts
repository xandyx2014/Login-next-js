import UserRepository from "../domain/userRepository";
import { LoginUserRequest } from "./userLoginRequest";

export class UserLogin {
    
    constructor(private repository: UserRepository){}
    public post(request: LoginUserRequest) {
        // Llama al modelo al metodo create
        // lo guarda en el repository
        // return this.repository.save();
    }
}