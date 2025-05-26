import { Festivals } from "@/types";
import { apiClient } from "../api-client"

/**
 * Service lễ hội truyền thống
 */

async function getAllFestival() {
  return apiClient.get<{ data: Festivals[] }>("/festivals?populate=*");
}



  /**
   * Lấy  theo fillter
   */

async function getFestivalByRegion(region: string): Promise<Festivals[]> {
  const query =
    region === "all"
      ? "/festivals?populate=*"
      : `/festivals?populate=*&filters[region][$eq]=${region}`

  const response = await apiClient.get<{ data: Festivals[] }>(query)
  return response.data
}

export const festivalService = {

  getAllFestival,
  getFestivalByRegion
  // ...
}