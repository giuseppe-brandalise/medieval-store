import { Product } from '../types/Product';
import ProductModel, 
{ ProductInputtableTypes, ProductSequelizeModel }
  from '../database/models/product.model';

const createProduct = async (product: ProductInputtableTypes): Promise<Product> => {
  const { dataValues } = await ProductModel.create(product);
  return dataValues;
};

const getAll = async (): Promise<ProductSequelizeModel[]> => {
  const modelResponse = await ProductModel.findAll();
  return modelResponse;
};

export default {
  createProduct,
  getAll,
};