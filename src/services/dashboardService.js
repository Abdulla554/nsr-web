import ApiService from "./api";

class DashboardService extends ApiService {
  constructor() {
    super();
  }

  // جلب الإحصائيات العامة
  async getStats() {
    return this.get("/dashboard/stats");
  }

  // جلب إحصائيات الزوار
  async getVisitorsStats() {
    return this.get("/dashboard/visitors");
  }

  // زيادة عدد الزوار
  async incrementVisitors() {
    return this.post("/dashboard/visitors/increment");
  }

  // جلب إحصائيات المبيعات
  async getSalesStats(period = "month") {
    return this.get(`/dashboard/sales?period=${period}`);
  }

  // جلب إحصائيات المنتجات
  async getProductsStats() {
    return this.get("/dashboard/products");
  }
}

export default new DashboardService();
