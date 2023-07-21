import { Request, Response } from 'express';
import loginService from '../services/login.service';

const doLogin = async (req:Request, res:Response) => {
  const { username, password } = req.body;
  const serviceResponse = await loginService.doLogin(username, password);
  if (serviceResponse === 'invalido') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  res.status(200).json({ token: serviceResponse });
};

export default {
  doLogin,
};