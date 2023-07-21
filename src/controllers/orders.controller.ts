import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (req:Request, res:Response) => {
  const serviceResponse = await ordersService.getAll();
  res.status(200).json(serviceResponse);
};

export default {
  getAll,
};