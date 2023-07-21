import express from 'express';
import productsRouter from './routers/products.routes';
import ordersRouter from './routers/orders.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
