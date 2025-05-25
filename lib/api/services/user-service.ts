import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { ApiResponse, User, Destination, Food } from "../types"

/**
 * Service cho người dùng
 */
export const userService = {
  /**
   * Lấy thông tin người dùng
   */
  async getUserProfile(): Promise<ApiResponse<User>> {
    return apiClient.get<ApiResponse<User>>(API_ENDPOINTS.user.profile)
  },

  /**
   * Cập nhật thông tin người dùng
   */
  async updateUserProfile(data: Partial<User>): Promise<ApiResponse<User>> {
    return apiClient.put<ApiResponse<User>>(API_ENDPOINTS.user.updateProfile, data)
  },

  /**
   * Lấy danh sách yêu thích của người dùng
   */
  async getUserFavorites(): Promise<ApiResponse<{ destinations: Destination[]; foods: Food[] }>> {
    return apiClient.get<ApiResponse<{ destinations: Destination[]; foods: Food[] }>>(API_ENDPOINTS.user.favorites)
  },

  /**
   * Thêm vào danh sách yêu thích
   */
  async addToFavorites(type: "destination" | "food", id: number): Promise<ApiResponse<null>> {
    return apiClient.post<ApiResponse<null>>(API_ENDPOINTS.user.addFavorite, { type, id })
  },

  /**
   * Xóa khỏi danh sách yêu thích
   */
  async removeFromFavorites(id: number): Promise<ApiResponse<null>> {
    return apiClient.delete<ApiResponse<null>>(API_ENDPOINTS.user.removeFavorite(id))
  },
}
