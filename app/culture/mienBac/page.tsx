import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import VHMienBac from "@/app/asset/images/van-hoa-mien-bac.png";
import VHMBBanner from '@/app/asset/images/van-hoa-mb-banner.webp'
import { FestivalsTab } from "./components/FestivalsTab"
import { CuisineTab } from "./components/CuisineTab"
import { HeritageTab } from "./components/HeritageTab"
import { CraftsTab } from "./components/CraftsTab"
import VH from "@/app/asset/images/dancaqh.png"
import TQ from "@/app/asset/images/vo-cheo.jpg"
export default async function NorthCulturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[40vh] bg-auto bg-center"
            style={{ backgroundImage: `url(${VHMBBanner.src})` }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Văn Hóa Miền Bắc
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Khám phá nét đẹp văn hóa đặc sắc của vùng đất ngàn năm văn hiến
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Tổng Quan
              </h2>
              <p className="text-muted-foreground mb-4">
                Miền Bắc Việt Nam là cái nôi của nền văn minh Việt, nơi lưu giữ
                những giá trị văn hóa truyền thống lâu đời nhất của dân tộc. Với
                lịch sử hàng nghìn năm dựng nước và giữ nước, miền Bắc đã hình
                thành nên một nền văn hóa đặc sắc, đa dạng và phong phú.
              </p>
              <p className="text-muted-foreground mb-4">
                Văn hóa miền Bắc mang đậm tính nông nghiệp lúa nước, với những
                làng quê truyền thống, những phong tục tập quán gắn liền với mùa
                màng và đời sống cộng đồng. Đây cũng là nơi lưu giữ nhiều di sản
                văn hóa vật thể và phi vật thể quý giá của dân tộc.
              </p>
              <p className="text-muted-foreground">
                Người miền Bắc nổi tiếng với tính cách cần cù, chịu khó, tiết
                kiệm và trọng lễ nghĩa. Văn hóa ứng xử, giao tiếp của người miền
                Bắc thường mang tính truyền thống, coi trọng lễ nghi, phép tắc
                và quan hệ dòng họ.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={VHMienBac}
                alt="Văn hóa miền Bắc"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Cultural Categories */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <Tabs defaultValue="festivals" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="festivals">
                    Lễ hội truyền thống
                  </TabsTrigger>
                  <TabsTrigger value="cuisine">Ẩm thực</TabsTrigger>
                  <TabsTrigger value="heritage">Di sản văn hóa</TabsTrigger>
                  <TabsTrigger value="crafts">
                    Làng nghề truyền thống
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="festivals">
                <FestivalsTab />
              </TabsContent>

              <TabsContent value="cuisine">
                <CuisineTab />
              </TabsContent>

              <TabsContent value="heritage">
                <HeritageTab />
              </TabsContent>

              <TabsContent value="crafts">
                <CraftsTab />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Folk Music and Art */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Âm nhạc và nghệ thuật dân gian
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Khám phá những làn điệu dân ca và nghệ thuật truyền thống đặc sắc
              của miền Bắc
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quan họ Bắc Ninh</CardTitle>
                <CardDescription>
                  Di sản văn hóa phi vật thể của nhân loại
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Quan họ là loại hình dân ca đặc sắc của vùng Kinh Bắc, được
                  UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại.
                  Quan họ thường được hát đối đáp giữa nam và nữ, với những làn
                  điệu ngọt ngào, sâu lắng.
                </p>
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src={VH}
                    alt="Quan họ Bắc Ninh"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hát Chèo</CardTitle>
                <CardDescription>
                  Nghệ thuật sân khấu dân gian truyền thống
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Chèo là loại hình nghệ thuật sân khấu dân gian truyền thống
                  của Việt Nam, đặc biệt phổ biến ở miền Bắc. Chèo kết hợp nhiều
                  yếu tố nghệ thuật như ca, múa, nhạc và kịch, thường phản ánh
                  đời sống và tâm tư của người dân lao động.
                </p>
                <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <Image
                    src={TQ}
                    alt="Hát Chèo"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/10 py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Khám phá miền Bắc Việt Nam
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Hãy đến và trải nghiệm nét đẹp văn hóa đặc sắc của vùng đất ngàn
              năm văn hiến
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/destinations?region=mienBac">
                <Button size="lg">Khám phá điểm đến</Button>
              </Link>
              <Link href="/cuisine?region=mienBac">
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
  );
}
