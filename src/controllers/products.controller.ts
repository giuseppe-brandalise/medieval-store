import { Request, Response } from 'express';
import { Product } from '../types/Product';
import productsService from '../services/products.service';

const createProduct = async (req:Request, res:Response) => {
  const { name, price, orderId } = req.body;
  const serviceResponse: Product = await productsService.createProduct({ name, price, orderId });
  res.status(201).json(serviceResponse);
};

export default {
  createProduct,
};