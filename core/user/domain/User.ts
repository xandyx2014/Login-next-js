import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import UserPassword from "./UserPassword";

export class User {
    readonly id: UserId;
    readonly email: UserEmail;
    readonly name: UserName;
    readonly password: UserPassword;
    private constructor(id: UserId, name: UserName, email: UserEmail, password: UserPassword) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static create(id: UserId, name: UserName, email: UserEmail, password: UserPassword): User {
        const user = new User(id, name, email, password);
        return user;
    }
    toPrimitives() {
        return {
          id: this.id.value,
          name: this.name.value,
          email: this.email.value
        };
    }
    toPassword() {
      return this.password.value;
    }
}