import { Destination } from "@/types";
import { apiClient } from "../api-client"


/**
 * Service cho các điểm đến du lịch
 */

async function getAllDestinations() {
  return apiClient.get<{ data: Destination[] }>("/destinations?populate=*");
}

// Lấy destination theo id
async function getDestinationById(id: number | string) {
  return apiClient.get<{ data: Destination }>(`/destinations/${id}?populate=*`);
}

async function getDestinationsByCategory(category: string): Promise<Destination[]> {
  const query =
    category === "all"
      ? "/destinations?populate=image"
      : `/destinations?populate=image&filters[category][$eq]=${category}`

  const response = await apiClient.get<{ data: Destination[] }>(query)
  return response.data
}



export const destinationService = {
  getAllDestinations,
  getDestinationById,
  getDestinationsByCategory
  // ...
}