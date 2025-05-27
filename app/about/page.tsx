import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import About from '@/app/asset/images/about.jpg'
import Banner from '@/app/asset/images/about-banner.jpeg'
import User1 from '@/app/asset/images/giam-doc.png'
import User2 from '@/app/asset/images/user-2.jpg'
import User3 from '@/app/asset/images/user-3.jpg'
import User4 from '@/app/asset/images/user-4.jpg'



export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}
          <div className="h-[40vh] bg-contain bg-center" style={{ backgroundImage: `url(${Banner.src})` }} />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            {/* <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Về Chúng Tôi</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">Khám phá câu chuyện và sứ mệnh của chúng tôi</p> */}
          </div>
        </section>

        {/* About Us */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <p className="text-muted-foreground mb-4">
                ViVu VietNam được thành lập vào năm 2017 với mục tiêu giới thiệu và quảng bá vẻ đẹp của Việt Nam
                đến với du khách trong nước và quốc tế. Chúng tôi là một nhóm những người yêu du lịch, đam mê khám phá
                và tự hào về đất nước mình.
              </p>
              <p className="text-muted-foreground mb-4">
                Với hơn 8 năm kinh nghiệm trong lĩnh vực du lịch, chúng tôi đã phục vụ hơn 10,000 khách hàng và tổ chức
                hơn 500 tour du lịch khắp Việt Nam. Chúng tôi tự hào mang đến những trải nghiệm du lịch chất lượng, an
                toàn và đáng nhớ.
              </p>
              <p className="text-muted-foreground">
                Đội ngũ của chúng tôi bao gồm các chuyên gia du lịch, hướng dẫn viên giàu kinh nghiệm và nhân viên tận
                tâm, luôn sẵn sàng hỗ trợ bạn trong mọi hành trình khám phá Việt Nam.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={About} alt="Đội ngũ Khám Phá Việt Nam" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Sứ Mệnh & Tầm Nhìn</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Chúng tôi cam kết mang đến những trải nghiệm du lịch tuyệt vời và quảng bá vẻ đẹp của Việt Nam
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Sứ Mệnh</h3>
                <p className="text-muted-foreground mb-4">
                  Sứ mệnh của chúng tôi là giới thiệu và quảng bá vẻ đẹp tự nhiên, văn hóa và ẩm thực phong phú của Việt
                  Nam đến với du khách trong nước và quốc tế.
                </p>
                <p className="text-muted-foreground">
                  Chúng tôi cam kết cung cấp thông tin chính xác, đầy đủ và hữu ích về các điểm đến du lịch, giúp du
                  khách có những trải nghiệm tuyệt vời khi khám phá Việt Nam.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Tầm Nhìn</h3>
                <p className="text-muted-foreground mb-4">
                  Chúng tôi hướng đến việc trở thành nền tảng thông tin du lịch hàng đầu về Việt Nam, nơi du khách có
                  thể tìm thấy mọi thông tin cần thiết để lên kế hoạch cho chuyến đi của mình.
                </p>
                <p className="text-muted-foreground">
                  Chúng tôi cũng mong muốn góp phần phát triển du lịch bền vững, bảo tồn và phát huy các giá trị văn
                  hóa, lịch sử và tự nhiên của Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Đội Ngũ Của Chúng Tôi</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Gặp gỡ những con người đam mê và tận tâm đằng sau Khám Phá Việt Nam
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground mb-2">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/10 py-12 md:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Hãy Khám Phá Việt Nam Cùng Chúng Tôi
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-8">
              Bạn đã sẵn sàng cho những trải nghiệm du lịch tuyệt vời? Hãy liên hệ với chúng tôi ngay hôm nay!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Đặt Tour Ngay</Button>
              <Button size="lg" variant="outline">
                Liên Hệ Chúng Tôi
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

const teamMembers = [
  {
    name: "Nguyễn Văn A",
    role: "Giám đốc điều hành",
    bio: "Hơn 15 năm kinh nghiệm trong ngành du lịch, đam mê khám phá và chia sẻ vẻ đẹp của Việt Nam.",
    image: User1,
  },
  {
    name: "Trần Thị B",
    role: "Giám đốc tour",
    bio: "Chuyên gia lên kế hoạch tour với 10 năm kinh nghiệm, am hiểu sâu sắc về văn hóa và lịch sử Việt Nam.",
    image: User2,
  },
  {
    name: "Lê Văn C",
    role: "Trưởng bộ phận marketing",
    bio: "Chuyên gia marketing với niềm đam mê quảng bá du lịch Việt Nam ra thế giới.",
    image: User3,
  },
  {
    name: "Phạm Thị D",
    role: "Hướng dẫn viên cấp cao",
    bio: "Hướng dẫn viên giàu kinh nghiệm, thông thạo nhiều ngôn ngữ và am hiểu văn hóa địa phương.",
    image: User4,
  },
]
