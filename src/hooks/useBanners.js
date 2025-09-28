import { useQuery } from "@tanstack/react-query";
import { bannersService } from "../services";

// Hook لجلب جميع الإعلانات
export const useBanners = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: () => bannersService.getBanners(),
    staleTime: 10 * 60 * 1000, // 10 دقائق
  });
};

// Hook لجلب الإعلانات النشطة فقط
export const useActiveBanners = () => {
  return useQuery({
    queryKey: ["banners", "active"],
    queryFn: () => bannersService.getActiveBanners(),
    staleTime: 5 * 60 * 1000, // 5 دقائق
  });
};

// Hook لجلب إعلان واحد
export const useBanner = (id) => {
  return useQuery({
    queryKey: ["banner", id],
    queryFn: () => bannersService.getBanner(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
};
