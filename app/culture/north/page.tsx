"use client";
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
import { useEffect, useState } from "react";
import { Festivals, Foods, Heritages, TraditionalVillages } from "@/types";
import api from "@/lib/api";
import { getUrl } from "@/app/common/utils";
import VHMBBanner from '@/app/asset/images/van-hoa-mb-banner.webp'

export default function NorthCulturePage() {
  const [cuisine, setCuisine] = useState<Foods[]>([]);
  const [festival, setFestivals] = useState<Festivals[]>([]);
  const [crafts, setCrafts] = useState<TraditionalVillages[]>([]);
  const [heritage, setHeritage] = useState<Heritages[]>([]);

  const [activeTab, setActiveTab] = useState("festivals");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === "cuisine") {
          const data = await api.cuisine.getFoodsByRegion("mienBac");
          setCuisine(data);
        } else if (activeTab === "festivals") {
          const data = await api.festival.getFestivalByRegion("mienBac");
          setFestivals(data);
        } else if (activeTab === "crafts") {
          const data =
            await api.traditionalVillage.getTraditionalVillageByRegion(
              "mienBac"
            );
          setCrafts(data);
        } else if (activeTab === "heritage") {
          const data = await api.heritage.getHeritageByRegion("mienBac");
          setHeritage(data);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu tab:", error);
      }
    };

    fetchData();
  }, [activeTab]);
  console.log("cusine", cuisine);
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
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {festival.map((item) => {
                    const imageData = item?.attributes?.image?.data?.attributes;
                    const imageUrl = getUrl(imageData?.url);
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
                          <CardDescription>
                            {item.attributes.origin}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.attributes.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="cuisine">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cuisine.map((item) => {
                    const imageData = item?.attributes?.image?.data?.attributes;
                    const imageUrl = getUrl(imageData?.url);
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
                          <CardDescription>
                            {item.attributes.origin}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.attributes.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="heritage">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {heritage.map((item) => {
                    const imageData = item?.attributes?.image?.data?.attributes;
                    const imageUrl = getUrl(imageData?.url);
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
                          <CardDescription>
                            {item.attributes.origin}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.attributes.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="crafts">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {crafts.map((item) => {
                    const imageData = item?.attributes?.image?.data?.attributes;
                    const imageUrl = getUrl(imageData?.url);
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
                          <CardDescription>
                            {item.attributes.origin}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.attributes.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
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
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/quan-ho.png"
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
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/hat-cheo.png"
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
              <Link href="/destinations?region=north">
                <Button size="lg">Khám phá điểm đến</Button>
              </Link>
              <Link href="/cuisine?region=north">
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

// const festivals = [
//   {
//     name: "Hội Lim",
//     time: "Tháng 1-2 Âm lịch",
//     description:
//       "Hội Lim là lễ hội truyền thống của vùng Kinh Bắc, nổi tiếng với các làn điệu quan họ đặc sắc và các trò chơi dân gian.",
//     image: "/images/hoi-lim.png",
//   },
//   {
//     name: "Hội Gióng",
//     time: "Tháng 1 và tháng 4 Âm lịch",
//     description:
//       "Hội Gióng tưởng nhớ người anh hùng Thánh Gióng, một trong Tứ bất tử trong tín ngưỡng dân gian Việt Nam.",
//     image: "/images/hoi-giong.png",
//   },
//   {
//     name: "Hội Đền Hùng",
//     time: "Mùng 10 tháng 3 Âm lịch",
//     description:
//       "Lễ hội lớn nhất cả nước tưởng nhớ các Vua Hùng - những người đã có công dựng nước và giữ nước.",
//     image: "/images/hoi-den-hung.png",
//   },
// ];

// const cuisine = [
//   {
//     name: "Phở",
//     origin: "Hà Nội",
//     description: "Món ăn truyền thống của Việt Nam với nước dùng thơm ngon, bánh phở mềm và thịt bò tái hoặc chín.",
//     image: "/images/pho.png",
//   },
//   {
//     name: "Bún chả",
//     origin: "Hà Nội",
//     description: "Bún ăn kèm với chả thịt lợn nướng, rau sống và nước mắm chua ngọt đặc trưng.",
//     image: "/images/bun-cha.png",
//   },
//   {
//     name: "Bánh cuốn Thanh Trì",
//     origin: "Hà Nội",
//     description: "Bánh cuốn mỏng, mềm, được làm từ bột gạo hấp, nhân thịt băm và nấm mèo.",
//     image: "/images/banh-cuon.png",
//   },
// ]

// const heritage = [
//   {
//     name: "Hoàng thành Thăng Long",
//     location: "Hà Nội",
//     description: "Di sản văn hóa thế giới, là trung tâm chính trị của Việt Nam trong hơn 1000 năm lịch sử.",
//     image: "/images/thang-long.png",
//   },
//   {
//     name: "Văn Miếu - Quốc Tử Giám",
//     location: "Hà Nội",
//     description: "Trường đại học đầu tiên của Việt Nam, nơi thờ Khổng Tử và các bậc hiền triết Nho giáo.",
//     image: "/images/van-mieu.png",
//   },
//   {
//     name: "Chùa Bút Tháp",
//     location: "Bắc Ninh",
//     description: "Ngôi chùa cổ với kiến trúc độc đáo và nhiều tượng Phật nghệ thuật quý giá từ thế kỷ 17.",
//     image: "/images/chua-but-thap.png",
//   },
// ]

// const crafts = [
//   {
//     name: "Làng gốm Bát Tràng",
//     location: "Hà Nội",
//     description:
//       "Làng nghề gốm sứ truyền thống với lịch sử hơn 700 năm, nổi tiếng với các sản phẩm gốm sứ tinh xảo.",
//     image: "/images/bat-trang.png",
//   },
//   {
//     name: "Làng lụa Vạn Phúc",
//     location: "Hà Nội",
//     description:
//       "Làng nghề dệt lụa truyền thống với các sản phẩm lụa cao cấp được dệt và thêu thủ công.",
//     image: "/images/van-phuc.png",
//   },
//   {
//     name: "Làng tranh Đông Hồ",
//     location: "Bắc Ninh",
//     description:
//       "Làng nghề làm tranh dân gian truyền thống, nổi tiếng với các bức tranh in màu trên giấy dó.",
//     image: "/images/dong-ho.png",
//   },
// ];
