'use client'
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useEffect, useState } from "react"
import { Foods, Heritages, TraditionalVillages, Festivals, Musicals } from "@/types"
import api from "@/lib/api"
import { getUrl } from "@/app/common/utils"
import VHMienNam from "@/app/asset/images/van-hoa-mine-nam.jpg"
import VHMienNamBanner from "@/app/asset/images/van-hoa-mien-nam-banner.jpg"
import CaiLuong from "@/app/asset/images/cai-luong.jpg"
import DonCaTaiTu from "@/app/asset/images/don-ca-tai-tu.jpg"
import HoMienNam from "@/app/asset/images/ho-mien-nam.jpg"


export default function SouthCulturePage() {
  const [activeTab, setActiveTab] = useState("festivals");
  const [festivals, setFestivals] = useState<Festivals[]>([]);
  const [cuisine, setCuisine] = useState<Foods[]>([]);
  const [crafts, setCrafts] = useState<TraditionalVillages[]>([]);
  const [heritage, setHeritage] = useState<Heritages[]>([]);
  const [musical, setMusical] = useState<Musicals[]>([]);
  console.log('cuisine',cuisine)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === "cuisine") {
          console.log('activeTab',1)
          const data = await api.cuisine.getFoodsByRegion("mienNam");
          setCuisine(data);
        } else if (activeTab === "festivals") {
          const data = await api.festival.getFestivalByRegion("mienNam");
          setFestivals(data);
        } else if (activeTab === "crafts") {
          const data =
            await api.traditionalVillage.getTraditionalVillageByRegion(
              "mienBac"
            );
          setCrafts(data);
        } else if (activeTab === "music") {
          const data = await api.musical.getMusicalByRegion("mienNam");
          setMusical(data);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu tab:", error);
      }
    };

    fetchData();
  }, [activeTab]);
  console.log('musical',musical)
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
            <Tabs defaultValue="music" className="w-full" value={activeTab}
              onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="music">Âm nhạc dân gian</TabsTrigger>
                  <TabsTrigger value="festivals">Lễ hội</TabsTrigger>
                  <TabsTrigger value="cuisine">Ẩm thực</TabsTrigger>
                  <TabsTrigger value="lifestyle">Văn hóa sông nước</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="music">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {musical.map((item) => {
                    const imageData = item?.attributes?.image?.data?.attributes;
                    const imageUrl = getUrl(imageData?.url);
                    return (
                      <Card key={item.id}>
                        <div className="relative h-48">
                          <Image src={imageUrl || "/placeholder.svg"} alt={item.attributes.image.data.attributes.name} fill className="object-cover" />
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
              </TabsContent>

              <TabsContent value="festivals">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {festivals.map((item) => {
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
              <TabsContent value="lifestyle">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {lifestyle.map((item) => (
                    <Card key={item.name}>
                      <div className="relative h-48">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                  mến khách.
                </p>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/nguoi-viet-mien-nam.png"
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
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/images/cho-lon.png" alt="Văn hóa người Hoa ở Chợ Lớn" fill className="object-cover" />
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

const music = [
  {
    name: "Đờn ca tài tử",
    origin: "Nam Bộ",
    description: "Di sản văn hóa phi vật thể của nhân loại, là loại hình âm nhạc dân gian đặc trưng của miền Nam.",
    image: DonCaTaiTu,
  },
  {
    name: "Cải lương",
    origin: "Nam Bộ",
    description: "Loại hình sân khấu truyền thống của miền Nam, kết hợp giữa ca, nhạc, kịch với âm nhạc tài tử.",
    image: CaiLuong,
  },
  {
    name: "Hò miền Nam",
    origin: "Đồng bằng sông Cửu Long",
    description:
      "Các làn điệu hò đặc trưng của miền Nam như hò lơ, hò đồng tháp, hò cấy, thường được hát trong lúc lao động.",
    image: HoMienNam,
  },
]

// const festivals = [
//   {
//     name: "Lễ hội Nghinh Ông",
//     time: "Tháng 8 Âm lịch",
//     description:
//       "Lễ hội truyền thống của ngư dân miền Nam để tỏ lòng biết ơn và cầu mong Cá Ông (cá Voi) phù hộ cho ngư dân.",
//     image: "/images/nghinh-ong.png",
//   },
//   {
//     name: "Lễ hội Bà Chúa Xứ",
//     time: "Tháng 4-5 Âm lịch",
//     description: "Lễ hội lớn nhất vùng Thất Sơn (An Giang), thờ Bà Chúa Xứ - vị thần được người dân Nam Bộ tôn kính.",
//     image: "/images/ba-chua-xu.png",
//   },
//   {
//     name: "Lễ hội Ok Om Bok",
//     time: "Tháng 10 Âm lịch",
//     description: "Lễ hội truyền thống của người Khmer Nam Bộ để tạ ơn thần Mặt Trăng đã ban cho mùa màng bội thu.",
//     image: "/images/ok-om-bok.png",
//   },
// ]

// const cuisine = [
//   {
//     name: "Hủ tiếu Nam Vang",
//     origin: "Sài Gòn",
//     description:
//       "Món ăn kết hợp giữa văn hóa Việt và Hoa, với sợi hủ tiếu dai, nước dùng trong ngọt và nhiều loại thịt.",
//     image: "/images/hu-tieu.png",
//   },
//   {
//     name: "Bánh tráng trộn",
//     origin: "Sài Gòn",
//     description: "Món ăn vặt đặc trưng của Sài Gòn với bánh tráng cắt sợi trộn với đủ loại gia vị và trứng cút.",
//     image: "/images/banh-trang-tron.png",
//   },
//   {
//     name: "Cơm tấm",
//     origin: "Sài Gòn",
//     description: "Món cơm đặc trưng của Sài Gòn với gạo tấm, sườn nướng, bì, chả, trứng và nước mắm pha đặc biệt.",
//     image: "/images/com-tam.png",
//   },
// ]

const lifestyle = [
  {
    name: "Chợ nổi Cái Răng",
    location: "Cần Thơ",
    description:
      "Chợ nổi truyền thống trên sông, nơi diễn ra các hoạt động mua bán, trao đổi hàng hóa của người dân miền Tây.",
    image: "/images/cho-noi.png",
  },
  {
    name: "Văn hóa miệt vườn",
    location: "Đồng bằng sông Cửu Long",
    description:
      "Nét văn hóa đặc trưng của người dân miền Tây với lối sống gắn liền với vườn cây ăn trái và kênh rạch.",
    image: "/images/miet-vuon.png",
  },
  {
    name: "Làng bè Châu Đốc",
    location: "An Giang",
    description:
      "Nét văn hóa độc đáo của người dân sống trên những căn nhà nổi trên sông, gắn liền với nghề nuôi cá bè.",
    image: "/images/lang-be.png",
  },
]
