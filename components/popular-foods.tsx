"use client";
import { FoodCard } from "@/components/food-card";
import api from "@/lib/api";
import { Foods } from "@/types";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
export function PopularFoods() {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState<Foods[]>([]);
  const [error, setError] = useState<string | null>(null);
  // Get 4 popular foods

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await api.cuisine.getAllFoods();
        console.log("response", response);
        setFoods(response.data);
      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError("Không tải thể tải dữ liệu. Vui lòng thử lại sau!");
        setLoading(false);
      }finally{
        setLoading(false)
      }
    };

    fetchDestinations();
  }, []);
  const popularFoods = foods.slice(0, 4);
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
  if (popularFoods.length === 0)
    return (
      <div className="flex justify-center items-center pt-4">
        <p>Không có dữ liệu.</p>
      </div>
    );
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {popularFoods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
