import { Foods } from "@/types";
import { apiClient } from "../api-client"

/**
 * Service cho ẩm thực
 */

async function getAllFoods() {
  return apiClient.get<{ data: Foods[] }>("/cusines?populate=*");
}

  /**
   * Lấy món ăn theo ID
   */
async function getFoodById(id: number | string) {
  return apiClient.get<{ data: Foods }>(`/cusines/${id}?populate=*`);
}

  /**
   * Lấy món ăn theo fillter
   */
async function getFoodsByRegion(category: string): Promise<Foods[]> {
  const query =
    category === "all"
      ? "/cusines?populate=image"
      : `/cusines?populate=image&filters[category][$eq]=${category}`

  const response = await apiClient.get<{ data: Foods[] }>(query)
  return response.data
}

export const cuisineService = {
  getAllFoods,
  getFoodById,
  getFoodsByRegion
  // ...
}