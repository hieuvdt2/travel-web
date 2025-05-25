import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { ApiResponse, Culture } from "../types"

/**
 * Service cho văn hóa
 */
export const cultureService = {
  /**
   * Lấy tất cả thông tin văn hóa
   */
  async getAllCultures(): Promise<ApiResponse<Culture[]>> {
    return apiClient.get<ApiResponse<Culture[]>>(API_ENDPOINTS.culture.getAll)
  },

  /**
   * Lấy thông tin văn hóa theo vùng miền
   */
  async getCultureByRegion(region: string): Promise<ApiResponse<Culture>> {
    return apiClient.get<ApiResponse<Culture>>(API_ENDPOINTS.culture.getByRegion(region))
  },
}
