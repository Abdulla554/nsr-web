import React from 'react';

const LoadingSpinner = ({ message = "جاري التحميل...", size = "large" }) => {
    const sizeClasses = {
        small: "w-6 h-6",
        medium: "w-8 h-8",
        large: "w-12 h-12"
    };

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizeClasses[size]} mb-4`}></div>
            <p className="text-gray-600 text-sm">{message}</p>
        </div>
    );
};

export default LoadingSpinner;
