import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/products.service';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('should return the new product when given all the informations', async () => {
    const modelReturn = ProductModel.build(productsMock.newProduct);
    sinon.stub(ProductModel, 'create').resolves(modelReturn);

    const serviceResponse = await productsService.createProduct(productsMock.newProduct);

    expect(serviceResponse).to.deep.eq(productsMock.product);
  })
});
