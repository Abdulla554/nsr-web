/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Percent,
  ShoppingBag
} from 'lucide-react'
import { useCartStore } from '../store/index'

export default function Cart() {
  const navigate = useNavigate()
  
  // استخدام Zustand store للسلة
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

  const deliveryPrice = 5000
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
   
  }
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center pt-16 mb-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-[#F9F3EF] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            السلة
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center gap-2 text-[#749BC2] mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>الرئيسية</span>
            <ArrowRight className="w-4 h-4" />
            <span>السلة</span>
          </motion.div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              onClick={() => navigate("/")}
              className="text-[#749BC2] hover:text-[#F9F3EF] transition-colors duration-300"
            >
              عودة
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section - Right Column */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="w-24 h-24 text-[#749BC2]/50 mx-auto mb-4" />
                  <h3 className="text-xl text-[#F9F3EF] mb-2">السلة فارغة</h3>
                  <p className="text-[#749BC2]">أضف منتجات لبدء التسوق</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 w-full">
                        <div className="text-[#749BC2] text-sm font-medium mb-1">
                          {item.brand}
                        </div>
                        <h3 className="text-[#F9F3EF] text-lg font-semibold mb-2">
                          {item.name}
                        </h3>
                        <div className="text-[#F9F3EF] text-xl font-bold mb-4 sm:mb-0">
                          {item.price.toLocaleString()} د.ع
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                        {item.quantity === 1 ? (
                          <motion.button
                            onClick={() => removeFromCart(item.id)}
                            className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        ) : (
                          <motion.button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                        )}
                        
                        <div className="text-[#F9F3EF] text-lg font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </div>
                        
                        <motion.button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 rounded-full bg-[#2C6D90] hover:bg-[#2C6D90]/80 text-[#F9F3EF] flex items-center justify-center transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}

              {/* Empty Cart Button */}
              {cartItems.length > 0 && (
                <motion.button
                  onClick={clearCart}
                  className="w-full bg-red-500/40 hover:bg-red-600/80 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Trash2 className="w-5 h-5" />
                  تفريغ السلة
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Discount & Order Summary Section - Left Column */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
             
              {/* Order Summary Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#F9F3EF] text-xl font-bold mb-6">
                  ملخص الطلب
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#749BC2]">سعر التوصيل</span>
                    <span className="text-[#F9F3EF] font-semibold">
                      {deliveryPrice.toLocaleString()} د.ع
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#749BC2]">سعر المنتجات</span>
                    <span className="text-[#F9F3EF] font-semibold">
                      {productsPrice.toLocaleString()} د.ع
                    </span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between items-center text-green-400">
                      <span>الخصم</span>
                      <span className="font-semibold">
                        -{appliedDiscount.toLocaleString()} د.ع
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#F9F3EF] text-lg font-bold">المجموع</span>
                      <span className="text-[#F9F3EF] text-xl font-bold">
                        {total.toLocaleString()} د.ع
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={handleCheckout}
                  className="w-full bg-[#2C6D90] hover:bg-[#2C6D90]/80 text-[#F9F3EF] py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  شراء الان
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
