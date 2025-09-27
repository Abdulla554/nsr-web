import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://po4kk80k4k8so4gkssws0o80.185.208.207.97.sslip.io/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Add a request interceptor for handling errors
axiosInstance.interceptors.request.use(
    (config) => {
        // You can add auth tokens here if needed
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor for handling errors
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle specific error cases
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Response error:", error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("Request error:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error:", error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;