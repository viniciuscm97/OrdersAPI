import { extractOrdersInfo, extractSalesInfo } from "../helpers/OrdersHelper";
import Order from "../models/Order";

class DashboardsController {

  /**
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  async ordersByUser(req, res) {
    try {
      const orders = await Order.find();

      if (!orders) {
        throw 'order not found';
      }
      const orderInfo = extractOrdersInfo(orders);
      const salesInfo = extractSalesInfo(orders);

      res.status(200).json({
        orders_total: orderInfo.total,
        orders_count: orderInfo.amount,
        sales_total: salesInfo.total,
        sales_count: salesInfo.amount,
        average_ticket: salesInfo.average,
        orders: orders,
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: 'Ops! Ocorreu um erro em nosso servidor. Por favor, tente novamente ou contate o suporte.'
      });
    }
  }
    
}
export default new DashboardsController();