import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Destination } from "@/types";
import api from "@/lib/api";
import AddressTravel from '@/app/asset/images/diem-du-lich.jpg'
import { DestinationsTabs } from "./components/destinations-tabs";

// Số lượng item hiển thị ban đầu
const INITIAL_ITEMS_COUNT = 8;
// Số lượng item hiển thị thêm mỗi lần nhấn "Xem thêm"
const ITEMS_PER_ROW = 4;

export default async function DestinationsPage({
  searchParams,
}: {
  searchParams: { category?: string; region?: string };
}) {
  // Lấy dữ liệu từ server
  const response = await api.destinations.getAllDestinations();
  const destinations = response.data;

  const categoryParam = searchParams.category;
  const regionParam = searchParams.region;
  const activeTab = categoryParam || "all";

  // Lọc destinations dựa trên category và region
  let filteredDestinations = [...destinations];

  if (regionParam) {
    filteredDestinations = filteredDestinations.filter(
      (d) => d.attributes.region === regionParam
    );
  }

  if (activeTab !== "all") {
    filteredDestinations = filteredDestinations.filter(
      (d) => d.attributes.category === activeTab
    );
  }

  // Danh sách các điểm đến hiển thị ban đầu
  const visibleDestinations = filteredDestinations.slice(0, INITIAL_ITEMS_COUNT);
  const hasMore = filteredDestinations.length > INITIAL_ITEMS_COUNT;

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
          <DestinationsTabs
            destinations={filteredDestinations}
            activeTab={activeTab}
            visibleDestinations={visibleDestinations}
            hasMore={hasMore}
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
