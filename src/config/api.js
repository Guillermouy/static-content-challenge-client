export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
  endpoints: {
    getRoutes: "/api/routes",
    baseContent: "/",
  },
};

export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};
