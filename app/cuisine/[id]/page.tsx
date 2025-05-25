import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { MapPin, Star, Utensils, Clock, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { foods } from "@/data/foods";
import { FoodCard } from "@/components/food-card";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import api from "@/lib/api";
import { getUrl } from "@/app/common/utils";
export default async function FoodDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Tìm món ăn theo ID
  // const food = foods.find((f:any) => f.id ===(params.id))
  const food = await api.cuisine.getFoodById(params.id);

  // Nếu không tìm thấy món ăn
  if (!food) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Container className="py-12 md:py-16 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Không tìm thấy món ăn
              </h1>
              <p className="mt-4 text-muted-foreground">
                Món ăn bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
              </p>
              <Link href="/cuisine" className="mt-8 inline-block">
                <Button>Quay lại danh sách món ăn</Button>
              </Link>
            </div>
          </Container>
        </main>
        <SiteFooter />
      </div>
    );
  }
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-[50vh]">
          <Image
            src={
              food?.data?.attributes.image?.data?.attributes?.url
                ? `${STRAPI_URL}${food?.data?.attributes.image?.data?.attributes?.url}`
                : "/placeholder.svg"
            }
            alt={food?.data?.attributes?.image?.data?.attributes?.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="container">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {food.data.attributes.name}
              </h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{food.data.attributes.origin}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cuisine">Ẩm thực</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{food.data.attributes.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Giới thiệu</h2>
                <p className="mt-4">{food.data.attributes.description}</p>
                <p className="mt-4">{food.data.attributes.longDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Nguyên liệu chính</h2>
                <ul className="mt-4 space-y-2">
                  {/* {food.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))} */}
                </ul>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: food.data.attributes.ingredients,
                  }}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Cách thưởng thức</h2>
                <p className="mt-4">{food.data.attributes.howToEat}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Thông tin món ăn</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Xuất xứ: {food.data.attributes.origin}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      Thời gian chuẩn bị: {food.data.attributes.prepTime}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Loại: {food.data.attributes.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Giá trung bình: {food.data.attributes.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Đánh giá: 4.75/5</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Nơi thưởng thức</h3>
                <div className="mt-4 space-y-3">
                  {/* {food.bestPlacesToTry.map((place, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{place}</span>
                    </div>
                  ))} */}
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: food.data.attributes.bestPlacesToTry,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 
          {relatedDestinations.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold">Địa điểm nên ghé thăm để thưởng thức {food.name}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/destinations">
                  <Button variant="outline">Xem thêm địa điểm</Button>
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
