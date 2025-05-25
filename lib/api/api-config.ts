/**
 * Cấu hình API
 */

// URL cơ sở của API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api"

// Thời gian timeout cho các yêu cầu API (ms)
export const API_TIMEOUT = 30000

// Headers mặc định cho tất cả các yêu cầu API
export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
}
// a7cffd29d205ab4381d04af7c62d7612a8b1fb8e90f15494fd842821cad4c1d014d048593ee155f7b19b03ba3354ee7d10e9cb0b1ce6d3d6e0b4f5089a63adf0400dbfdb15ea515deab198afd5ced92cfb9ddc8424c312a33a4d1a7d6d48cee504210c7ec6a8a1653e236321b528a168b9e35149523175087d93c9233d6f4fc7
// Cấu hình các endpoints
export const API_ENDPOINTS = {
  // Destinations
  destinations: {
    getAll: "/destinations",
    getById: (id: number | string) => `/destinations/${id}`,
    getByCategory: (category: string) => `/destinations?category=${category}`,
    getByRegion: (region: string) => `/destinations?region=${region}`,
  },

  // Cuisine
  cuisine: {
    getAll: "/cuisine",
    getById: (id: number | string) => `/cuisine/${id}`,
    getByRegion: (region: string) => `/cuisine?region=${region}`,
  },

  // Culture
  culture: {
    getAll: "/culture",
    getByRegion: (region: string) => `/culture/${region}`,
  },

  // Authentication
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refreshToken: "/auth/refresh-token",
  },

  // User
  user: {
    profile: "/user/profile",
    updateProfile: "/user/profile",
    favorites: "/user/favorites",
    addFavorite: "/user/favorites",
    removeFavorite: (id: number | string) => `/user/favorites/${id}`,
  },

  // Reviews
  reviews: {
    getByDestination: (id: number | string) => `/destinations/${id}/reviews`,
    addReview: (id: number | string) => `/destinations/${id}/reviews`,
  },

  // Tours
  tours: {
    getAll: "/tours",
    getById: (id: number | string) => `/tours/${id}`,
    book: "/tours/book",
  },
}

// Mã lỗi API
export const API_ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}
