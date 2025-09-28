import ApiService from "./api";

class BrandsService extends ApiService {
  constructor() {
    super();
  }

  // جلب جميع الماركات
  async getBrands() {
    return this.get("/brands");
  }

  // جلب ماركة واحدة مع منتجاتها
  async getBrand(id) {
    return this.get(`/brands/${id}`);
  }

  // جلب ماركة واحدة فقط
  async getBrandInfo(id) {
    return this.get(`/brands/${id}`);
  }
}

export default new BrandsService();
