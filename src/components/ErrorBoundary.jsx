import React from 'react';

const ErrorBoundary = ({ error, message = "حدث خطأ في تحميل البيانات", onRetry }) => {
    if (!error) return null;

    return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">خطأ في التحميل</h3>
            <p className="text-gray-600 text-center mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    إعادة المحاولة
                </button>
            )}
        </div>
    );
};

export default ErrorBoundary;
