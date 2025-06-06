"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { DestinationCard } from "@/components/destination-card";
import type { Destination } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface DestinationsTabsProps {
  destinations: Destination[];
  activeTab: string;
  visibleDestinations: Destination[];
  hasMore: boolean;
}

export function DestinationsTabs({
  destinations,
  activeTab,
  visibleDestinations,
  hasMore,
}: DestinationsTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`/destinations?${params.toString()}`);
  };

  return (
    <Tabs
      defaultValue={activeTab}
      value={activeTab}
      onValueChange={handleTabChange}
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
          {visibleDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

        {destinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Không tìm thấy địa điểm du lịch nào phù hợp.
            </p>
          </div>
        )}

        {/* Nút "Xem thêm" */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="gap-2"
              asChild
            >
              <a href={`/destinations?category=${activeTab}&page=2`}>
                <ChevronDown className="h-4 w-4" />
                Xem thêm
              </a>
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
} 