"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DestinationCard } from "@/components/destination-card";
import type { Destination } from "@/types";
import api from "@/lib/api";
import AddressTravel from '@/app/asset/images/diem-du-lich.jpg'

// import { destinations } from "@/data/destinations"

// Số lượng item hiển thị ban đầu
const INITIAL_ITEMS_COUNT = 8;
// Số lượng item hiển thị thêm mỗi lần nhấn "Xem thêm"
const ITEMS_PER_ROW = 4;

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const regionParam = searchParams.get("region");

  const [activeTab, setActiveTab] = useState("all");
  const [filteredDestinations, setFilteredDestinations] =
    useState<Destination[]>(destinations);
  const [visibleItemsCount, setVisibleItemsCount] =
    useState(INITIAL_ITEMS_COUNT);
  const [showAll, setShowAll] = useState(false);
   
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response =  await api.destinations.getAllDestinations();
        console.log('response',response)
        setDestinations(response.data);

      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError("Không thể tải dữ liệu điểm đến. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Thêm useEffect mới để xử lý category từ URL
  useEffect(() => {
    if (categoryParam) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    let filtered = [...destinations];

    // Xử lý lọc theo region nếu có
    if (regionParam) {
      filtered = filtered.filter((d) => d.attributes.region === regionParam);
    }

    // Xử lý lọc theo category
    if (activeTab !== "all") {
      filtered = filtered.filter((d) => d.attributes.category === activeTab);
    }

    setFilteredDestinations(filtered);
    
    // Reset số lượng item hiển thị khi chuyển tab
    setVisibleItemsCount(INITIAL_ITEMS_COUNT);
    setShowAll(false);
  }, [activeTab, categoryParam, regionParam, destinations]);

  // Xử lý khi nhấn nút "Xem thêm"
  const handleShowMore = () => {
    if (visibleItemsCount + ITEMS_PER_ROW >= filteredDestinations.length) {
      setVisibleItemsCount(filteredDestinations.length);
      setShowAll(true);
    } else {
      setVisibleItemsCount(visibleItemsCount + ITEMS_PER_ROW);
    }
  };

  // Xử lý khi nhấn nút "Ẩn bớt"
  const handleShowLess = () => {
    setVisibleItemsCount(INITIAL_ITEMS_COUNT);
    setShowAll(false);
  };

  // Danh sách các điểm đến hiển thị
  const visibleDestinations = filteredDestinations.slice(0, visibleItemsCount);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <div
            className="h-[40vh] bg-contain bg-center"
           style={{ backgroundImage: `url(${AddressTravel.src})` }} 
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Địa Điểm Du Lịch
            </h1>
            <p className="max-w-[700px] text-white/90 md:text-xl mt-4">
              Khám phá những địa điểm du lịch tuyệt vời nhất tại Việt Nam
            </p>
          </div>
        </section>

        {/* Destinations */}
        <section className="container py-12 md:py-16 lg:py-20">
          <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Tất cả</TabsTrigger>
                <TabsTrigger value="tamLinh">Tâm linh</TabsTrigger>
                <TabsTrigger value="bien">Biển</TabsTrigger>
                <TabsTrigger value="tuNhien">Công trình tự nhiên</TabsTrigger>
                <TabsTrigger value="nhanTao">Công trình nhân tạo</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* check */}
                {visibleDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>

              {filteredDestinations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Không tìm thấy địa điểm du lịch nào phù hợp.
                  </p>
                </div>
              )}

              {/* Nút "Xem thêm" hoặc "Ẩn bớt" */}
              {filteredDestinations.length > INITIAL_ITEMS_COUNT && (
                <div className="flex justify-center mt-8">
                  {!showAll &&
                  visibleItemsCount < filteredDestinations.length ? (
                    <Button
                      onClick={handleShowMore}
                      variant="outline"
                      className="gap-2"
                    >
                      <ChevronDown className="h-4 w-4" />
                      Xem thêm
                    </Button>
                  ) : (
                    visibleItemsCount > INITIAL_ITEMS_COUNT && (
                      <Button
                        onClick={handleShowLess}
                        variant="outline"
                        className="gap-2"
                      >
                        <ChevronUp className="h-4 w-4" />
                        Ẩn bớt
                      </Button>
                    )
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
