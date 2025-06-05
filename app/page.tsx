import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { PopularFoods } from "@/components/popular-foods"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BannerCarousel } from "@/components/banner-carousel"
import { RegionalCulture } from "@/components/regional-culture"
import { Container } from "@/components/container"
import CulturePage from "./culture/page"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="relative">
          <BannerCarousel />
        </section>

        {/* Featured Destinations */}
        <section className="py-12 md:py-16 lg:py-20">
          <Container>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Điểm Đến Nổi Bật</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Khám phá những địa điểm du lịch tuyệt vời nhất tại Việt Nam
              </p>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">Tất cả</TabsTrigger>
                  <TabsTrigger value="tamLinh">Tâm linh</TabsTrigger>
                  <TabsTrigger value="bien">Biển</TabsTrigger>
                  <TabsTrigger value="tuNhien">Công trình tự nhiên</TabsTrigger>
                  <TabsTrigger value="nhanTao">Công trình nhân tạo</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all">
                <FeaturedDestinations category="all" />
              </TabsContent>
              <TabsContent value="tamLinh">
                <FeaturedDestinations category="tamLinh" />
              </TabsContent>
              <TabsContent value="bien">
                <FeaturedDestinations category="bien" />
              </TabsContent>
              <TabsContent value="tuNhien">
                <FeaturedDestinations category="tuNhien" />
              </TabsContent>
              <TabsContent value="nhanTao">
                <FeaturedDestinations category="nhanTao" />
              </TabsContent>
            </Tabs>
            <div className="mt-10 flex justify-center">
              <Link href="/destinations">
                <Button>Xem tất cả địa điểm</Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Regional Culture - NEW SECTION */}
        <RegionalCulture />
        {/* <CulturePage/> */}

        {/* Vietnamese Cuisine */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <Container>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ẩm Thực Việt Nam</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Khám phá những món ăn ngon nhất định phải thử khi đến Việt Nam
              </p>
            </div>
            <PopularFoods />
            <div className="mt-10 flex justify-center">
              <Link href="/cuisine">
                <Button>Khám phá ẩm thực Việt Nam</Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 lg:py-20">
          <Container>
            <div className="rounded-lg bg-primary/10 p-8 md:p-10 lg:p-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Bắt đầu hành trình khám phá Việt Nam ngay hôm nay
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Đăng ký nhận thông tin về các tour du lịch và ưu đãi đặc biệt
                </p>
                <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                  <Input placeholder="Email của bạn" type="email" className="flex-1" />
                  <Button>Đăng ký</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
