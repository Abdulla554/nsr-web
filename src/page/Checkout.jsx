/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    ArrowRight,
    ArrowLeft,
    User,
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    Package,
    ShoppingBag,
    Truck,
    CreditCard,
    AlertCircle,
    Home
} from 'lucide-react'
import { useCartStore, useOrdersStore } from '../store/index'

const steps = [
    { id: 1, title: 'معلومات العميل', icon: User },
    { id: 2, title: 'مراجعة الطلب', icon: Package },
    { id: 3, title: 'تأكيد الطلب', icon: CheckCircle }
]

export default function Checkout() {
    const navigate = useNavigate()
    const { cart, getTotalPrice, clearCart } = useCartStore()
    const { createOrder, findOrCreateUser, loading } = useOrdersStore()

    const [currentStep, setCurrentStep] = useState(1)
    const [orderData, setOrderData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [orderSuccess, setOrderSuccess] = useState(false)
    const [createdOrder, setCreatedOrder] = useState(null)
    const [error, setError] = useState('')

    const deliveryPrice = 5000
    const productsPrice = getTotalPrice()
    const total = productsPrice + deliveryPrice

    useEffect(() => {
        if (cart.length === 0 && !orderSuccess) {
            navigate('/')
        }

        const savedUser = localStorage.getItem('userInfo')
        if (savedUser) {
            const user = JSON.parse(savedUser)
            setOrderData({
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || '',
                address: ''
            })
        }
    }, [cart.length, navigate, orderSuccess])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setOrderData(prev => ({
            ...prev,
            [name]: value
        }))
        setError('')
    }

    const handleNext = async () => {
        setError('')
        if (currentStep === 1) {
            if (!orderData.name || !orderData.phone) {
                setError('يرجى ملء جميع الحقول المطلوبة (الاسم ورقم الهاتف)')
                return
            }

            try {
                await findOrCreateUser({
                    name: orderData.name,
                    email: orderData.email,
                    phone: orderData.phone
                })
                setCurrentStep(2)
            } catch (error) {
                console.error('Error creating user:', error)
                setError('حدث خطأ. يرجى المحاولة مرة أخرى')
            }
        } else if (currentStep === 2) {
            try {
                const orderItems = cart.map(item => ({
                    productId: item.id,
                    quantity: item.quantity,
                    price: item.price
                }))

                const newOrder = await createOrder({
                    customerName: orderData.name,
                    customerEmail: orderData.email,
                    customerPhone: orderData.phone,
                    location: orderData.address || 'موقع غير محدد',
                    totalAmount: total,
                    items: orderItems
                })

                setCreatedOrder(newOrder)
                setOrderSuccess(true)
                setCurrentStep(3)
                clearCart()
            } catch (error) {
                console.error('Error creating order:', error)
                setError('حدث خطأ في إنشاء الطلب. يرجى المحاولة مرة أخرى')
            }
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-black mb-2" style={{ color: "#F9F3EF" }}>
                                معلومات العميل
                            </h3>
                            <p style={{ color: "#749BC2" }}>
                                أدخل معلوماتك لإتمام عملية الشراء
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: "#F9F3EF" }}>
                                    <User className="w-4 h-4" style={{ color: "#749BC2" }} />
                                    الاسم الكامل *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={orderData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-sm"
                                    style={{
                                        borderColor: "rgba(116, 155, 194, 0.3)",
                                        color: "#F9F3EF"
                                    }}
                                    placeholder="مثال: أحمد محمد"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: "#F9F3EF" }}>
                                    <Phone className="w-4 h-4" style={{ color: "#749BC2" }} />
                                    رقم الهاتف *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={orderData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-sm"
                                    style={{
                                        borderColor: "rgba(116, 155, 194, 0.3)",
                                        color: "#F9F3EF"
                                    }}
                                    placeholder="مثال: 07XX XXX XXXX"
                                    required
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: "#F9F3EF" }}>
                                    <Mail className="w-4 h-4" style={{ color: "#749BC2" }} />
                                    البريد الإلكتروني (اختياري)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={orderData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-sm"
                                    style={{
                                        borderColor: "rgba(116, 155, 194, 0.3)",
                                        color: "#F9F3EF"
                                    }}
                                    placeholder="مثال: example@email.com"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: "#F9F3EF" }}>
                                    <MapPin className="w-4 h-4" style={{ color: "#749BC2" }} />
                                    العنوان (اختياري)
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={orderData.address}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 backdrop-blur-sm border rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 placeholder:text-sm"
                                    style={{
                                        borderColor: "rgba(116, 155, 194, 0.3)",
                                        color: "#F9F3EF"
                                    }}
                                    placeholder="مثال: شارع XX، حي XX، بغداد"
                                />
                            </div>
                        </div>

                        <div className="mt-6 p-4 rounded-xl flex items-start gap-3"
                            style={{ backgroundColor: "rgba(116, 155, 194, 0.1)" }}>
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#749BC2" }} />
                            <p className="text-sm" style={{ color: "#749BC2" }}>
                                سيتم استخدام هذه المعلومات للتواصل معك وتوصيل طلبك
                            </p>
                        </div>
                    </motion.div>
                )

            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-black mb-2" style={{ color: "#F9F3EF" }}>
                                مراجعة الطلب
                            </h3>
                            <p style={{ color: "#749BC2" }}>
                                تأكد من صحة المعلومات قبل إتمام الطلب
                            </p>
                        </div>

                        {/* Customer Info */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border"
                            style={{ borderColor: "rgba(116, 155, 194, 0.2)" }}>
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "#F9F3EF" }}>
                                <User className="w-5 h-5" style={{ color: "#749BC2" }} />
                                معلومات العميل
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center gap-3 p-4 rounded-xl"
                                    style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: "#2C6D90" }}>
                                        <User className="w-6 h-6" style={{ color: "#F9F3EF" }} />
                                    </div>
                                    <div>
                                        <p className="text-sm mb-1" style={{ color: "#749BC2" }}>الاسم</p>
                                        <p className="font-semibold" style={{ color: "#F9F3EF" }}>{orderData.name}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 rounded-xl"
                                    style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: "#749BC2" }}>
                                        <Phone className="w-6 h-6" style={{ color: "#F9F3EF" }} />
                                    </div>
                                    <div>
                                        <p className="text-sm mb-1" style={{ color: "#749BC2" }}>الهاتف</p>
                                        <p className="font-semibold" style={{ color: "#F9F3EF" }}>{orderData.phone}</p>
                                    </div>
                                </div>

                                {orderData.email && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl"
                                        style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: "#2C6D90" }}>
                                            <Mail className="w-6 h-6" style={{ color: "#F9F3EF" }} />
                                        </div>
                                        <div>
                                            <p className="text-sm mb-1" style={{ color: "#749BC2" }}>البريد</p>
                                            <p className="font-semibold text-sm" style={{ color: "#F9F3EF" }}>{orderData.email}</p>
                                        </div>
                                    </div>
                                )}

                                {orderData.address && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl"
                                        style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: "#749BC2" }}>
                                            <MapPin className="w-6 h-6" style={{ color: "#F9F3EF" }} />
                                        </div>
                                        <div>
                                            <p className="text-sm mb-1" style={{ color: "#749BC2" }}>العنوان</p>
                                            <p className="font-semibold text-sm" style={{ color: "#F9F3EF" }}>{orderData.address}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border"
                            style={{ borderColor: "rgba(116, 155, 194, 0.2)" }}>
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "#F9F3EF" }}>
                                <ShoppingBag className="w-5 h-5" style={{ color: "#749BC2" }} />
                                المنتجات ({cart.length})
                            </h4>
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl"
                                        style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"
                                            style={{ backgroundColor: "#F9F3EF" }}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h5 className="font-bold mb-1 truncate" style={{ color: "#F9F3EF" }}>
                                                {item.name}
                                            </h5>
                                            <p className="text-sm mb-2" style={{ color: "#749BC2" }}>
                                                {typeof item.brand === 'string' ? item.brand : item.brand?.name || 'ماركة غير محددة'}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm px-2 py-1 rounded-lg"
                                                    style={{
                                                        backgroundColor: "rgba(44, 109, 144, 0.2)",
                                                        color: "#749BC2"
                                                    }}>
                                                    الكمية: {item.quantity}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-lg font-bold mb-1" style={{ color: "#F9F3EF" }}>
                                                {(item.quantity * item.price).toLocaleString()} د.ع
                                            </p>
                                            <p className="text-sm" style={{ color: "#749BC2" }}>
                                                {item.price.toLocaleString()} × {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-gradient-to-br from-[#2C6D90]/20 to-[#749BC2]/20 rounded-2xl p-6 border"
                            style={{ borderColor: "rgba(116, 155, 194, 0.3)" }}>
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "#F9F3EF" }}>
                                <CreditCard className="w-5 h-5" style={{ color: "#749BC2" }} />
                                ملخص الطلب
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span style={{ color: "#749BC2" }}>سعر المنتجات</span>
                                    <span className="font-bold text-lg" style={{ color: "#F9F3EF" }}>
                                        {productsPrice.toLocaleString()} د.ع
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Truck className="w-4 h-4" style={{ color: "#749BC2" }} />
                                        <span style={{ color: "#749BC2" }}>التوصيل</span>
                                    </div>
                                    <span className="font-bold text-lg" style={{ color: "#F9F3EF" }}>
                                        {deliveryPrice.toLocaleString()} د.ع
                                    </span>
                                </div>
                                <div className="border-t pt-4" style={{ borderColor: "rgba(116, 155, 194, 0.3)" }}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold" style={{ color: "#F9F3EF" }}>
                                            المجموع الكلي
                                        </span>
                                        <span className="text-3xl font-black" style={{ color: "#F9F3EF" }}>
                                            {total.toLocaleString()} د.ع
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )

            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center space-y-8 py-8"
                    >
                        {/* Success Animation */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-32 h-32 mx-auto rounded-full flex items-center justify-center relative"
                            style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                            >
                                <CheckCircle className="w-20 h-20 text-green-400" />
                            </motion.div>
                        </motion.div>

                        {/* Success Message */}
                        <div className="space-y-4">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-4xl font-black"
                                style={{ color: "#F9F3EF" }}
                            >
                                تم إنشاء طلبك بنجاح!
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-lg"
                                style={{ color: "#749BC2" }}
                            >
                                شكراً لك، سنتواصل معك قريباً لتأكيد الطلب
                            </motion.p>
                        </div>

                        {/* Order Details Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border"
                            style={{ borderColor: "rgba(116, 155, 194, 0.2)" }}
                        >
                            <h4 className="text-xl font-bold mb-6" style={{ color: "#F9F3EF" }}>
                                تفاصيل الطلب
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 rounded-xl"
                                    style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                    <span style={{ color: "#749BC2" }}>رقم الطلب</span>
                                    <span className="font-bold" style={{ color: "#F9F3EF" }}>
                                        #{createdOrder?.id?.slice(-8) || 'XXXXXXXX'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-xl"
                                    style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                    <span style={{ color: "#749BC2" }}>المجموع الكلي</span>
                                    <span className="font-bold text-xl" style={{ color: "#F9F3EF" }}>
                                        {total.toLocaleString()} د.ع
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-xl"
                                    style={{ backgroundColor: "rgba(249, 243, 239, 0.05)" }}>
                                    <span style={{ color: "#749BC2" }}>حالة الطلب</span>
                                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-400">
                                        قيد المعالجة
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                        >
                            <button
                                onClick={() => navigate('/orders')}
                                className="px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
                                style={{
                                    backgroundColor: "#2C6D90",
                                    color: "#F9F3EF"
                                }}
                            >
                                <Package className="w-6 h-6" />
                                عرض طلباتي
                            </button>

                            <button
                                onClick={() => navigate('/')}
                                className="px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 border"
                                style={{
                                    backgroundColor: "rgba(249, 243, 239, 0.05)",
                                    borderColor: "rgba(116, 155, 194, 0.3)",
                                    color: "#F9F3EF"
                                }}
                            >
                                <Home className="w-6 h-6" />
                                العودة للرئيسية
                            </button>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="mt-8 p-6 rounded-xl"
                            style={{ backgroundColor: "rgba(116, 155, 194, 0.1)" }}
                        >
                            <p className="text-sm" style={{ color: "#749BC2" }}>
                                سيتم التواصل معك عبر الهاتف لتأكيد الطلب وترتيب التوصيل
                            </p>
                        </motion.div>
                    </motion.div>
                )

            default:
                return null
        }
    }

    return (
        <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "#1a1a2e" }}>
            <div className="max-w-5xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="mb-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-black mb-4"
                        style={{ color: "#F9F3EF" }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        إتمام الطلب
                    </motion.h1>
                    <motion.div
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "#749BC2" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span>الرئيسية</span>
                        <ArrowLeft className="w-4 h-4" />
                        <span>السلة</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>إتمام الطلب</span>
                    </motion.div>
                </div>

                {/* Progress Steps */}
                <motion.div
                    className="flex items-center justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const isActive = currentStep === step.id
                        const isCompleted = currentStep > step.id

                        return (
                            <div key={step.id} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isCompleted
                                        ? 'bg-green-500 scale-110'
                                        : isActive
                                            ? 'bg-gradient-to-r from-[#2C6D90] to-[#749BC2] scale-110'
                                            : 'bg-white/10'
                                        }`}>
                                        {isCompleted ? (
                                            <CheckCircle className="w-7 h-7" style={{ color: "#F9F3EF" }} />
                                        ) : (
                                            <Icon className="w-7 h-7" style={{ color: "#F9F3EF" }} />
                                        )}
                                    </div>
                                    <span className={`text-xs sm:text-sm font-bold mt-3 ${isActive ? 'text-[#F9F3EF]' : 'text-[#749BC2]'
                                        }`}>
                                        {step.title}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`w-16 sm:w-24 h-0.5 mx-4 transition-all duration-300 ${currentStep > step.id ? 'bg-green-500' : 'bg-white/20'
                                        }`} />
                                )}
                            </div>
                        )
                    })}
                </motion.div>

                {/* Step Content */}
                <motion.div
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm flex items-center gap-2"
                        >
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            {error}
                        </motion.div>
                    )}

                    <AnimatePresence mode="wait">
                        {renderStepContent()}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {currentStep < 3 && (
                        <motion.div
                            className="flex justify-between mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button
                                onClick={handleBack}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-[#F9F3EF] rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={currentStep === 1}
                            >
                                <ArrowRight className="w-5 h-5" />
                                السابق
                            </motion.button>

                            <motion.button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2C6D90] to-[#749BC2] hover:from-[#2C6D90]/80 hover:to-[#749BC2]/80 text-[#F9F3EF] rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        جاري المعالجة...
                                    </>
                                ) : (
                                    <>
                                        {currentStep === 2 ? 'إنشاء الطلب' : 'التالي'}
                                        <ArrowLeft className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}