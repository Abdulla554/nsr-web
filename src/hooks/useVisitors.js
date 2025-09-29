import { useEffect } from "react";
import { visitorsService } from "../services";

// Hook لتتبع الزوار
export const useVisitors = () => {
  useEffect(() => {
    // زيادة عدد الزوار عند تحميل الصفحة
    const trackVisitor = async () => {
      try {
        console.log("🔍 Checking if visitor already tracked...");
        // التحقق من أن الزائر لم يتم تتبعه من قبل في هذه الجلسة
        const hasVisited = sessionStorage.getItem("visitor_tracked");
        console.log("📝 Has visited before:", hasVisited);

        if (!hasVisited) {
          console.log("👤 New visitor detected! Tracking...");
          await visitorsService.incrementVisitors();
          sessionStorage.setItem("visitor_tracked", "true");
          console.log("✅ Visitor tracked successfully!");
        } else {
          console.log("🔄 Visitor already tracked in this session");
        }
      } catch (error) {
        console.error("❌ Error tracking visitor:", error);
        // لا نعرض خطأ للمستخدم، فقط نسجله في الكونسول
      }
    };

    trackVisitor();
  }, []);

  return null; // هذا الـ hook لا يرجع أي شيء، فقط يتتبع الزوار
};
