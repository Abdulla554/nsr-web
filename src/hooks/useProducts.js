import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productsService } from "../services";

// Hook لجلب جميع المنتجات
export const useProducts = (params = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productsService.getProducts(params),
    staleTime: 5 * 60 * 1000, // 5 دقائق
  });
};

// Hook لجلب منتج واحد
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productsService.getProduct(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 دقائق
  });
};

// Hook لجلب المنتجات المميزة
export const useFeaturedProducts = (limit = 8) => {
  return useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: () => productsService.getFeaturedProducts(limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook لجلب المنتجات الجديدة
export const useNewProducts = (limit = 6) => {
  return useQuery({
    queryKey: ["products", "new", limit],
    queryFn: () => productsService.getNewProducts(limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook لجلب الأكثر مبيعاً
export const useBestSellerProducts = (limit = 6) => {
  return useQuery({
    queryKey: ["products", "best-seller", limit],
    queryFn: () => productsService.getBestSellerProducts(limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook للبحث في المنتجات
export const useSearchProducts = (searchTerm, params = {}) => {
  return useQuery({
    queryKey: ["products", "search", searchTerm, params],
    queryFn: () => productsService.searchProducts(searchTerm, params),
    enabled: !!searchTerm,
    staleTime: 2 * 60 * 1000, // 2 دقيقة
  });
};

// Hook لجلب المنتجات المشابهة
export const useSimilarProducts = (categoryId, limit = 4, excludeId = null) => {
  return useQuery({
    queryKey: ["products", "similar", categoryId, limit, excludeId],
    queryFn: () =>
      productsService.getSimilarProducts(categoryId, limit, excludeId),
    enabled: !!categoryId,
    staleTime: 10 * 60 * 1000,
  });
};
