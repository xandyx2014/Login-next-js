import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';
import prisma from '../../lib/prisma';
import { AuthorizationMiddleware } from "../../shared/service/authorize";


let handler = handle
  .use(AuthorizationMiddleware)
  .get(async (req, res) => {
    
    const allUsers = await prisma.user.findMany();
    return res.status(HttpStatusCode.Ok).json(allUsers);
  })
handler = handle.post(async (req, res) => {
  return res.status(HttpStatusCode.Ok).send("Hello world POST");
})
export default handler;

