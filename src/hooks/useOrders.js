import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ordersService } from "../services";

// Hook لجلب طلب واحد
export const useOrder = (id) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => ordersService.getOrder(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 دقائق
  });
};

// Hook لجلب جميع الطلبات (للمدير)
export const useOrders = (params = {}) => {
  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => ordersService.getAllOrders(params),
    staleTime: 2 * 60 * 1000, // 2 دقيقة
  });
};

// Hook لإنشاء طلب جديد
export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderData) => ordersService.createOrder(orderData),
    onSuccess: () => {
      // إعادة تحميل قائمة الطلبات بعد إنشاء طلب جديد
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

// Hook لتحديث حالة الطلب
export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }) => ordersService.updateOrderStatus(id, status),
    onSuccess: (data, variables) => {
      // تحديث الطلب المحدد في الكاش
      queryClient.setQueryData(["order", variables.id], data);
      // إعادة تحميل قائمة الطلبات
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};

// Hook لحذف طلب
export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => ordersService.deleteOrder(id),
    onSuccess: () => {
      // إعادة تحميل قائمة الطلبات بعد الحذف
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
