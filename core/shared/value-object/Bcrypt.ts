import bcrypt  from 'bcryptjs';
import { InvalidArgumentError } from './InvalidArgumentError';

export class Bcrypt {
    readonly value: string;
    constructor(value) {
      this.value = this.hashSync(value); 
    }
    public hashSync(value: string) {
      const salt = bcrypt.genSaltSync(10);
      try {
        return bcrypt.hashSync(value, salt);
      } catch (error) {
        throw new InvalidArgumentError('Error hash password');
      }
      
    }
    compareSync(value: string, hash: string) {
      return bcrypt.compareSync(value, hash);
    }
    toString(): string {      
        return this.value;
      }
}