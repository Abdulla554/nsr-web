import axiosInstance from "../lib/axios";

// Base API service class
class ApiService {
  constructor(baseURL = "") {
    this.baseURL = baseURL;
  }

  // Generic GET request
  async get(endpoint, params = {}) {
    try {
      const response = await axiosInstance.get(`${this.baseURL}${endpoint}`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  // Generic POST request
  async post(endpoint, data = {}) {
    try {
      const response = await axiosInstance.post(
        `${this.baseURL}${endpoint}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(`Error posting to ${endpoint}:`, error);
      throw error;
    }
  }

  // Generic PATCH request
  async patch(endpoint, data = {}) {
    try {
      const response = await axiosInstance.patch(
        `${this.baseURL}${endpoint}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(`Error patching ${endpoint}:`, error);
      throw error;
    }
  }

  // Generic DELETE request
  async delete(endpoint) {
    try {
      const response = await axiosInstance.delete(`${this.baseURL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting ${endpoint}:`, error);
      throw error;
    }
  }
}

export default ApiService;
