import { useQuery, useMutation } from '@tanstack/react-query';
import { dashboardService } from '../services';

// Hook لجلب الإحصائيات العامة
export const useStats = () => {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => dashboardService.getStats(),
    staleTime: 5 * 60 * 1000, // 5 دقائق
  });
};

// Hook لجلب إحصائيات الزوار
export const useVisitorsStats = () => {
  return useQuery({
    queryKey: ['dashboard', 'visitors'],
    queryFn: () => dashboardService.getVisitorsStats(),
    staleTime: 2 * 60 * 1000, // 2 دقيقة
  });
};

// Hook لزيادة عدد الزوار
export const useIncrementVisitors = () => {
  return useMutation({
    mutationFn: () => dashboardService.incrementVisitors(),
  });
};

// Hook لجلب إحصائيات المبيعات
export const useSalesStats = (period = 'month') => {
  return useQuery({
    queryKey: ['dashboard', 'sales', period],
    queryFn: () => dashboardService.getSalesStats(period),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook لجلب إحصائيات المنتجات
export const useProductsStats = () => {
  return useQuery({
    queryKey: ['dashboard', 'products'],
    queryFn: () => dashboardService.getProductsStats(),
    staleTime: 10 * 60 * 1000, // 10 دقائق
  });
};
