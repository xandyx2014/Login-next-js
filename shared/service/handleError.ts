import type { NextApiRequest, NextApiResponse } from 'next';
import nc, { NextConnect } from "next-connect";
const handleError = nc<NextApiRequest,  NextApiResponse>({
  onError(error, req, res) {
    res.status(500).json({message: error.message})
  },
})
export default handleError;