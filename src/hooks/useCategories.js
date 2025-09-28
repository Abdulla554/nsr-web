import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services";

// Hook لجلب جميع الفئات
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesService.getCategories(),
    staleTime: 15 * 60 * 1000, // 15 دقيقة
  });
};

// Hook لجلب فئة واحدة
export const useCategory = (id) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => categoriesService.getCategory(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 دقائق
  });
};
