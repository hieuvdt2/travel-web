import Image from "next/image";
import Link from "next/link";
import { MapPin, Utensils } from "lucide-react";
import NoImage from "../app/asset/images/no-image.jpeg"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { Foods } from "@/types";
import { getUrl } from "@/app/common/utils";

interface FoodCardProps {
  food: Foods;
}

export function FoodCard({ food }: FoodCardProps) {
  console.log('foooooo c',food)
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={food?.attributes?.image ? getUrl(food?.attributes.image?.data?.attributes?.url) : NoImage}
          alt={food?.attributes?.name || "no-image"}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg">{food?.attributes?.name}</CardTitle>
        <CardDescription className="flex items-center mt-1 text-muted-foreground text-sm">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{food?.attributes?.origin}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm line-clamp-2">{food?.attributes?.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Link href={`/cuisine/${food.id}`}>
              <Button variant="outline" size="sm">
                Xem chi tiết
              </Button>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{food.attributes.name}</h4>
                <p className="text-sm">{food.attributes.description}</p>
                <div className="flex items-center pt-2">
                  <Utensils className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    {food.attributes.type}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardFooter>
    </Card>
  );
}
