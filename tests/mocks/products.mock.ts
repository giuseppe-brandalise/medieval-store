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

const allProducts = [
  {
    id: 1,
    name: 'Pedra Filosofal',
    price: '20 gold',
    orderId: null
  },
  {
    id: 2,
    name: 'Lança do Destino',
    price: '100 diamond',
    orderId: 1
  }
]

export default {
  newProduct,
  product,
  allProducts,
};