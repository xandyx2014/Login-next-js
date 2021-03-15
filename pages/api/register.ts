import { Uuid } from "../../core/shared/value-object/Uuid";
import { UserRegister } from "../../core/user/application/userRegister";
import { UserRegisterRequest } from "../../core/user/application/userRegisterRequest";
import PostgreUserRepository from "../../core/user/infraestructure.persistence/postgresUserRepository";
import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';

const userRegister = new UserRegister(new PostgreUserRepository());
const handler = handle
  .get(async (req, res) => {
    const userRequest: UserRegisterRequest = {
      id: Uuid.random().value,
      name: 'Andy jesus macias gomez',
      email: 'xandyx2014@gmail.com',
      password: ''
    };
    return res.status(HttpStatusCode.Ok).json(userRegister.post(userRequest));
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