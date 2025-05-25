import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import type { Destination ,Attributes} from "@/types"

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
      const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
   console.log('ccccc',destination)
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">

<Image
  src={
    destination?.attributes.image?.data.attributes.url
      ? `${STRAPI_URL}${destination.attributes.image.data.attributes.url}`
      : "/placeholder.svg"
  }
  alt={destination?.attributes.name}
  fill
  className="object-cover"
/>

        {destination?.attributes.category && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/80 text-black hover:bg-white/70">
              {getCategoryLabel(destination?.attributes.category)}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg">{destination?.attributes.name}</CardTitle>
        <CardDescription className="flex items-center mt-1 text-muted-foreground text-sm">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{destination?.attributes.location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm line-clamp-2">{destination?.attributes.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={`/destinations/${destination.id}`}>
              <Button variant="default" size="sm">
                Xem chi tiết
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{destination?.attributes.name}</h4>
                <p className="text-sm">{destination?.attributes.description}</p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Thời gian lý tưởng: {destination?.attributes.bestTimeToVisit}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardFooter>
    </Card>

  )
}

function getCategoryLabel(category: string): string {
  switch (category) {
    case "tamLinh":
      return "Du lịch tâm linh"
    case "bien":
      return "Du lịch biển"
    case "tuNhien":
      return "Công trình tự nhiên"
    case "nhanTao":
      return "Công trình nhân tạo"
    default:
      return category
  }
}
