import { Product } from '../../src/types/Product';
import { ProductInputtableTypes } from '../../src/database/models/product.model';

const newProduct: ProductInputtableTypes = {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
};

const product: Product = {
  id: 1,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
}

export default {
  newProduct,
  product,
};