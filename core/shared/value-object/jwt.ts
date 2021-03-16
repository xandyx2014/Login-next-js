import Jwt from 'jsonwebtoken';
 export class JsonWebToken {
    sign(value) {
        return Jwt.sign(value, process.env.customKey)
    }
} 