import { Product } from '../types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const createProduct = async (product: ProductInputtableTypes): Promise<Product> => {
  const { dataValues } = await ProductModel.create(product);
  return dataValues;
};

export default {
  createProduct,
};