"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

const bannerImages = [
  {
    src: "/images/hero-image.jpg",
    alt: "Vịnh Hạ Long",
    title: "Khám Phá Vẻ Đẹp Việt Nam",
    description: "Những địa điểm du lịch tuyệt vời nhất định phải đến một lần trong đời",
  },
  {
    src: "/images/ha-long-bay.jpg",
    alt: "Vịnh Hạ Long",
    title: "Vịnh Hạ Long - Di Sản Thiên Nhiên Thế Giới",
    description: "Khám phá kỳ quan thiên nhiên với hàng nghìn hòn đảo đá vôi hùng vĩ",
  },
  {
    src: "/images/contact-hero.jpg",
    alt: "Hội An",
    title: "Hội An - Phố Cổ Lung Linh Ánh Đèn",
    description: "Đắm chìm trong không gian cổ kính và văn hóa độc đáo của phố cổ Hội An",
  },
  {
    src: "/images/team.jpg",
    alt: "Sapa",
    title: "Sapa - Thiên Đường Mây Trời",
    description: "Chinh phục những đỉnh núi cao và khám phá văn hóa dân tộc vùng cao nguyên",
  },
]

export function BannerCarousel() {
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play effect
  useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {bannerImages.map((image, index) => (
          <CarouselItem key={index} className="relative h-[70vh]">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${image.src}')` }} />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">{image.title}</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl mt-4">{image.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={cn("h-2 w-2 rounded-full p-0 bg-white/50 border-none", i === current && "bg-white")}
            onClick={() => api?.scrollTo(i)}
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
