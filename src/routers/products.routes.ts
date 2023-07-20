import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.createProduct);
productsRouter.get('/', productsController.getAll);

export default productsRouter;