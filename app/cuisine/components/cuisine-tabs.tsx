"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodCard } from "@/components/food-card";
import { Foods } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface CuisineTabsProps {
  foods: Foods[];
  selectedRegion: string;
}

export function CuisineTabs({ foods, selectedRegion }: CuisineTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("region", value);
    router.push(`/cuisine?${params.toString()}`);
  };

  const northernFoods = foods.filter((food) => food.attributes.regions.includes("mienBac"));
  const centralFoods = foods.filter((food) => food.attributes.regions.includes("mienTrung"));
  const southernFoods = foods.filter((food) => food.attributes.regions.includes("mienNam"));

  return (
    <Tabs
      value={selectedRegion}
      onValueChange={handleTabChange}
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
  );
} 