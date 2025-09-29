import ApiService from "./api";

class UsersService extends ApiService {
  constructor() {
    super();
  }

  // جلب طلبات المستخدم
  async getUserOrders(name, phone) {
    return this.get("/users/orders", { name, phone });
  }

  // البحث عن مستخدم أو إنشاء مستخدم جديد
  async findOrCreateUser(userData) {
    return this.post("/users/find-or-create", userData);
  }

  // جلب بيانات مستخدم بالمعرف
  async getUserById(id) {
    return this.get(`/users/${id}`);
  }
}

export default new UsersService();
