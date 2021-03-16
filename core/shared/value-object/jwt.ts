import Jwt from 'jsonwebtoken';
import { InvalidArgumentError } from './InvalidArgumentError';
import { NotAuthorizedError } from './NotAuthorizedError';
 export class JsonWebToken {
    static sign(value) {
        try {
            return Jwt.sign(value, process.env.customKey)
        } catch (error) {
            throw new InvalidArgumentError('Not authorization token');
        }
        
    }
    static verify(value) {
        try {
            return Jwt.verify(value, process.env.customKey)
        } catch (error) {
            throw new NotAuthorizedError('Not authorized');
        }
    }
} 