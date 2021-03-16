export class ExgPattern {
    static isValidEmail =  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    static isValidPassword =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    static isValidName = /([a-zA-Z])+./;
}