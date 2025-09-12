import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
export default function ProductDetail() {

  const navigate = useNavigate();
  const { id } = useParams();
  
  const { data: allProducts, isLoading: isLoadingProducts } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        try {
          const response = await axiosInstance.get(`/products`);
          return response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
          throw error;
        }
      },
    });

    const { data: productt } = useQuery({
       queryKey: ["product", id],
      queryFn: async () => {
        try {
          const response = await axiosInstance.get(`/products/${id}`);
          return response.data;
        } catch (error) {
          console.error("Error fetching products:", error);
          throw error;
        }
      },
    });

   
 
  const relatedProducts = allProducts?.filter((product) => product?.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

    if (isLoadingProducts) {
      return (
        <div className="flex h-screen flex-col items-center justify-center min-h-[120px]">
                  <ClipLoader color={"#1A73E8"} size={48} speedMultiplier={1.2} />
        <span className="text-red-medium font-bold text-lg mt-3">
            جاري التحميل...
          </span>
        </div>
      );
    }

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50 flex flex-col items-center justify-center pb-20 pt-44 px-4">
      {/* Main Product Card */}
      <div className="max-w-7xl w-full rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 flex flex-col md:flex-row overflow-hidden mb-20 transform hover:scale-[1.02] transition-all duration-700">
        {/* Product Image Section */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-primary-100/40 via-blue-50/60 to-cyan-50/40 p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-primary-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-sky-200/30 to-blue-200/30 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <img
              src={productt?.img}
              alt={productt?.name}
              className="rounded-3xl shadow-2xl object-contain md:w-[450px] transform hover:scale-105 transition-all duration-500 hover:rotate-1"
            />
          </div>
        </div>
        
        {/* Product Details Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50/50 to-primary-50/30">
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 via-primary-700 to-slate-900 bg-clip-text text-transparent mb-6 text-center md:text-right leading-tight">
                {productt?.name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto md:mr-0"></div>
            </div>
            
            <div className="mb-8">
              <div className="bg-gradient-to-br from-slate-50/80 via-white to-rose-50/60 rounded-2xl p-6 shadow-inner border border-slate-200/50 backdrop-blur-sm">
                <p className="text-slate-700 leading-relaxed text-center md:text-right text-lg font-medium">
                  {productt?.dis}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
          <Link to="/contact">
            <button className="mt-6 w-full bg-primary-600 hover:bg-white hover:border-primary-400 border-2 hover:text-primary-600 text-white py-3 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200">
          تواصل معنا
            </button>
          </Link>
            
            
          </div>
        </div>
      </div>
      
      {/* Similar Products Section */}
      <div className="w-full max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black bg-gradient-to-r from-slate-800 via-primary-700 to-slate-900 bg-clip-text text-transparent mb-4">
            منتجات مشابهة
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full mx-auto"></div>
          <p className="text-slate-600 mt-4 text-lg">اكتشف المزيد من منتجاتنا المميزة</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts?.map((similar) => (
            <Link
              to={`/product/${similar.id}`}
              key={similar.id}
              className="group block bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden border border-white/30 hover:border-rose-200/50"
            >
              <div className="flex flex-col items-center p-8 h-full relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 w-full">
                  <div className="bg-gradient-to-br from-slate-100/50 to-primary-100/30 rounded-2xl p-4 mb-6 group-hover:from-primary-200/50 group-hover:to-primary-100/30 transition-all duration-500">
                    <img
                      src={similar.img}
                      alt={similar.name}
                      className="rounded-xl object-contain max-h-40 w-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-primary-700 transition-colors duration-300">
                    {similar.name}
                  </h4>
                  
                  <p className="text-slate-600 text-sm text-center line-clamp-2 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {similar.dis}
                  </p>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
