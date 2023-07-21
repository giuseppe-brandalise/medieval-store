import { expect } from 'chai';
import sinon from 'sinon';
import loginService from '../../../src/services/login.service';
import UserModel from '../../../src/database/models/user.model';
import loginMocks from '../../mocks/login.mocks';
import JWTGenerator from '../../../src/utils/JWTGenerator';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should return "invalido" if the username is wrong', async () => {
    sinon.stub(UserModel, 'findOne').resolves();
    const modelResponse = await loginService.doLogin('Agar.io', 'terrível');
    expect(modelResponse).to.deep.eq('invalido');
  });
  it('should return "invalido" if the password is wrong', async () => {
    const modelUser = UserModel.build(loginMocks.user)
    sinon.stub(UserModel, 'findOne').resolves(modelUser);
    const modelResponse = await loginService.doLogin('Hagar', 'horrível');
    expect(modelResponse).to.deep.eq('invalido');
  });
  it('should return a token in case of sucess', async () => {
    const modelUser = UserModel.build(loginMocks.user)
    sinon.stub(UserModel, 'findOne').resolves(modelUser);
    sinon.stub(JWTGenerator, 'createToken').resolves(loginMocks.token);
    const modelResponse = await loginService.doLogin('Hagar', 'terrível');
    expect(modelResponse).to.deep.eq(loginMocks.token);
  });
});
