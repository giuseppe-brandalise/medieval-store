import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (req:Request, res:Response) => {
  const serviceResponse = await ordersService.getAll();
  res.status(200).json(serviceResponse);
};

const createOrder = async (req:Request, res:Response) => {
  const { userId, productIds } = req.body;
  const serviceResponse = await ordersService.createOrder(userId, productIds);
  return res.status(201).json(serviceResponse);
};

export default {
  getAll,
  createOrder,
};