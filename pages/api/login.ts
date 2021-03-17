import { JsonWebToken } from "../../core/shared/value-object/jwt";
import { UserLogin } from "../../core/user/application/login/userLogin";
import {LoginUserRequest} from "../../core/user/application/login/userLoginRequest";
import PostgreUserRepository from "../../core/user/infraestructure_persistence/PostgresUserRepository";
import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import { AuthorizationMiddleware } from "../../shared/service/authorize";
import handle from '../../shared/service/handleError';

const userLogin = new UserLogin(new PostgreUserRepository());
const handler = handle
  .post(async (req, res) => {
    const userRequest: LoginUserRequest = {
      email: req.body.email,
      password: req.body.password
    };
    const user = await userLogin.post(userRequest);
    return res.status(HttpStatusCode.Ok).json(user);
  });
export default handler;