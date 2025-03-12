// Configuración simple para la base URL de la API
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

// Configuración centralizada para endpoints de API
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
  endpoints: {
    getRoutes: "/api/routes",
  },
};

export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};
