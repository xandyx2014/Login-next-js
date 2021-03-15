import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';
let handler = handle
  .get(async (req, res) => {
    return res.status(HttpStatusCode.Ok).send("Hello world");
  })
handler = handle.post(async (req, res) => {
  return res.status(HttpStatusCode.Ok).send("Hello world POST");
})
export default handler;

