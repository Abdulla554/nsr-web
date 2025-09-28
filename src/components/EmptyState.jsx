import React from 'react';
import { ShoppingCart, Search, Package } from 'lucide-react';

const EmptyState = ({
    type = "products",
    message = "لا توجد بيانات متاحة",
    description = "لم نجد أي نتائج تطابق البحث",
    action = null
}) => {
    const icons = {
        products: <ShoppingCart className="w-12 h-12 text-gray-400" />,
        search: <Search className="w-12 h-12 text-gray-400" />,
        general: <Package className="w-12 h-12 text-gray-400" />
    };

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {icons[type] || icons.general}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{message}</h3>
            <p className="text-gray-600 text-center mb-6 max-w-md">{description}</p>
            {action && (
                <div className="flex flex-col sm:flex-row gap-3">
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;
