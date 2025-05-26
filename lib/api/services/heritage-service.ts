import { Heritages } from "@/types";
import { apiClient } from "../api-client"

/**
 * Service di sản văn hoá
 */

async function getAllHeritage() {
  return apiClient.get<{ data: Heritages[] }>("/heritages?populate=*");
}



  /**
   * Lấy  theo fillter
   */

async function getHeritageByRegion(region: string): Promise<Heritages[]> {
  const query =
    region === "all"
      ? "/heritages?populate=*"
      : `/heritages?populate=*&filters[region][$eq]=${region}`

  const response = await apiClient.get<{ data: Heritages[] }>(query)
  return response.data
}

export const heritageService = {

  getAllHeritage,
  getHeritageByRegion
  // ...
}