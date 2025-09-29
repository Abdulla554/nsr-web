import ApiService from "./api";

class OrdersService extends ApiService {
  constructor() {
    super();
  }

  // إنشاء طلب جديد
  async createOrder(orderData) {
    return this.post("/orders", orderData);
  }

  // جلب جميع الطلبات
  async getAllOrders() {
    return this.get("/orders");
  }

  // جلب الطلبات حسب الحالة
  async getOrdersByStatus(status) {
    return this.get("/orders", { status });
  }

  // جلب طلب واحد
  async getOrderById(id) {
    return this.get(`/orders/${id}`);
  }

  // تحديث حالة الطلب
  async updateOrderStatus(id, status) {
    return this.patch(`/orders/${id}`, { status });
  }

  // حذف طلب
  async deleteOrder(id) {
    return this.delete(`/orders/${id}`);
  }
}

export default new OrdersService();
