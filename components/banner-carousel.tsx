"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { Banners } from "@/types";
import { getUrl } from "@/app/common/utils";
import Banner from '../app/asset/images/no-image.jpeg'
import api from "@/lib/api";

// fake data
const fakeBanners: Banners[] = [
 {
      "id": 2,
      "attributes": {
        "title": "",
        "description": "",
        "createdAt": "2025-05-26T13:51:13.131Z",
        "updatedAt": "2025-05-26T13:51:13.767Z",
        "publishedAt": "2025-05-26T13:51:13.765Z",
        "image": {
          "data": {
            "id": 6,
            "attributes": {
              "name": "hoi-an-banner.jpg",
              "alternativeText": null,
              "caption": null,
              "width": 1600,
              "height": 600,
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_hoi-an-banner.jpg",
                  "hash": "thumbnail_hoi_an_banner_d08e187f16",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "path": null,
                  "width": 245,
                  "height": 92,
                  "size": 9.84,
                  "sizeInBytes": 9840,
                  "url": "/uploads/thumbnail_hoi_an_banner_d08e187f16.jpg"
                },
                "small": {
                  "name": "small_hoi-an-banner.jpg",
                  "hash": "small_hoi_an_banner_d08e187f16",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "path": null,
                  "width": 500,
                  "height": 188,
                  "size": 39.67,
                  "sizeInBytes": 39665,
                  "url": "/uploads/small_hoi_an_banner_d08e187f16.jpg"
                },
                "medium": {
                  "name": "medium_hoi-an-banner.jpg",
                  "hash": "medium_hoi_an_banner_d08e187f16",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "path": null,
                  "width": 750,
                  "height": 281,
                  "size": 88.83,
                  "sizeInBytes": 88826,
                  "url": "/uploads/medium_hoi_an_banner_d08e187f16.jpg"
                },
                "large": {
                  "name": "large_hoi-an-banner.jpg",
                  "hash": "large_hoi_an_banner_d08e187f16",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "path": null,
                  "width": 1000,
                  "height": 375,
                  "size": 157.85,
                  "sizeInBytes": 157848,
                  "url": "/uploads/large_hoi_an_banner_d08e187f16.jpg"
                }
              },
              "hash": "hoi_an_banner_d08e187f16",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "size": 402.64,
              "url": "",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2025-05-26T13:50:22.560Z",
              "updatedAt": "2025-05-26T13:50:22.560Z"
            }
          }
        }
      }
    },
]


export function BannerCarousel() {
  const [apis, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true);
    const [banner, setBanners] = useState<Banners[]>([]);
    const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await api.banners.getAllBanner();
        if(response.data){
        setBanners(response.data);      
        }else{
          setBanners(fakeBanners)
        }
      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError("Không tải thể tải dữ liệu. Vui lòng thử lại sau!");
          setBanners(fakeBanners)
        setLoading(false);
      }finally{
        setLoading(false);
        
      }
    };

    fetchDestinations();
  }, []);

   useEffect(() => {
    if (!apis) {
      return
    }
 console.log('apis',apis)
    setCount(apis.scrollSnapList().length)
    setCurrent(apis.selectedScrollSnap())

    apis.on("select", () => {
      setCurrent(apis.selectedScrollSnap())
    })
  }, [apis])

  // Auto-play effect
  useEffect(() => {
    if (!apis) return

    const intervalId = setInterval(() => {
      apis.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(intervalId)
  }, [apis])
if (loading) {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="h-full w-full bg-gray-200 animate-pulse" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="h-10 w-3/4 bg-gray-300 rounded-md animate-pulse mb-4 md:h-16" />
        <div className="h-4 w-2/3 bg-gray-300 rounded-md animate-pulse md:h-6" />
      </div>
    </div>
  )
}


  // if (error) {
  //   return <div className="text-center py-10 text-red-500">{error}</div>
  // }

  // if (banner.length === 0) {
  //   return <div className="text-center py-10 text-gray-500">Không có banner nào để hiển thị.</div>
  // }
  console.log('banner',banner)
  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {banner.map((image) => {
            const imageData = image?.attributes?.image?.data?.attributes;
             const imageUrl = getUrl(imageData?.url);
          return(
          <CarouselItem key={image.id} className="relative h-[70vh]">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }} />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">{image.attributes.title}</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl mt-4">{image.attributes.description}</p>
            </div>
          </CarouselItem>
        
       ) })}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={cn("h-2 w-2 rounded-full p-0 bg-white/50 border-none", i === current && "bg-white")}
            onClick={() => apis?.scrollTo(i)}
          >
            <span className="sr-only">Go to slide {i + 1}</span>
          </button>
        ))}
      </div>
      <CarouselPrevious className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white" />
      <CarouselNext className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white" />
    </Carousel>
  )
}
