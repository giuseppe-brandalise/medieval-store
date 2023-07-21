import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const productsRouter = Router();

productsRouter.get('/', ordersController.getAll);

export default productsRouter;