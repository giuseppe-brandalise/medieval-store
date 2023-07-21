import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ordersController from '../../../src/controllers/orders.controller';
import ordersService from '../../../src/services/orders.service';
import OrderModel from '../../../src/database/models/order.model';
import ordersMoks from '../../mocks/orders.moks';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('should return a list with all orders', async () => {
    const modelReturn = OrderModel.build(ordersMoks.order)
    sinon.stub(ordersService, 'getAll').resolves([modelReturn]);
    
    await ordersController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([modelReturn]);
  });
  it('should return the new order when given all the informations', async () => {
    req.body = ordersMoks.newOrder;
    sinon.stub(ordersService, 'createOrder').resolves(ordersMoks.newOrderInfo);

    await ordersController.createOrder(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(ordersMoks.newOrderInfo);
  });
});
