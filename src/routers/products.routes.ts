import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productsMiddlewares from '../middlewares/products.middlewares';

const productsRouter = Router();

productsRouter.post(
  '/',
  productsMiddlewares.verifyName,
  productsMiddlewares.verifyPrice,
  productsController.createProduct,
);
productsRouter.get('/', productsController.getAll);

export default productsRouter;