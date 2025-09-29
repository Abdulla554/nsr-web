import ApiService from "./api";

class VisitorsService extends ApiService {
  constructor() {
    super();
  }

  // زيادة عدد الزوار بواحد
  async incrementVisitors() {
    console.log(
      "🚀 Sending visitor increment request to:",
      "/dashboard/visitors/increment"
    );
    const response = await this.post("/dashboard/visitors/increment");
    console.log("✅ Visitor increment response:", response);
    return response;
  }

  // جلب إحصائيات الزوار
  async getVisitorsStats() {
    console.log("📊 Getting visitors stats from:", "/dashboard/visitors");
    const response = await this.get("/dashboard/visitors");
    console.log("✅ Visitors stats response:", response);
    return response;
  }
}

export default new VisitorsService();
