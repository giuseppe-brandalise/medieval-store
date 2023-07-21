import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middlewares';
import ordersMiddleware from '../middlewares/orders.middleware';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.post(
  '/',
  authMiddleware,
  ordersMiddleware.verifyUserId,
  ordersMiddleware.verifyProductsIds,
  ordersController.createOrder,
);

export default ordersRouter;