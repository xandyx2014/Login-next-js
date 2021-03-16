import { User } from "../domain/User";
import UserRepository from "../domain/userRepository";
import prisma from '../../../lib/prisma';
import { UserEmail } from "../domain/UserEmail";
export default class PostgreUserRepository implements UserRepository {
    public async save(user: User) {
        const userPrimitives = user.toPrimitives();
        const userDB = await prisma.user.create({
            data: {
                id: userPrimitives.id,
                name: userPrimitives.name,
                password: user.toPassword(),
                email: userPrimitives.email,
            },
            select: {
                id: true,
                name: true,
                email: true,    
            }
        });
        return { ...userDB };
    }
    public async searchByEmail(email: UserEmail) {
        const emailValue = email.value;
        const userDB = await prisma.user.findFirst({
            where: {
                email: emailValue
            },
        });
        return userDB;
    }
}