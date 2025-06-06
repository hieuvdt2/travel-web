import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import VHMienNam from "@/app/asset/images/van-hoa-mine-nam.jpg"
import VHMienNamBanner from "@/app/asset/images/van-hoa-mien-nam-banner.jpg"
import VH from "@/app/asset/images/van-hoa-dac-trung-cua-mien-nam.jpg"
import TQ from "@/app/asset/images/baodantoc_vh_nguoi_hoa.jpg"
import HoMienNam from "@/app/asset/images/ho-mien-nam.jpg"
import { MusicTab } from "./components/MusicTab"
import { FestivalsTab } from "./components/FestivalsTab"
import { CuisineTab } from "./components/CuisineTab"
import { LifestyleTab } from "./components/LifestyleTab"

export default async function SouthCulturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[40vh] bg-auto bg-center"
            style={{ backgroundImage: `url(${VHMienNamBanner.src})` }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Văn Hóa Miền Nam</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Khám phá nét đẹp văn hóa đa dạng, phóng khoáng của vùng đất phương Nam
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Tổng Quan</h2>
              <p className="text-muted-foreground mb-4">
                Miền Nam Việt Nam là vùng đất trẻ với lịch sử khai phá muộn hơn so với miền Bắc và miền Trung. Tuy
                nhiên, đây lại là nơi hội tụ của nhiều nền văn hóa, tạo nên một bản sắc văn hóa đa dạng, phong phú và có
                phần phóng khoáng hơn.
              </p>
              <p className="text-muted-foreground mb-4">
                Văn hóa miền Nam chịu ảnh hưởng từ nhiều nền văn hóa khác nhau như Việt, Hoa, Khmer, Chăm và cả văn hóa
                phương Tây. Sự giao thoa này tạo nên một nền văn hóa đa dạng, phong phú và có nhiều nét độc đáo riêng.
              </p>
              <p className="text-muted-foreground">
                Người miền Nam nổi tiếng với tính cách cởi mở, phóng khoáng, thẳng thắn và hiếu khách. Họ dễ hòa nhập,
                dễ thích nghi với môi trường mới và luôn sẵn sàng đón nhận cái mới.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={VHMienNam} alt="Văn hóa miền Nam" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Cultural Categories */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <Tabs defaultValue="music" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="music">Âm nhạc dân gian</TabsTrigger>
                  <TabsTrigger value="festivals">Lễ hội</TabsTrigger>
                  <TabsTrigger value="cuisine">Ẩm thực</TabsTrigger>
                  <TabsTrigger value="lifestyle">Văn hóa sông nước</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="music">
                <MusicTab />
              </TabsContent>

              <TabsContent value="festivals">
                <FestivalsTab />
              </TabsContent>

              <TabsContent value="cuisine">
                <CuisineTab />
              </TabsContent>

              <TabsContent value="lifestyle">
                <LifestyleTab />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Cultural Diversity */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Sự đa dạng văn hóa miền Nam
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Khám phá sự giao thoa văn hóa độc đáo giữa các dân tộc tại miền Nam Việt Nam
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Văn hóa người Việt miền Nam</CardTitle>
                <CardDescription>Nét đặc trưng của người Việt vùng đồng bằng sông Cửu Long</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Người Việt miền Nam có lối sống gắn liền với sông nước, với những nét văn hóa đặc trưng như đờn ca tài
                  tử, hò vè, các lễ hội nông nghiệp và tín ngưỡng thờ Mẫu. Họ có tính cách cởi mở, phóng khoáng và rất
                  mến khách, với các hoạt động và lối sống sôi động và nhộn nhịp về đêm
                </p>
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src={VH}
                    alt="Văn hóa người Việt miền Nam"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Văn hóa người Hoa ở Chợ Lớn</CardTitle>
                <CardDescription>Dấu ấn văn hóa Trung Hoa tại Sài Gòn - Chợ Lớn</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Người Hoa đã có mặt ở miền Nam Việt Nam từ rất sớm và để lại nhiều dấu ấn văn hóa đặc sắc, đặc biệt là
                  ở khu vực Chợ Lớn (TP.HCM). Văn hóa người Hoa thể hiện qua kiến trúc đền chùa, ẩm thực, lễ hội và các
                  phong tục tập quán đặc trưng.
                </p>
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image src={TQ} alt="Văn hóa người Hoa ở Chợ Lớn" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/10 py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Khám phá miền Nam Việt Nam
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Hãy đến và trải nghiệm nét đẹp văn hóa đa dạng, phóng khoáng của vùng đất phương Nam
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/destinations?region=mienNam">
                <Button size="lg">Khám phá điểm đến</Button>
              </Link>
              <Link href="/cuisine?region=mienNam">
                <Button size="lg" variant="outline">
                  Khám phá ẩm thực
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

