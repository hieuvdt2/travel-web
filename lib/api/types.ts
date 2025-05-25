/**
 * Định nghĩa các kiểu dữ liệu cho API
 */

// Kiểu dữ liệu cho điểm đến du lịch
export interface Destination {
  id: number
  name: string
  location: string
  description: string
  image: string
  category: string
  region: string
  details?: string
  gallery?: string[]
  rating?: number
  reviews?: Review[]
  features?: string[]
  latitude?: number
  longitude?: number
  openingHours?: string
  entryFee?: string
  bestTimeToVisit?: string
  createdAt?: string
  updatedAt?: string
}

// Kiểu dữ liệu cho món ăn
export interface Food {
  id: number
  name: string
  origin: string
  description: string
  image: string
  region: string
  details?: string
  gallery?: string[]
  ingredients?: string[]
  recipe?: string
  rating?: number
  reviews?: Review[]
  createdAt?: string
  updatedAt?: string
}

// Kiểu dữ liệu cho văn hóa
export interface Culture {
  id: number
  name: string
  region: string
  description: string
  image: string
  details?: string
  gallery?: string[]
  features?: string[]
  createdAt?: string
  updatedAt?: string
}

// Kiểu dữ liệu cho đánh giá
export interface Review {
  id: number
  userId: number
  userName: string
  userAvatar?: string
  rating: number
  comment: string
  createdAt: string
  updatedAt?: string
}

// Kiểu dữ liệu cho tour du lịch
export interface Tour {
  id: number
  name: string
  description: string
  image: string
  duration: string
  price: number
  destinations: Destination[]
  itinerary: TourDay[]
  includes: string[]
  excludes: string[]
  rating?: number
  reviews?: Review[]
  createdAt?: string
  updatedAt?: string
}

// Kiểu dữ liệu cho lịch trình tour
export interface TourDay {
  day: number
  title: string
  description: string
  activities: string[]
  meals: string[]
  accommodation: string
}

// Kiểu dữ liệu cho người dùng
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role: "user" | "admin"
  favorites?: {
    destinations: number[]
    foods: number[]
  }
  createdAt?: string
  updatedAt?: string
}

// Kiểu dữ liệu cho phản hồi API
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Kiểu dữ liệu cho lỗi API
export interface ApiError {
  message: string
  code?: string
  errors?: Record<string, string[]>
}

// Kiểu dữ liệu cho đăng nhập
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
  refreshToken: string
}

// Kiểu dữ liệu cho đăng ký
export interface RegisterRequest {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface RegisterResponse {
  user: User
  token: string
  refreshToken: string
}

// Kiểu dữ liệu cho đặt tour
export interface BookTourRequest {
  tourId: number
  startDate: string
  adults: number
  children?: number
  contactName: string
  contactEmail: string
  contactPhone: string
  specialRequests?: string
}

export interface BookTourResponse {
  bookingId: number
  tourId: number
  status: "pending" | "confirmed" | "cancelled"
  totalPrice: number
  createdAt: string
}
