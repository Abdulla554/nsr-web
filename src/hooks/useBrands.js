import { useQuery } from "@tanstack/react-query";
import { brandsService } from "../services";

// Hook لجلب جميع الماركات
export const useBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => brandsService.getBrands(),
    staleTime: 15 * 60 * 1000, // 15 دقيقة
  });
};

// Hook لجلب ماركة واحدة
export const useBrand = (id) => {
  return useQuery({
    queryKey: ["brand", id],
    queryFn: () => brandsService.getBrand(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 دقائق
  });
};
