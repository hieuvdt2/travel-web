"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FoodCard } from "@/components/food-card";
// import { foods } from "@/data/foods";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import api from "@/lib/api";
import { Food, Foods } from "@/types";
import AddressTravel from '@/app/asset/images/am-thuc.jpeg'

const VALID_REGIONS = ["all", "mienBac", "mienTrung", "mienNam"];

export default function CuisinePage() {
  const searchParams = useSearchParams();
  const regionFromUrl = searchParams.get("region");

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState<Foods[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Delay render cho đến khi có region hợp lệ
  useEffect(() => {
    const region = VALID_REGIONS.includes(regionFromUrl || "")
      ? regionFromUrl
      : "all";
    setSelectedRegion(region);
  }, [regionFromUrl]);
//  console.log('foddsss',foods)
  const northernFoods = foods.filter((food) => food.attributes.regions.includes("mienBac"));
  const centralFoods = foods.filter((food) =>food.attributes.regions.includes("mienTrung"));
  const southernFoods = foods.filter((food) =>food.attributes.regions.includes("mienNam"));
  console.log('')
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response =  await api.cuisine.getAllFoods();
        console.log('response',response)
        setFoods(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError("Không thể tải dữ liệu điểm đến. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
       <section className="relative">
   <div className="absolute inset-0 bg-black/25 z-10" />
          <div
            className="h-[40vh] bg-contain bg-center"
           style={{ backgroundImage: `url(${AddressTravel.src})` }} 
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
           Ẩm thực Việt Nam
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Khám phá các món ăn truyền thống và hiện đại tại Việt Nam
            </p>
          </div>
        </section>
        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ẩm Thực Việt Nam
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Khám phá những món ăn ngon nhất định phải thử khi đến Việt Nam
            </p>
          </div>

          {selectedRegion ? (
            <Tabs
              value={selectedRegion}
              onValueChange={setSelectedRegion}
              className="mt-8"
            >
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">Tất cả</TabsTrigger>
                  <TabsTrigger value="mienBac">Miền Bắc</TabsTrigger>
                  <TabsTrigger value="mienTrung">Miền Trung</TabsTrigger>
                  <TabsTrigger value="mienNam">Miền Nam</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {foods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mienBac">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {northernFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mienTrung">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {centralFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mienNam">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {southernFoods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="mt-12 flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}
        </section>
        <section className="bg-accent py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Văn Hóa Ẩm Thực Việt Nam
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Khám phá nét đặc sắc trong văn hóa ẩm thực của người Việt
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Hài hòa ngũ vị</h3>
                <p className="text-muted-foreground">
                  Ẩm thực Việt Nam luôn chú trọng đến sự cân bằng giữa các vị
                  chua, cay, mặn, ngọt, đắng, tạo nên hương vị đặc trưng và hài
                  hòa trong mỗi món ăn.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">
                  Tươi ngon và tự nhiên
                </h3>
                <p className="text-muted-foreground">
                  Người Việt Nam ưa chuộng sử dụng nguyên liệu tươi ngon, tự
                  nhiên và ít qua chế biến. Rau sống, thảo mộc tươi là thành
                  phần không thể thiếu trong bữa ăn hàng ngày.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Văn hóa chia sẻ</h3>
                <p className="text-muted-foreground">
                  Bữa ăn của người Việt thường là dịp để gia đình, bạn bè quây
                  quần bên nhau. Các món ăn được bày giữa bàn để mọi người cùng
                  thưởng thức và chia sẻ.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
