import ApiService from "./api";

class CategoriesService extends ApiService {
  constructor() {
    super();
  }

  // جلب جميع الفئات
  async getCategories() {
    return this.get("/categories");
  }

  // جلب فئة واحدة مع منتجاتها
  async getCategory(id) {
    return this.get(`/categories/${id}`);
  }

  // جلب فئة واحدة فقط
  async getCategoryInfo(id) {
    return this.get(`/categories/${id}`);
  }
}

export default new CategoriesService();
