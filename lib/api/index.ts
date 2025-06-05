// Export tất cả các services và types
// export * from "./api-config"
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
import { bannerService } from "./services/banner-service"
import { festivalService} from "./services/festival-service"
import { heritageService} from "./services/heritage-service"
import { traditionalVillageService} from "./services/traditional-village.service"
import { musicalService} from "./services/musical-service"
import { contactService} from "./services/contact-service"




export const api = {
  destinations: destinationService,
  cuisine: cuisineService,
  culture: cultureService,
  auth: authService,
  user: userService,
  tours: tourService,
  banners:bannerService,
  festival:festivalService,
  heritage:heritageService,
  traditionalVillage:traditionalVillageService,
  musical:musicalService,
  contact:contactService

}

export default api
