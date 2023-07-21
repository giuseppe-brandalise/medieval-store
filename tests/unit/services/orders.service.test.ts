import { expect } from 'chai';
import sinon from 'sinon';
import ordersService from '../../../src/services/orders.service';
import OrderModel from '../../../src/database/models/order.model';
import ordersMoks from '../../mocks/orders.moks';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return a list with all orders', async () => {
    const modelReturn = OrderModel.build(ordersMoks.order)
    sinon.stub(OrderModel, 'findAll').resolves([modelReturn]);
    
    const serviceResponse = await ordersService.getAll();

    expect(serviceResponse).to.deep.eq([modelReturn]);
  });
});
