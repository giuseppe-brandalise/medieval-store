import sequelize from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const getAll = async (): Promise<OrderSequelizeModel[]> => {
  const modelResponse = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: [] },
    attributes: [
      'id',
      'userId',
      [sequelize.fn('JSON_ARRAYAGG', sequelize.col('productIds.id')), 'productIds'],
    ],
    group: ['Order.id'],
    raw: true,
  });
  console.log('modelResponse', modelResponse);
  return modelResponse;
};

export default {
  getAll,
};