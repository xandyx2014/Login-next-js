import { Uuid } from "../../core/shared/value-object/Uuid";
import { UserRegister } from "../../core/user/application/register/userRegister";
import { UserRegisterRequest } from "../../core/user/application/register/userRegisterRequest";
import PostgreUserRepository from "../../core/user/infraestructure.persistence/PostgresUserRepository";
import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';

const userRegister = new UserRegister(new PostgreUserRepository());
const handler = handle
  .get(async (req, res) => {
    
  })
  .post(async (req, res) => {
    const userRequest: UserRegisterRequest = {
      id: Uuid.random().value,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    const user = await userRegister.post(userRequest);
    return res.status(HttpStatusCode.Ok).json(user);
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });
export default handler;