import ApiService from "./api";

class ProductsService extends ApiService {
  constructor() {
    super();
  }

  // جلب جميع المنتجات مع الفلترة والبحث
  async getProducts(params = {}) {
    const {
      page = 1,
      limit = 10,
      search = "",
      categoryId = "",
      brandId = "",
      minPrice = "",
      maxPrice = "",
      isNew = "",
      isBestSeller = "",
      isFeatured = "",
      sortBy = "",
      sortOrder = "",
    } = params;

    const queryParams = {
      page,
      limit,
      ...(search && { search }),
      ...(categoryId && { categoryId }),
      ...(brandId && { brandId }),
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
      ...(isNew && { isNew }),
      ...(isBestSeller && { isBestSeller }),
      ...(isFeatured && { isFeatured }),
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
    };

    return this.get("/products", queryParams);
  }

  // جلب منتج واحد
  async getProduct(id) {
    return this.get(`/products/${id}`);
  }

  // جلب المنتجات المميزة
  async getFeaturedProducts(limit = 8) {
    return this.getProducts({ isFeatured: true, limit });
  }

  // جلب المنتجات الجديدة
  async getNewProducts(limit = 6) {
    return this.getProducts({ isNew: true, limit });
  }

  // جلب الأكثر مبيعاً
  async getBestSellerProducts(limit = 6) {
    return this.getProducts({ isBestSeller: true, limit });
  }

  // البحث في المنتجات
  async searchProducts(searchTerm, params = {}) {
    return this.getProducts({ search: searchTerm, ...params });
  }

  // فلترة المنتجات بالأسعار
  async filterProductsByPrice(minPrice, maxPrice, params = {}) {
    return this.getProducts({ minPrice, maxPrice, ...params });
  }

  // فلترة المنتجات بالفئة
  async filterProductsByCategory(categoryId, params = {}) {
    return this.getProducts({ categoryId, ...params });
  }

  // فلترة المنتجات بالماركة
  async filterProductsByBrand(brandId, params = {}) {
    return this.getProducts({ brandId, ...params });
  }

  // ترتيب المنتجات
  async sortProducts(sortBy, sortOrder = "asc", params = {}) {
    return this.getProducts({ sortBy, sortOrder, ...params });
  }

  // جلب منتجات مشابهة (الطريقة القديمة - البحث في الفئة)
  async getSimilarProducts(categoryId, limit = 4, excludeId = null) {
    const params = { categoryId, limit };
    if (excludeId) {
      params.excludeId = excludeId;
    }
    return this.getProducts(params);
  }

  // جلب المنتجات المتشابهة (الطريقة الجديدة - استخدام الـ endpoint المخصص)
  async getRelatedProducts(productId, limit = 4) {
    return this.get(`/products/${productId}/related`, { limit });
  }
}

export default new ProductsService();
