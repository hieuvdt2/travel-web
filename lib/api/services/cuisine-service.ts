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
async function getFoodById(id:  string) {
  return apiClient.get<{ data: Foods }>(`/cusines/${id}?populate=*`);
}

  /**
   * Lấy món ăn theo fillter
   */
async function getFoodsByCategory(category: string): Promise<Foods[]> {
  const query =
    category === "all"
      ? "/cusines?image"
      : `/cusines?populate=ipopulate=mage&filters[category][$eq]=${category}`

  const response = await apiClient.get<{ data: Foods[] }>(query)
  return response.data
}
async function getFoodsByRegion(region: string): Promise<Foods[]> {
  const query =
    region === "all"
      ? "/cusines?populate=*"
      : `/cusines?populate=*&filters[regions][$eq]=${region}`

  const response = await apiClient.get<{ data: Foods[] }>(query)
  return response.data
}

export const cuisineService = {
  getAllFoods,
  getFoodById,
  getFoodsByCategory,
  getFoodsByRegion
  // ...
}