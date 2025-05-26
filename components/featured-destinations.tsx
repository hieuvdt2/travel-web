"use client";

import { useEffect, useState } from "react";
import { DestinationCard } from "@/components/destination-card";
import type { Destination } from "@/types";
import api from "@/lib/api";
import { Loader2 } from "lucide-react";

interface FeaturedDestinationsProps {
  category: string;
}

export function FeaturedDestinations({ category }: FeaturedDestinationsProps) {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await api.destinations.getDestinationsByCategory(category);
        setDestinations(data.slice(0, 8));
      } catch (err) {
        console.error("Lỗi khi lấy điểm đến:", err);
        setError("Không tải được dữ liệu. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center py-4">
        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        <p>Đang tải dữ liệu vui lòng chờ...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center pt-4">
        <p>{error}</p>
      </div>
    );
  if (destinations.length === 0)
    return (
      <div className="flex justify-center items-center pt-4">
        <p>Không có địa điểm phù hợp.</p>
      </div>
    );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}
