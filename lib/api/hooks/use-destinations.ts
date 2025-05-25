import { useApi } from "./use-api"
import { destinationService } from "../services/destination-service"
import type { Destination } from "../types"

export function useDestinations() {
  const {
    data: destinations,
    loading: isLoading,
    error,
    execute: fetchDestinations,
  } = useApi<{ data: Destination[] }>(destinationService.getAllDestinations)

  const {
    data: destination,
    loading: isLoadingDestination,
    error: destinationError,
    execute: fetchDestination,
  } = useApi<{ data: Destination }>(destinationService.getDestinationById)

  return {
    destinations: destinations?.data || [],
    isLoading,
    error,
    fetchDestinations,
    destination: destination?.data,
    isLoadingDestination,
    destinationError,
    fetchDestination,
  }
}
