import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsController from '../../../src/controllers/products.controller';
import productsService from '../../../src/services/products.service';
import productsMock from '../../mocks/products.mock';
chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('should return the new product when given all the informations', async () => {
    req.body = productsMock.newProduct;
    sinon.stub(productsService, 'createProduct').resolves(productsMock.product);

    await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsMock.product);
  })

});
