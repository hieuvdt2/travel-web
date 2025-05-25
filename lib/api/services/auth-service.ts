import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { ApiResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, User } from "../types"

/**
 * Service cho xác thực người dùng
 */
export const authService = {
  /**
   * Đăng nhập
   */
  async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return apiClient.post<ApiResponse<LoginResponse>>(API_ENDPOINTS.auth.login, data)
  },

  /**
   * Đăng ký
   */
  async register(data: RegisterRequest): Promise<ApiResponse<RegisterResponse>> {
    return apiClient.post<ApiResponse<RegisterResponse>>(API_ENDPOINTS.auth.register, data)
  },

  /**
   * Đăng xuất
   */
  async logout(): Promise<ApiResponse<null>> {
    return apiClient.post<ApiResponse<null>>(API_ENDPOINTS.auth.logout, {})
  },

  /**
   * Làm mới token
   */
  async refreshToken(refreshToken: string): Promise<ApiResponse<{ token: string; refreshToken: string }>> {
    return apiClient.post<ApiResponse<{ token: string; refreshToken: string }>>(API_ENDPOINTS.auth.refreshToken, {
      refreshToken,
    })
  },

  /**
   * Lấy thông tin người dùng hiện tại
   */
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return apiClient.get<ApiResponse<User>>(API_ENDPOINTS.user.profile)
  },
}
