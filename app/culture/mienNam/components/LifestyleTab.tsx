import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

export async function LifestyleTab() {
  return (
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
  )
} 