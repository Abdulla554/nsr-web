import ApiService from "./api";

class BannersService extends ApiService {
  constructor() {
    super();
  }

  // جلب جميع الإعلانات
  async getBanners() {
    return this.get("/banners");
  }

  // جلب الإعلانات النشطة فقط
  async getActiveBanners() {
    return this.get("/banners/active");
  }

  // جلب إعلان واحد
  async getBanner(id) {
    return this.get(`/banners/${id}`);
  }
}

export default new BannersService();
