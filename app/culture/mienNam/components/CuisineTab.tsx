import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import api from "@/lib/api"
import { getUrl } from "@/app/common/utils"

export async function CuisineTab() {
  const cuisine = await api.cuisine.getFoodsByRegion("mienNam")

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cuisine.map((item) => {
        const imageData = item?.attributes?.image?.data?.attributes
        const imageUrl = getUrl(imageData?.url)
        return (
          <Card key={item.attributes.name}>
            <div className="relative h-48">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={item.attributes.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.attributes.name}</CardTitle>
              <CardDescription>{item.attributes.origin}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.attributes.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
} 