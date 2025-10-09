/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
  Gift,
  X,
  ArrowLeft
} from 'lucide-react'
import { useCartStore } from '../store/index'

export default function Cart() {
  const navigate = useNavigate()

  const {
    cart: cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice
  } = useCartStore()

  const [discountCode, setDiscountCode] = useState('')
  const [appliedDiscount, setAppliedDiscount] = useState(0)

  const deliveryPrice = 0
  const productsPrice = getTotalPrice()
  const total = productsPrice + deliveryPrice - appliedDiscount

  const applyDiscount = () => {
    if (discountCode === 'DISCOUNT10') {
      setAppliedDiscount(productsPrice * 0.1)
    } else {
      setAppliedDiscount(0)
    }
  }

  const handleCheckout = () => {
    navigate('/checkout')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24 bg-dark-900  md:pt-36"   >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div
            className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-black my-3" style={{ color: "#F9F3EF" }}>
                سلة التسوق
              </h1>
              <div className="flex hidden md:flex mt-4 items-center gap-2 text-sm" style={{ color: "#749BC2" }}>
                <span>الرئيسية</span>
                <ArrowLeft className="w-4 h-4" />
                <span>السلة</span>
              </div>
            </div>
            
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: "#2C6D90",
                color: "#F9F3EF"
              }}
            >
              العودة للتسوق
            </button>
          </motion.div>

          {/* Cart Stats */}
          <motion.div
            className="flex items-center gap-6 p-4 rounded-2xl border"
            style={{ 
              backgroundColor: "rgba(249, 243, 239, 0.05)",
              borderColor: "rgba(116, 155, 194, 0.2)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#2C6D90" }}>
                <ShoppingCart className="w-6 h-6" style={{ color: "#F9F3EF" }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: "#749BC2" }}>المنتجات</p>
                <p className="text-xl font-bold" style={{ color: "#F9F3EF" }}>{cartItems.length}</p>
              </div>
            </div>

            <div className="w-px h-12" style={{ backgroundColor: "rgba(116, 155, 194, 0.2)" }}></div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#749BC2" }}>
                <Package className="w-6 h-6" style={{ color: "#F9F3EF" }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: "#749BC2" }}>القطع</p>
                <p className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <motion.div
                className="text-center py-20 rounded-3xl border"
                style={{ 
                  backgroundColor: "rgba(249, 243, 239, 0.05)",
                  borderColor: "rgba(116, 155, 194, 0.2)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" 
                  style={{ backgroundColor: "rgba(116, 155, 194, 0.1)" }}>
                  <ShoppingCart className="w-16 h-16" style={{ color: "#749BC2" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#F9F3EF" }}>
                  السلة فارغة
                </h3>
                <p className="mb-8" style={{ color: "#749BC2" }}>
                  ابدأ التسوق وأضف منتجاتك المفضلة
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: "#2C6D90",
                    color: "#F9F3EF"
                  }}
                >
                  تصفح المنتجات
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: "rgba(249, 243, 239, 0.05)",
                      borderColor: "rgba(116, 155, 194, 0.2)"
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      
                      {/* Product Image */}
                      <div className="relative w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0" 
                        style={{ backgroundColor: "#F9F3EF" }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="text-sm font-medium mb-1" style={{ color: "#749BC2" }}>
                              {typeof item.brand === 'string' ? item.brand : item.brand?.name || 'ماركة غير محددة'}
                            </p>
                            <h3 className="text-xl font-bold mb-2" style={{ color: "#F9F3EF" }}>
                              {typeof item.name === 'string' ? item.name : item.name || 'منتج غير محدد'}
                            </h3>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{ 
                              backgroundColor: "rgba(239, 68, 68, 0.2)",
                              color: "#EF4444"
                            }}
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          
                          {/* Price */}
                          <div className="text-2xl font-black" style={{ color: "#F9F3EF" }}>
                            {typeof item.price === 'number' ? item.price.toLocaleString() : '0'} د.ع
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 bg-white/10 rounded-full p-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                              style={{ 
                                backgroundColor: "#2C6D90",
                                color: "#F9F3EF"
                              }}
                            >
                              {item.quantity === 1 ? (
                                <Trash2 className="w-4 h-4" />
                              ) : (
                                <Minus className="w-4 h-4" />
                              )}
                            </button>

                            <div className="min-w-[3rem] text-center">
                              <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                                {typeof item.quantity === 'number' ? item.quantity : 1}
                              </span>
                            </div>

                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                              style={{ 
                                backgroundColor: "#749BC2",
                                color: "#F9F3EF"
                              }}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="mt-4 pt-4 border-t flex justify-between items-center"
                          style={{ borderColor: "rgba(116, 155, 194, 0.2)" }}>
                          <span className="text-sm" style={{ color: "#749BC2" }}>المجموع الفرعي</span>
                          <span className="text-lg font-bold" style={{ color: "#F9F3EF" }}>
                            {(item.price * item.quantity).toLocaleString()} د.ع
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Clear Cart Button */}
                {cartItems.length > 0 && (
                  <motion.button
                    onClick={clearCart}
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: "rgba(239, 68, 68, 0.2)",
                      color: "#EF4444"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <Trash2 className="w-5 h-5" />
                    تفريغ السلة
                  </motion.button>
                )}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              
              {/* Summary Card */}
              <div className="rounded-3xl p-8 border shadow-2xl"
                style={{ 
                  backgroundColor: "rgba(249, 243, 239, 0.05)",
                  borderColor: "rgba(116, 155, 194, 0.2)"
                }}>
                
                <h3 className="text-2xl font-black mb-8" style={{ color: "#F9F3EF" }}>
                  ملخص الطلب
                </h3>

                {/* Price Details */}
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Package className="w-5 h-5" style={{ color: "#749BC2" }} />
                      <span style={{ color: "#749BC2" }}>سعر المنتجات</span>
                    </div>
                    <span className="font-bold" style={{ color: "#F9F3EF" }}>
                      {productsPrice.toLocaleString()} د.ع
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5" style={{ color: "#749BC2" }} />
                      <span style={{ color: "#749BC2" }}>التوصيل</span>
                    </div>
                    <span className="font-bold text-green-500" >
                       مجاني
                    </span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Gift className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">الخصم</span>
                      </div>
                      <span className="font-bold text-green-400">
                        -{appliedDiscount.toLocaleString()} د.ع
                      </span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="pt-6 mb-8 border-t"
                  style={{ borderColor: "rgba(116, 155, 194, 0.3)" }}>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                      المجموع الكلي
                    </span>
                    <span className="text-3xl font-black" style={{ color: "#F9F3EF" }}>
                      {total.toLocaleString()} د.ع
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    cartItems.length === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:scale-105 shadow-lg hover:shadow-2xl'
                  }`}
                  style={{ 
                    backgroundColor: "#2C6D90",
                    color: "#F9F3EF"
                  }}
                >
                  <CreditCard className="w-5 h-5" />
                  إتمام الشراء
                </button>

                {/* Additional Info */}
                <div className="mt-6 p-4 rounded-xl" 
                  style={{ backgroundColor: "rgba(116, 155, 194, 0.1)" }}>
                  <p className="text-sm text-center" style={{ color: "#749BC2" }}>
                    🔒 الدفع آمن ومحمي بنسبة 100%
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="rounded-2xl p-6 border"
                style={{ 
                  backgroundColor: "rgba(249, 243, 239, 0.05)",
                  borderColor: "rgba(116, 155, 194, 0.2)"
                }}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#2C6D90" }}>
                      <Truck className="w-5 h-5" style={{ color: "#F9F3EF" }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#F9F3EF" }}>شحن سريع</p>
                      <p className="text-sm" style={{ color: "#749BC2" }}>توصيل خلال 2-3 أيام</p>
                    </div>
                  </div>

                   
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}