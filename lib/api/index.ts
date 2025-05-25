// Export tất cả các services và types
export * from "./api-config"
export * from "./api-client"
// export * from "./types"

// Export các services
export * from "./services/destination-service"
export * from "./services/cuisine-service"
export * from "./services/culture-service"
export * from "./services/auth-service"
export * from "./services/user-service"
export * from "./services/tour-service"

// Export một API client tổng hợp
import { destinationService } from "./services/destination-service"
import { cuisineService } from "./services/cuisine-service"
import { cultureService } from "./services/culture-service"
import { authService } from "./services/auth-service"
import { userService } from "./services/user-service"
import { tourService } from "./services/tour-service"

export const api = {
  destinations: destinationService,
  cuisine: cuisineService,
  culture: cultureService,
  auth: authService,
  user: userService,
  tours: tourService,
}

export default api
