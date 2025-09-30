/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    Package,
    Clock,
    CheckCircle,
    Truck,
    XCircle,
    User,
    Phone,
    Mail,
    Calendar,
    MapPin,
    ArrowLeft
} from 'lucide-react'
import { useOrdersStore } from '../store/index'

const statusConfig = {
    PENDING: {
        label: 'في الانتظار',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/20',
        icon: Clock
    },
    CONFIRMED: {
        label: 'مؤكد',
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/20',
        icon: CheckCircle
    },
    SHIPPED: {
        label: 'تم الشحن',
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/20',
        icon: Truck
    },
    DELIVERED: {
        label: 'تم التسليم',
        color: 'text-green-400',
        bgColor: 'bg-green-400/20',
        icon: CheckCircle
    },
    CANCELLED: {
        label: 'ملغي',
        color: 'text-red-400',
        bgColor: 'bg-red-400/20',
        icon: XCircle
    }
}

export default function Orders() {
    const navigate = useNavigate()
    const { userOrders, fetchUserOrders, loading } = useOrdersStore()

    const [userInfo, setUserInfo] = useState({
        name: '',
        phone: ''
    })
    const [error, setError] = useState('')

    useEffect(() => {
        // جلب معلومات المستخدم من localStorage إذا كانت موجودة
        const savedUser = localStorage.getItem('userInfo')
        if (savedUser) {
            const user = JSON.parse(savedUser)
            setUserInfo({ name: user.name, phone: user.phone })
            fetchUserOrders(user.name, user.phone)
        }
    }, [fetchUserOrders])

    const handleSearch = async (e) => {
        e.preventDefault()
        setError('')
        if (userInfo.name && userInfo.phone) {
            try {
                await fetchUserOrders(userInfo.name, userInfo.phone)
            } catch (error) {
                console.error('Error fetching orders:', error)
                setError('حدث خطأ في جلب الطلبات. تأكد من صحة البيانات أو أن الخادم يعمل.')
            }
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    const getStatusConfig = (status) => {
        return statusConfig[status] || statusConfig.PENDING
    }

    return (
        <div className="min-h-screen bg-dark-900 py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center pt-16 mb-8">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-[#F9F3EF] mb-4 md:my-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        طلباتي
                    </motion.h1>
                    <motion.div
                        className="flex items-center justify-center gap-2 text-[#749BC2] my-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span>الرئيسية</span>
                        <ArrowLeft className="w-4 h-4" />
                        <span>طلباتي</span>
                    </motion.div>
                    <motion.div
                        className="text-right"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >

                    </motion.div>
                </div>

                {/* Search Form */}
                <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-[#F9F3EF] text-xl font-bold mb-4">البحث عن طلباتك</h3>
                    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#749BC2] text-sm font-medium mb-2">
                                الاسم
                            </label>
                            <input
                                type="text"
                                value={userInfo.name}
                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[#F9F3EF] placeholder-[#749BC2] focus:outline-none focus:border-[#2C6D90] transition-colors"
                                placeholder="أدخل اسمك"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[#749BC2] text-sm font-medium mb-2">
                                رقم الهاتف
                            </label>
                            <input
                                type="tel"
                                value={userInfo.phone}
                                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[#F9F3EF] placeholder-[#749BC2] focus:outline-none focus:border-[#2C6D90] transition-colors"
                                placeholder="أدخل رقم هاتفك"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            {error && (
                                <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
                                    {error}
                                </div>
                            )}
                            <motion.button
                                type="submit"
                                className="w-full bg-[#2C6D90] hover:bg-[#2C6D90]/80 text-[#F9F3EF] py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                            >
                                {loading ? 'جاري البحث...' : 'البحث عن الطلبات'}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

                {/* Orders List */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {loading ? (
                        <div className="text-center py-16">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2C6D90] mx-auto mb-4"></div>
                            <p className="text-[#749BC2]">جاري تحميل الطلبات...</p>
                        </div>
                    ) : userOrders.length === 0 ? (
                        <div className="text-center py-16">
                            <Package className="w-24 h-24 text-[#749BC2]/50 mx-auto mb-4" />
                            <h3 className="text-xl text-[#F9F3EF] mb-2">لا توجد طلبات</h3>
                            <p className="text-[#749BC2]">لم يتم العثور على أي طلبات لهذا المستخدم</p>
                        </div>
                    ) : (
                        userOrders.map((order) => {
                            const statusConfig = getStatusConfig(order.status)
                            const StatusIcon = statusConfig.icon

                            return (
                                <motion.div
                                    key={order.id}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        {/* Order Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-[#F9F3EF] text-xl font-bold">
                                                    طلب #{order.id.slice(-8)}
                                                </h3>
                                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig.bgColor}`}>
                                                    <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
                                                    <span className={`text-sm font-medium ${statusConfig.color}`}>
                                                        {statusConfig.label}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center gap-3">
                                                    <User className="w-5 h-5 text-[#749BC2]" />
                                                    <div>
                                                        <p className="text-[#749BC2] text-sm">العميل</p>
                                                        <p className="text-[#F9F3EF] font-medium">{order.customerName}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Phone className="w-5 h-5 text-[#749BC2]" />
                                                    <div>
                                                        <p className="text-[#749BC2] text-sm">الهاتف</p>
                                                        <p className="text-[#F9F3EF] font-medium">{order.customerPhone}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-[#749BC2]" />
                                                    <div>
                                                        <p className="text-[#749BC2] text-sm">البريد الإلكتروني</p>
                                                        <p className="text-[#F9F3EF] font-medium">{order.customerEmail}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Calendar className="w-5 h-5 text-[#749BC2]" />
                                                    <div>
                                                        <p className="text-[#749BC2] text-sm">تاريخ الطلب</p>
                                                        <p className="text-[#F9F3EF] font-medium">{formatDate(order.createdAt)}</p>
                                                    </div>
                                                </div>

                                                {order.location && (
                                                    <div className="flex items-center gap-3">
                                                        <MapPin className="w-5 h-5 text-[#749BC2]" />
                                                        <div>
                                                            <p className="text-[#749BC2] text-sm">الموقع</p>
                                                            <p className="text-[#F9F3EF] font-medium">{order.location}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Order Summary */}
                                        <div className="lg:w-80">   
                                            <div className="bg-white/5 rounded-xl p-4 mb-4">
                                                <h4 className="text-[#F9F3EF] font-semibold mb-3">ملخص الطلب</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-[#749BC2]">المجموع</span>
                                                        <span className="text-[#F9F3EF] font-semibold">
                                                            {order.totalAmount.toLocaleString()} د.ع
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[#749BC2]">عدد المنتجات</span>
                                                        <span className="text-[#F9F3EF] font-semibold">
                                                            {order.items?.length || 0}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Order Items */}
                                            {order.items && order.items.length > 0 && (
                                                <div className="space-y-2">
                                                    <h4 className="text-[#F9F3EF] font-semibold">المنتجات</h4>
                                                    {order.items.map((item, index) => (
                                                        <div key={index} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                                                            <div>
                                                                <p className="text-[#F9F3EF] text-sm font-medium">
                                                                    {item.product?.name || 'منتج غير محدد'}
                                                                </p>
                                                                <p className="text-[#749BC2] text-xs">
                                                                    {item.product?.category?.name || 'فئة غير محددة'} - {item.product?.brand?.name || 'ماركة غير محددة'}
                                                                </p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-[#F9F3EF] text-sm font-semibold">
                                                                    {item.quantity} × {item.price.toLocaleString()} د.ع
                                                                </p>
                                                                <p className="text-[#749BC2] text-xs">
                                                                    = {(item.quantity * item.price).toLocaleString()} د.ع
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    )}
                </motion.div>
            </div>
        </div>
    )
}
