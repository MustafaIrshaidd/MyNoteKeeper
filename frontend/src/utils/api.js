import axios from "axios";

const apiUtils = {
  request: async (url, options = {}) => {
    try {
      const response = await axios({ url, ...options });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      return response.data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  },

  get: async (url, options = {}) => {
    return apiUtils.request(url, { method: "get", ...options });
  },

  post: async (url, data, options = {}) => {
    return apiUtils.request(url, {
      method: "post",
      data: data,
      ...options,
    });
  },

  put: async (url, data, options = {}) => {
    return apiUtils.request(url, {
      method: "put",
      data: JSON.stringify(data),
      ...options,
    });
  },

  delete: async (url, options = {}) => {
    return apiUtils.request(url, { method: "delete", ...options });
  },
};

export default apiUtils;
