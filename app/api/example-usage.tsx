"use client"

import { useState, useEffect } from "react"
import type { Destination } from "@/lib/api/types"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExampleUsage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true)
        // Giả lập gọi API vì chưa có backend thực
        // const response = await api.destinations.getAllDestinations({
        //   limit: 10,
        //   page: 1,
        // })

        // Dữ liệu mẫu
        setTimeout(() => {
          setDestinations([
            {
              id: 1,
              name: "Vịnh Hạ Long",
              location: "Quảng Ninh",
              description: "Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi hùng vĩ giữa biển khơi.",
              image: "/images/ha-long-bay.jpg",
              category: "natural",
              region: "north",
            },
            {
              id: 2,
              name: "Phố cổ Hội An",
              location: "Quảng Nam",
              description: "Phố cổ xinh đẹp với kiến trúc độc đáo và những chiếc đèn lồng đầy màu sắc.",
              image: "/images/hoi-an.png",
              category: "nhanTao",
              region: "central",
            },
            {
              id: 3,
              name: "Sapa",
              location: "Lào Cai",
              description: "Thị trấn trong mây với những thửa ruộng bậc thang tuyệt đẹp và văn hóa dân tộc đặc sắc.",
              image: "/images/sapa.png",
              category: "natural",
              region: "north",
            },
          ])
          setLoading(false)
        }, 1000)

        setError(null)
      } catch (err) {
        console.error("Error fetching destinations:", err)
        setError("Không thể tải dữ liệu điểm đến. Vui lòng thử lại sau.")
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/destinations-hero.png')" }}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Ví dụ sử dụng API
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Minh họa cách gọi API trong dự án Khám Phá Việt Nam
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Dữ liệu từ API</h2>

              {loading && (
                <div className="flex items-center justify-center h-40 bg-muted rounded-lg">
                  <p className="text-muted-foreground">Đang tải dữ liệu...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                  <p>{error}</p>
                </div>
              )}

              {!loading && !error && (
                <div className="grid gap-4">
                  {destinations.map((destination) => (
                    <Card key={destination.id}>
                      <CardHeader>
                        <CardTitle>{destination.name}</CardTitle>
                        <CardDescription>{destination.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{destination.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Mã ví dụ</h2>
              <div className="bg-muted p-4 rounded-lg overflow-auto max-h-[500px]">
                <pre className="text-sm">
                  {`
// Lấy tất cả điểm đến
const response = await api.destinations.getAllDestinations();
const destinations = response.data;

// Lấy điểm đến theo ID
const response = await api.destinations.getDestinationById(1);
const destination = response.data;

// Lấy điểm đến theo danh mục
const response = await api.destinations.getDestinationsByCategory('beach');
const beachDestinations = response.data;

// Lấy điểm đến theo vùng miền
const response = await api.destinations.getDestinationsByRegion('north');
const northDestinations = response.data;

// Lấy tất cả món ăn
const response = await api.cuisine.getAllFoods();
const foods = response.data;

// Đăng nhập
const response = await api.auth.login({
  email: 'user@example.com',
  password: 'password123'
});
const { user, token } = response.data;
                  `}
                </pre>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Sử dụng với React Hooks</h3>
                <div className="bg-muted p-4 rounded-lg overflow-auto">
                  <pre className="text-sm">
                    {`
import { useDestinations } from '@/lib/api/hooks';

function DestinationsComponent() {
  const { 
    destinations, 
    isLoading, 
    error, 
    fetchDestinations 
  } = useDestinations();
  
  useEffect(() => {
    fetchDestinations({ limit: 10, page: 1 });
  }, [fetchDestinations]);
  
  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;
  
  return (
    <div>
      <h1>Điểm đến du lịch</h1>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>
    </div>
  );
}
                    `}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
