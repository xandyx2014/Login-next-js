import { Uuid } from "../../shared/value-object/Uuid";

export class UserId  extends Uuid {
    constructor(value: string) {
        super(value);
    }
}