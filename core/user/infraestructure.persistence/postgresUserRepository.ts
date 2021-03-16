import { User } from "../domain/User";
import UserRepository from "../domain/userRepository";
import prisma from '../../../lib/prisma';
export default class PostgreUserRepository implements UserRepository {
    public async save(user: User) {
        const userPrimitives = user.toPrimitives();
        const userDB = await prisma.user.create({
            data: {
                id: userPrimitives.id,
                name: userPrimitives.name,
                password: user.toPassword(),
                email: userPrimitives.email,
            }
        });
        return { ...userDB, password: '...' };
    }
}