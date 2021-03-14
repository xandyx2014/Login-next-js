import nc from "next-connect";
import { HttpStatusCode } from "../../shared/enum/httpStatusCodes";
import handle from '../../shared/service/handleError';
const handler = handle
  .get(async (req, res) => {
    return res.status(HttpStatusCode.Ok).send("Hello world");
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

