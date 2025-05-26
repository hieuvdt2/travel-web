import { Banners } from "@/types";
import { apiClient } from "../api-client";

/**
 * Service cho banner
 */
async function getAllBanner() {
  return apiClient.get<{ data: Banners[] }>("/banners?populate=*");
}

export const bannerService = {
getAllBanner
  // ...
}