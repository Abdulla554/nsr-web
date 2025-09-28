import ApiService from "./api";

class OrdersService extends ApiService {
  constructor() {
    super();
  }

  // إنشاء طلب جديد
  async createOrder(orderData) {
    const { customerName, customerEmail, customerPhone, items } = orderData;

    const orderPayload = {
      customerName,
      customerEmail,
      customerPhone,
      items: items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    return this.post("/orders", orderPayload);
  }

  // جلب طلب واحد
  async getOrder(id) {
    return this.get(`/orders/${id}`);
  }

  // تحديث حالة الطلب
  async updateOrderStatus(id, status) {
    return this.patch(`/orders/${id}`, { status });
  }

  // جلب جميع الطلبات (للمدير)
  async getAllOrders(params = {}) {
    return this.get("/orders", params);
  }

  // حذف طلب
  async deleteOrder(id) {
    return this.delete(`/orders/${id}`);
  }
}

export default new OrdersService();
