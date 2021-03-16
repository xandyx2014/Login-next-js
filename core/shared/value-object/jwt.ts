import Jwt from 'jsonwebtoken';
import { InvalidArgumentError } from './InvalidArgumentError';
 export class JsonWebToken {
    static sign(value) {
        try {
            return Jwt.sign(value, process.env.customKey)
        } catch (error) {
            throw new InvalidArgumentError('Password Incorrect');
        }
        
    }
} 