'use client'
import { FoodCard } from "@/components/food-card"
import api from "@/lib/api";
import { Foods } from "@/types";
import { useEffect, useState } from "react";

export function PopularFoods() {
    const [loading, setLoading] = useState(true);
    const [foods, setFoods] = useState<Foods[]>([]);
    const [error, setError] = useState<string | null>(null);
  // Get 4 popular foods

     useEffect(() => {
       const fetchDestinations = async () => {
         try {
           setLoading(true);
           const response =  await api.cuisine.getAllFoods();
           console.log('response',response)
           setFoods(response.data);
   
         } catch (err) {
           console.error("Error fetching destinations:", err);
           setError("Không thể tải dữ liệu điểm đến. Vui lòng thử lại sau.");
           setLoading(false);
         }
       };
   
       fetchDestinations();
     }, []);
  const popularFoods = foods.slice(0, 4)

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {popularFoods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  )
}
