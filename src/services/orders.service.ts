import sequelize, { Op } from 'sequelize';
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
  return modelResponse;
};

const createOrder = async (userId: number, productIds: number[]): Promise<unknown> => {
  const { dataValues } = await OrderModel.create({ userId });
  await ProductModel.update(
    { orderId: dataValues.id },
    { where: { 
      id: { [Op.in]: productIds }, 
    },
    },
  );
  return {
    userId: dataValues.userId,
    productIds,
  };
};

export default {
  getAll,
  createOrder,
};