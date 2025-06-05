import { Musicals } from "@/types";
import { apiClient } from "../api-client"

/**
 * Service Am nhạc dân gian
 */

async function getAllMusical() {
  return apiClient.get<{ data: Musicals[] }>("/musicals?populate=*");
}



  /**
   * Lấy  theo fillter
   */

async function getMusicalByRegion(region: string): Promise<Musicals[]> {
  const query =
    region === "all"
      ? "/musicals?populate=*"
      : `/musicals?populate=*&filters[region][$eq]=${region}`

  const response = await apiClient.get<{ data: Musicals[] }>(query)
  return response.data
}

export const musicalService = {

  getAllMusical,
  getMusicalByRegion
  // ...
}