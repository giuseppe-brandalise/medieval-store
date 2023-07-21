import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginController from '../../../src/controllers/login.controller';
import loginService from '../../../src/services/login.service';
import loginMocks from '../../mocks/login.mocks';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should denied the login if theres a wrong information', async () => {
    req.body = loginMocks.login;
    sinon.stub(loginService, 'doLogin').resolves('invalido');
    await loginController.doLogin(req, res);
    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({ message: 'Username or password invalid' });
  });

  it('should return a token is the login works', async () => {
    req.body = loginMocks.login;
    sinon.stub(loginService, 'doLogin').resolves(loginMocks.token);
    await loginController.doLogin(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ token: loginMocks.token });
  });
});
