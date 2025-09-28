# نظام إدارة APIs

هذا النظام يوفر طريقة منظمة وموحدة لإدارة جميع طلبات API في التطبيق.

## البنية

```
src/
├── services/
│   ├── api.js              # الكلاس الأساسي لـ API
│   ├── productsService.js  # خدمة المنتجات
│   ├── categoriesService.js # خدمة الفئات
│   ├── brandsService.js     # خدمة الماركات
│   ├── bannersService.js    # خدمة الإعلانات
│   ├── ordersService.js     # خدمة الطلبات
│   ├── dashboardService.js  # خدمة لوحة التحكم
│   └── index.js            # تصدير جميع الخدمات
├── hooks/
│   ├── useProducts.js      # hooks للمنتجات
│   ├── useCategories.js    # hooks للفئات
│   ├── useBrands.js        # hooks للماركات
│   ├── useBanners.js       # hooks للإعلانات
│   ├── useOrders.js        # hooks للطلبات
│   ├── useDashboard.js      # hooks للوحة التحكم
│   └── index.js            # تصدير جميع الـ hooks
└── components/
    ├── LoadingSpinner.jsx  # مكون التحميل
    ├── ErrorBoundary.jsx   # مكون معالجة الأخطاء
    └── EmptyState.jsx      # مكون الحالة الفارغة
```

## الاستخدام

### 1. استخدام الخدمات مباشرة

```javascript
import { productsService } from "../services";

// جلب جميع المنتجات
const products = await productsService.getProducts({
  page: 1,
  limit: 10,
  search: "MacBook",
});

// جلب منتج واحد
const product = await productsService.getProduct("prod_123");
```

### 2. استخدام الـ Hooks (الأفضل)

```javascript
import { useProducts, useCategories } from "../hooks";

function ProductsPage() {
  const {
    data: products,
    isLoading,
    error,
  } = useProducts({
    page: 1,
    limit: 12,
    categoryId: "cat_123",
  });

  const { data: categories } = useCategories();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorBoundary error={error} />;
  if (!products?.data?.length) return <EmptyState type="products" />;

  return (
    <div>
      {products.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## الخدمات المتاحة

### ProductsService

- `getProducts(params)` - جلب المنتجات مع الفلترة
- `getProduct(id)` - جلب منتج واحد
- `getFeaturedProducts(limit)` - المنتجات المميزة
- `getNewProducts(limit)` - المنتجات الجديدة
- `getBestSellerProducts(limit)` - الأكثر مبيعاً
- `searchProducts(term, params)` - البحث
- `filterProductsByPrice(min, max, params)` - فلترة بالأسعار
- `filterProductsByCategory(id, params)` - فلترة بالفئة
- `filterProductsByBrand(id, params)` - فلترة بالماركة
- `sortProducts(by, order, params)` - ترتيب المنتجات
- `getSimilarProducts(categoryId, limit, excludeId)` - منتجات مشابهة

### CategoriesService

- `getCategories()` - جلب جميع الفئات
- `getCategory(id)` - جلب فئة واحدة

### BrandsService

- `getBrands()` - جلب جميع الماركات
- `getBrand(id)` - جلب ماركة واحدة

### BannersService

- `getBanners()` - جلب جميع الإعلانات
- `getActiveBanners()` - الإعلانات النشطة فقط
- `getBanner(id)` - جلب إعلان واحد

### OrdersService

- `createOrder(orderData)` - إنشاء طلب جديد
- `getOrder(id)` - جلب طلب واحد
- `updateOrderStatus(id, status)` - تحديث حالة الطلب
- `getAllOrders(params)` - جلب جميع الطلبات
- `deleteOrder(id)` - حذف طلب

### DashboardService

- `getStats()` - الإحصائيات العامة
- `getVisitorsStats()` - إحصائيات الزوار
- `incrementVisitors()` - زيادة عدد الزوار
- `getSalesStats(period)` - إحصائيات المبيعات
- `getProductsStats()` - إحصائيات المنتجات

## الـ Hooks المتاحة

### useProducts

```javascript
const { data, isLoading, error } = useProducts({
  page: 1,
  limit: 10,
  search: "MacBook",
  categoryId: "cat_123",
  brandId: "brand_123",
  minPrice: 1000,
  maxPrice: 5000,
  isNew: true,
  isBestSeller: true,
  isFeatured: true,
  sortBy: "price",
  sortOrder: "asc",
});
```

### useProduct

```javascript
const { data: product, isLoading, error } = useProduct("prod_123");
```

### useFeaturedProducts

```javascript
const { data: featured } = useFeaturedProducts(8);
```

### useNewProducts

```javascript
const { data: newProducts } = useNewProducts(6);
```

### useBestSellerProducts

```javascript
const { data: bestSellers } = useBestSellerProducts(6);
```

### useSearchProducts

```javascript
const { data: searchResults } = useSearchProducts("MacBook", {
  page: 1,
  limit: 12,
});
```

### useSimilarProducts

```javascript
const { data: similar } = useSimilarProducts("cat_123", 4, "prod_123");
```

## معالجة الأخطاء

النظام يتضمن معالجة شاملة للأخطاء:

1. **Loading States** - حالات التحميل
2. **Error Handling** - معالجة الأخطاء
3. **Empty States** - الحالات الفارغة
4. **Retry Logic** - إعادة المحاولة
5. **Fallback Data** - البيانات الاحتياطية

## المميزات

- ✅ **منظم وموحد** - بنية واضحة ومنطقية
- ✅ **Type Safe** - دعم TypeScript
- ✅ **Caching** - تخزين مؤقت مع React Query
- ✅ **Error Handling** - معالجة شاملة للأخطاء
- ✅ **Loading States** - حالات التحميل
- ✅ **Retry Logic** - إعادة المحاولة التلقائية
- ✅ **Fallback Data** - بيانات احتياطية
- ✅ **Performance** - أداء محسن
- ✅ **Maintainable** - سهولة الصيانة
- ✅ **Scalable** - قابل للتوسع
