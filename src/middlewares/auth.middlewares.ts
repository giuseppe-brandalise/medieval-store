import { NextFunction, Request, Response } from 'express';
import JWTGenerator from '../utils/JWTGenerator';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const data = authorization.split(' ');
  if (!data[1]) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  try {
    res.locals = JWTGenerator.verifyToken(data[1]);
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default authMiddleware;