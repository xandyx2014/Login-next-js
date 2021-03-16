import { UserLogin } from "../../core/user/application/login/userLogin";
import {LoginUserRequest} from "../../core/user/application/login/userLoginRequest";
import PostgreUserRepository from "../../core/user/infraestructure.persistence/PostgresUserRepository";
import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';

const userLogin = new UserLogin(new PostgreUserRepository());
const handler = handle
  .post(async (req, res) => {
    const userRequest: LoginUserRequest = {
      id: '',
      email: '',
      password: ''
    };
    return res.status(HttpStatusCode.Ok).json(userLogin.post(userRequest));
  });
export default handler;