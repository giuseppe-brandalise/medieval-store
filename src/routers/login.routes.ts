import { Router } from 'express';
import loginMiddlewares from '../middlewares/login.middlewares';
import loginController from '../controllers/login.controller';

const productsRouter = Router();

productsRouter.post('/', loginMiddlewares.verifyLogin, loginController.doLogin);

export default productsRouter;