import jwt from 'jsonwebtoken';

const senhaNaoSecreta = 'senhaNaoSecreta';

type TokenPayload = {
  id: number,
  username: string,
};

const createToken = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, senhaNaoSecreta);
  return token;
};

const verifyToken = (token: string): TokenPayload => {
  const data = jwt.verify(token, senhaNaoSecreta) as TokenPayload; 
  return data; 
};

export default {
  createToken,
  verifyToken,
};