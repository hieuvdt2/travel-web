import { apiClient } from "../api-client"
import { API_ENDPOINTS } from "../api-config"
import type { ApiResponse, Tour, BookTourRequest, BookTourResponse } from "../types"

/**
 * Service cho tour du lịch
 */
export const tourService = {
  /**
   * Lấy tất cả các tour
   */
  async getAllTours(params?: { page?: number; limit?: number }): Promise<ApiResponse<Tour[]>> {
    let endpoint = API_ENDPOINTS.tours.getAll

    // Thêm query params nếu có
    if (params) {
      const queryParams = new URLSearchParams()

      if (params.page) queryParams.append("page", params.page.toString())
      if (params.limit) queryParams.append("limit", params.limit.toString())

      if (queryParams.toString()) {
        endpoint += `?${queryParams.toString()}`
      }
    }

    return apiClient.get<ApiResponse<Tour[]>>(endpoint)
  },

  /**
   * Lấy tour theo ID
   */
  async getTourById(id: number | string): Promise<ApiResponse<Tour>> {
    return apiClient.get<ApiResponse<Tour>>(API_ENDPOINTS.tours.getById(id))
  },

  /**
   * Đặt tour
   */
  async bookTour(data: BookTourRequest): Promise<ApiResponse<BookTourResponse>> {
    return apiClient.post<ApiResponse<BookTourResponse>>(API_ENDPOINTS.tours.book, data)
  },
}
