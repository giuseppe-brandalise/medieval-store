import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import JWTGenerator from '../utils/JWTGenerator';

const doLogin = async (username: string, password: string): Promise<string> => {
  const modelResponse = await UserModel.findOne({ where: { username } });
  if (!modelResponse) return 'invalido';
  const verifyPassword = bcrypt.compareSync(password, modelResponse.dataValues.password);
  if (!verifyPassword) return 'invalido';
  const payload = {
    id: modelResponse.dataValues.id,
    username,
  };
  const token = JWTGenerator.createToken(payload);
  return token;
};

export default {
  doLogin,
};