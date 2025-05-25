import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import {
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Star,
  Utensils,
} from "lucide-react";

import Image from "next/image";
import { destinations } from "@/data/destinations";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { foods } from "@/data/foods";
import { FoodCard } from "@/components/food-card";
import api from "@/lib/api";

export default async function DestinationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Tìm điểm đến theo ID
  // const destination = destinations.find((d) => d.id === Number(params.id))
  const destination = await api.destinations.getDestinationById(params.id);

  // Nếu không tìm thấy điểm đến
  if (!destination) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Container className="py-12 md:py-16 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Không tìm thấy điểm đến
              </h1>
              <p className="mt-4 text-muted-foreground">
                Điểm đến bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
              </p>
              <Link href="/destinations" className="mt-8 inline-block">
                <Button>Quay lại danh sách điểm đến</Button>
              </Link>
            </div>
          </Container>
        </main>
        <SiteFooter />
      </div>
    );
  }

  // Filter foods related to this destination
  // const relatedFoods = foods.filter((food) => food.regions.includes(destination.region)).slice(0, 4)
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-[50vh]">
          <Image
            src={
              destination?.data?.attributes.image?.data?.attributes?.url
                ? `${STRAPI_URL}${destination?.data?.attributes.image?.data?.attributes?.url}`
                : "/placeholder.svg"
            }
            alt={destination?.data?.attributes?.image?.data?.attributes?.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="container">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {destination.data.attributes.name}
              </h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{destination.data.attributes.location}</span>
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
                <BreadcrumbLink href="/destinations">
                  Địa điểm du lịch
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {destination.data.attributes.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Giới thiệu</h2>
                <p className="mt-4 text-muted-foreground">
                  {destination.data.attributes.description}
                </p>
                <p className="mt-4">
                  {destination.data.attributes.longDescription}
                </p>
              </div>

              {/* <div>
                <h2 className="text-2xl font-bold">Điểm nổi bật</h2>
                <ul className="mt-4 space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Hoạt động</h2>
                <ul className="mt-4 space-y-2">
                  {destination.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: destination.data.attributes.content,
                }}
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Thông tin du lịch</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      Thời điểm lý tưởng:{" "}
                      {destination.data.attributes.bestTimeToVisit}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      Thời gian đề xuất:{" "}
                      {destination.data.attributes.suggestedDuration}
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-4">Đặt tour ngay</Button>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center">
                  <Utensils className="h-4 w-4 mr-2" />
                  <h3 className="font-medium">Ẩm thực địa phương</h3>
                </div>
                {/* <div className="mt-4 space-y-3">
                  {destination.localFood.map((food, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{food}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          {/* {relatedFoods.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold">Món ăn nên thử khi đến {destination.location}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedFoods.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/cuisine">
                  <Button variant="outline">Xem thêm món ăn</Button>
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
