import { TraditionalVillages } from "@/types";
import { apiClient } from "../api-client"

/**
 * Service làng nghề truyền thống
 */

async function getAllTraditionalVillage() {
  return apiClient.get<{ data: TraditionalVillages[] }>("/traditional-villages?populate=*");
}



  /**
   * Lấy  theo fillter
   */

async function getTraditionalVillageByRegion(region: string): Promise<TraditionalVillages[]> {
  const query =
    region === "all"
      ? "/traditional-villages?populate=*"
      : `/traditional-villages?populate=*&filters[region][$eq]=${region}`

  const response = await apiClient.get<{ data: TraditionalVillages[] }>(query)
  return response.data
}

export const traditionalVillageService = {

  getAllTraditionalVillage,
  getTraditionalVillageByRegion
  // ...
}