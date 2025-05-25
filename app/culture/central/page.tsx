import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import VHMienTrung from "@/app/asset/images/van-hoa-mien-trung.jpg"

export default function CentralCulturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/central-vietnam-hero.png')" }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Văn Hóa Miền Trung
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Khám phá nét đẹp văn hóa đặc sắc của vùng đất cố đô và di sản
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Tổng Quan</h2>
              <p className="text-muted-foreground mb-4">
                Miền Trung Việt Nam là vùng đất giàu bản sắc văn hóa với nhiều di sản văn hóa thế giới được UNESCO công
                nhận. Đây là nơi từng là kinh đô của các triều đại phong kiến Việt Nam trong suốt nhiều thế kỷ, để lại
                dấu ấn sâu đậm trong văn hóa, kiến trúc và đời sống tinh thần của người dân.
              </p>
              <p className="text-muted-foreground mb-4">
                Văn hóa miền Trung mang đậm tính hoàng tộc, cung đình với những giá trị nghệ thuật tinh tế, sang trọng.
                Bên cạnh đó, đây cũng là vùng đất chịu nhiều thiên tai, khó khăn, tạo nên tính cách kiên cường, bền bỉ
                của người dân miền Trung.
              </p>
              <p className="text-muted-foreground">
                Người miền Trung nổi tiếng với tính cách chân thành, mộc mạc, cần cù và kiên nhẫn. Họ có lối sống giản
                dị nhưng rất trọng tình nghĩa và giàu lòng hiếu khách.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={VHMienTrung} alt="Văn hóa miền Trung" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Cultural Categories */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <Tabs defaultValue="heritage" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="heritage">Di sản văn hóa</TabsTrigger>
                  <TabsTrigger value="music">Âm nhạc truyền thống</TabsTrigger>
                  <TabsTrigger value="cuisine">Ẩm thực</TabsTrigger>
                  <TabsTrigger value="crafts">Nghề truyền thống</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="heritage">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {heritage.map((item) => (
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

              <TabsContent value="music">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {music.map((item) => (
                    <Card key={item.name}>
                      <div className="relative h-48">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.origin}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cuisine">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {cuisine.map((item) => (
                    <Card key={item.name}>
                      <div className="relative h-48">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.origin}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crafts">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {crafts.map((item) => (
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

        {/* Royal Court Culture */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Văn hóa cung đình Huế</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Khám phá nét đẹp tinh tế, sang trọng của văn hóa cung đình triều Nguyễn
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Nhã nhạc cung đình Huế</CardTitle>
                <CardDescription>Di sản văn hóa phi vật thể của nhân loại</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nhã nhạc cung đình Huế là loại hình âm nhạc được biểu diễn trong các nghi lễ, tiệc tùng và giải trí
                  của triều đình nhà Nguyễn. Năm 2003, UNESCO đã công nhận Nhã nhạc cung đình Huế là Kiệt tác truyền
                  khẩu và di sản văn hóa phi vật thể của nhân loại.
                </p>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/images/nha-nhac.png" alt="Nhã nhạc cung đình Huế" fill className="object-cover" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ẩm thực cung đình Huế</CardTitle>
                <CardDescription>Nghệ thuật ẩm thực tinh tế của hoàng gia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ẩm thực cung đình Huế là sự kết tinh của nghệ thuật nấu nướng tinh tế, được chế biến công phu với
                  nhiều nguyên liệu quý hiếm để phục vụ vua chúa và hoàng gia. Các món ăn không chỉ ngon miệng mà còn
                  đẹp mắt, thể hiện sự sang trọng và đẳng cấp của triều đình.
                </p>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/am-thuc-cung-dinh.png"
                    alt="Ẩm thực cung đình Huế"
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
              Khám phá miền Trung Việt Nam
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Hãy đến và trải nghiệm nét đẹp văn hóa đặc sắc của vùng đất cố đô và di sản
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/destinations?region=central">
                <Button size="lg">Khám phá điểm đến</Button>
              </Link>
              <Link href="/cuisine?region=central">
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

const heritage = [
  {
    name: "Cố đô Huế",
    location: "Thừa Thiên Huế",
    description: "Di sản văn hóa thế giới với hệ thống kiến trúc cung đình, lăng tẩm và đền chùa của triều Nguyễn.",
    image: "/images/hue.png",
  },
  {
    name: "Phố cổ Hội An",
    location: "Quảng Nam",
    description: "Thương cảng quốc tế sầm uất một thời, nay là di sản văn hóa thế giới với kiến trúc độc đáo.",
    image: "/images/hoi-an.png",
  },
  {
    name: "Thánh địa Mỹ Sơn",
    location: "Quảng Nam",
    description: "Quần thể đền tháp Chăm Pa cổ, là di sản văn hóa thế giới với kiến trúc tôn giáo độc đáo.",
    image: "/images/my-son.png",
  },
]

const music = [
  {
    name: "Ca Huế",
    origin: "Huế",
    description: "Loại hình ca nhạc truyền thống của xứ Huế, thường được biểu diễn trên thuyền rồng trên sông Hương.",
    image: "/images/ca-hue.png",
  },
  {
    name: "Hò Quảng",
    origin: "Quảng Nam, Quảng Ngãi",
    description: "Làn điệu dân ca đặc trưng của người dân miền Trung, thường được hát trong lúc lao động.",
    image: "/images/ho-quang.png",
  },
  {
    name: "Bài Chòi",
    origin: "Bình Định, Phú Yên",
    description: "Di sản văn hóa phi vật thể của nhân loại, kết hợp giữa trò chơi dân gian và nghệ thuật biểu diễn.",
    image: "/images/bai-choi.png",
  },
]

const cuisine = [
  {
    name: "Bún bò Huế",
    origin: "Huế",
    description: "Món bún nổi tiếng với nước dùng đậm đà, cay nồng và các loại thịt bò, giò heo, chả Huế.",
    image: "/images/bun-bo-hue.png",
  },
  {
    name: "Mì Quảng",
    origin: "Quảng Nam",
    description: "Món mì đặc trưng với sợi mì dày, nước dùng ít, nhiều loại rau sống và bánh tráng nướng.",
    image: "/images/mi-quang.png",
  },
  {
    name: "Bánh xèo miền Trung",
    origin: "Miền Trung",
    description: "Bánh xèo miền Trung có kích thước nhỏ hơn, giòn hơn và được ăn kèm với nước mắm chua ngọt.",
    image: "/images/banh-xeo-mien-trung.png",
  },
]

const crafts = [
  {
    name: "Nghề làm nón lá",
    location: "Huế",
    description: "Nghề thủ công truyền thống làm nón lá Huế với kỹ thuật đặc biệt và hoa văn tinh tế.",
    image: "/images/non-la.png",
  },
  {
    name: "Làng nghề mộc Kim Bồng",
    location: "Quảng Nam",
    description: "Làng nghề mộc truyền thống với các sản phẩm đồ gỗ tinh xảo, đặc biệt là đồ gỗ nội thất và thuyền.",
    image: "/images/moc-kim-bong.png",
  },
  {
    name: "Nghề dệt chiếu Cẩm Nê",
    location: "Thừa Thiên Huế",
    description: "Nghề dệt chiếu truyền thống với kỹ thuật dệt hoa văn tinh xảo, tạo nên những tấm chiếu đẹp và bền.",
    image: "/images/chieu-cam-ne.png",
  },
]
