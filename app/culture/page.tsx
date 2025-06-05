import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VHMienBac from "../asset/images/van-hoa-mien-bac.png";
import VHMienTrung from "../asset/images/van-hoa-mien-trung.jpg";
import VHMienNam from "../asset/images/van-hoa-mine-nam.jpg";
import VH3Mien from "../asset/images/sac-mau-tet-ba-mien.jpg";
import  Img3Mien from "../asset/images/3-mien.jpg";

export default function CulturePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[40vh] bg-auto bg-center"
            style={{ backgroundImage: `url(${VH3Mien.src})` }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Văn Hóa Việt Nam
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Khám phá nét đẹp văn hóa đặc sắc của ba miền Bắc - Trung - Nam
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Nét Đẹp Văn Hóa Việt Nam
              </h2>
              <p className="text-muted-foreground mb-4">
                Việt Nam là quốc gia có nền văn hóa lâu đời và đa dạng, được
                hình thành qua hàng nghìn năm lịch sử. Văn hóa Việt Nam là sự
                kết hợp hài hòa giữa các giá trị truyền thống và hiện đại, giữa
                bản sắc dân tộc và tinh hoa văn hóa thế giới.
              </p>
              <p className="text-muted-foreground mb-4">
                Mỗi vùng miền của Việt Nam đều có những nét văn hóa đặc trưng
                riêng, tạo nên bức tranh văn hóa đa dạng và phong phú. Từ văn
                hóa cổ truyền đậm đà bản sắc dân tộc của miền Bắc, văn hóa cung
                đình tinh tế của miền Trung đến văn hóa đa dạng, phóng khoáng
                của miền Nam.
              </p>
              <p className="text-muted-foreground">
                Hãy cùng chúng tôi khám phá nét đẹp văn hóa đặc sắc của ba miền
                Bắc - Trung - Nam để hiểu hơn về đất nước và con người Việt Nam.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={Img3Mien}
                alt="Văn hóa Việt Nam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Regional Culture */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Văn Hóa Ba Miền
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Khám phá nét đẹp văn hóa đặc sắc của ba miền Bắc - Trung - Nam
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {regions.map((region) => (
                <Card key={region.id} className="overflow-hidden">
                  <div className="relative h-60">
                    <Image
                      src={
                        region.image || `/placeholder.svg?height=240&width=400`
                      }
                      alt={region.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{region.name}</CardTitle>
                    <CardDescription>{region.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {region.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/culture/${region.id}`}>
                      <Button>Khám phá thêm</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Heritage */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Di Sản Văn Hóa
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Khám phá những di sản văn hóa vật thể và phi vật thể của Việt Nam
              được UNESCO công nhận
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {heritages.map((heritage) => (
              <Card key={heritage.name} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={heritage.image || "/placeholder.svg"}
                    alt={heritage.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{heritage.name}</CardTitle>
                  <CardDescription>{heritage.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {heritage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/10 py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Khám phá văn hóa Việt Nam
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Hãy đến và trải nghiệm nét đẹp văn hóa đặc sắc của đất nước Việt
              Nam
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/destinations">
                <Button size="lg">Khám phá điểm đến</Button>
              </Link>
              <Link href="/cuisine">
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

const regions = [
  {
    id: "mienBac",
    name: "Miền Bắc",
    description:
      "Văn hóa đậm đà bản sắc dân tộc với lịch sử lâu đời, lễ hội truyền thống và ẩm thực đặc sắc",
    image: VHMienBac,
    features: [
      "Lễ hội truyền thống: Hội Lim, Hội Gióng, Hội Đền Hùng",
      "Ẩm thực: Phở, Bún chả, Bánh cuốn",
      "Di tích lịch sử: Hoàng thành Thăng Long, Văn Miếu Quốc Tử Giám",
      "Làng nghề truyền thống: Làng gốm Bát Tràng, Làng lụa Vạn Phúc",
    ],
  },
  {
    id: "mienTrung",
    name: "Miền Trung",
    description:
      "Vùng đất của di sản văn hóa thế giới, cố đô Huế và những làn điệu dân ca đặc sắc",
    image: VHMienTrung,
    features: [
      "Di sản văn hóa: Cố đô Huế, Phố cổ Hội An, Thánh địa Mỹ Sơn",
      "Âm nhạc: Ca Huế, Hò Quảng, Bài Chòi",
      "Ẩm thực: Bún bò Huế, Mì Quảng, Bánh xèo",
      "Nghề truyền thống: Nghề làm nón lá, Làng nghề mộc Kim Bồng",
    ],
  },
  {
    id: "mienNam",
    name: "Miền Nam",
    description:
      "Vùng đất trẻ trung, năng động với văn hóa đa dạng, phóng khoáng và giao thoa nhiều nền văn hóa",
    image: VHMienNam,
    features: [
      "Âm nhạc: Đờn ca tài tử, Cải lương",
      "Lễ hội: Lễ hội Nghinh Ông, Lễ hội Bà Chúa Xứ",
      "Ẩm thực: Hủ tiếu Nam Vang, Bánh tráng trộn, Cơm tấm",
      "Văn hóa sông nước: Chợ nổi Cái Răng, Văn hóa miệt vườn",
    ],
  },
];

const heritages = [
  {
    name: "Vịnh Hạ Long",
    type: "Di sản thiên nhiên thế giới",
    description:
      "Vịnh Hạ Long được UNESCO công nhận là Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi.",
    image: "/images/ha-long-bay.jpg",
  },
  {
    name: "Phố cổ Hội An",
    type: "Di sản văn hóa thế giới",
    description:
      "Phố cổ Hội An là một thương cảng quốc tế sầm uất một thời, nay là di sản văn hóa thế giới.",
    image: "/images/hoi-an.png",
  },
  {
    name: "Nhã nhạc cung đình Huế",
    type: "Di sản văn hóa phi vật thể",
    description:
      "Nhã nhạc cung đình Huế là loại hình âm nhạc được biểu diễn trong các nghi lễ của triều đình nhà Nguyễn.",
    image: "/images/nha-nhac.png",
  },
  {
    name: "Đờn ca tài tử Nam Bộ",
    type: "Di sản văn hóa phi vật thể",
    description:
      "Đờn ca tài tử là loại hình âm nhạc dân gian đặc trưng của miền Nam Việt Nam.",
    image: "/images/don-ca-tai-tu.png",
  },
  {
    name: "Quần thể danh thắng Tràng An",
    type: "Di sản hỗn hợp",
    description:
      "Quần thể danh thắng Tràng An là di sản hỗn hợp đầu tiên của Việt Nam được UNESCO công nhận.",
    image: "/images/trang-an.png",
  },
  {
    name: "Hoàng thành Thăng Long",
    type: "Di sản văn hóa thế giới",
    description:
      "Hoàng thành Thăng Long là trung tâm chính trị của Việt Nam trong hơn 1000 năm lịch sử.",
    image: "/images/thang-long.png",
  },
];
