import { User } from "./User";
import { UserEmail } from "./UserEmail";


export default interface UserRepository {
    save(user: User);
    searchByEmail(email: UserEmail);
}