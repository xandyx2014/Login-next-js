import { UserLogin } from "../../core/user/application/login/userLogin";
import {LoginUserRequest} from "../../core/user/application/login/userLoginRequest";
import PostgreUserRepository from "../../core/user/infraestructure.persistence/postgresUserRepository";
import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';

const userLogin = new UserLogin(new PostgreUserRepository());
const handler = handle
  .get(async (req, res) => {
    const userRequest: LoginUserRequest = {
      id: '',
      email: '',
      password: ''
    };
    return res.status(HttpStatusCode.Ok).json(userLogin.post(userRequest));
  })
  .post(async (req, res) => {
    return res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });
export default handler;