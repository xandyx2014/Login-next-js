import type { NextApiRequest, NextApiResponse } from 'next';
import nc, { NextConnect } from "next-connect";
import { NotAuthorizedError } from '../../core/shared/value-object/NotAuthorizedError';
const handleError = nc<NextApiRequest,  NextApiResponse>({
  onError(error, req, res) {
    
    if (error instanceof NotAuthorizedError) {
      res.status(403).json({message: error.message})
    }
    res.status(500).json({message: error.message})
  },
})
export default handleError;