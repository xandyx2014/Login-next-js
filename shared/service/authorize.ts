import { JsonWebToken } from "../../core/shared/value-object/jwt";

export const AuthorizationMiddleware = (req, res, next) => {
    const token = req.headers['authorization'] ?? '';
    const user = JsonWebToken.verify(token);
    req['auth'] = user;
    next();
}