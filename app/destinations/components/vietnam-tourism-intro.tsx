'use client'
import { Category } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from '@/app/asset/images/van-hoa-mien-bac.png'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VN1 from '@/app/asset/images/vn1.jpg'
import VN2 from '@/app/asset/images/vn2.jpg'
import VN3 from '@/app/asset/images/vn3.jpg'
import VN4 from '@/app/asset/images/vn4.jpg'
import VN5 from '@/app/asset/images/vn5.jpg'
import VN6 from '@/app/asset/images/vn6.jpg'
import VN7 from '@/app/asset/images/vn7.jpg'
import VN8 from '@/app/asset/images/vn8.jpg'
import VN9 from '@/app/asset/images/vn9.jpg'
import VN10 from '@/app/asset/images/vn10.jpg'
import VN11 from '@/app/asset/images/vn11.jpg'
import VN12 from '@/app/asset/images/vn12.jpg'
import VN13 from '@/app/asset/images/vn13.png'
import VN14 from '@/app/asset/images/vn14.jpg'
import VN15 from '@/app/asset/images/vn15.jpg'
import VN16 from '@/app/asset/images/vn16.jpg'
import VN17 from '@/app/asset/images/vn17.jpg'
import VN18 from '@/app/asset/images/vn18.jpg'
import VN19 from '@/app/asset/images/vn19.jpg'
import VN20 from '@/app/asset/images/vn20.jpg'



interface VietnamTourismIntroProps {
  category: string;
}

const categoryDescriptions = {
  all: {
    title: "Du Lịch Việt Nam",
    description: "Việt Nam là một đất nước có nền văn hóa đa dạng, phong cảnh thiên nhiên tuyệt đẹp và ẩm thực phong phú. Từ những bãi biển cát trắng, vịnh biển xanh ngắt đến những di tích lịch sử, văn hóa tâm linh, mỗi địa điểm đều mang đến những trải nghiệm độc đáo cho du khách.",
    highlights: [
      {
        title: "Văn hóa đa dạng và phong phú",
        image: VN17
      },
      {
        title: "Ẩm thực đặc sắc",
        image: VN18
      },
      {
        title: "Phong cảnh thiên nhiên tuyệt đẹp",
        image: VN19
      },
      {
        title: "Di tích lịch sử quan trọng",
        image: VN20
      }
    ]
  },
  "tamLinh": {
    title: "Du Lịch Tâm Linh",
    description: "Du lịch tâm linh tại Việt Nam là hành trình khám phá những giá trị văn hóa, tín ngưỡng sâu sắc. Từ những ngôi chùa cổ kính, đền thờ linh thiêng đến những lễ hội truyền thống, mỗi điểm đến đều mang đậm dấu ấn văn hóa tâm linh của dân tộc.",
    highlights: [
      {
        title: "Chùa Hương - Di tích quốc gia đặc biệt",
        image: VN1
      },
      {
        title: "Chùa Bái Đính - Ngôi chùa lớn nhất Đông Nam Á",
        image: VN2
      },
      {
        title: "Chùa Thiên Mụ - Biểu tượng văn hóa Huế",
        image: VN3
      },
      {
        title: "Chùa Một Cột - Biểu tượng của Hà Nội",
        image: VN4
      }
    ]
  },
  "bien": {
    title: "Du Lịch Biển",
    description: "Việt Nam với bờ biển dài hơn 3.260km, sở hữu những bãi biển đẹp nhất thế giới. Từ những bãi biển hoang sơ đến những resort sang trọng, mỗi điểm đến đều mang đến trải nghiệm tuyệt vời cho du khách yêu biển.",
    highlights: [
      {
        title: "Vịnh Hạ Long - Di sản thiên nhiên thế giới",
        image: VN5
      },
      {
        title: "Phú Quốc - Đảo ngọc phương Nam",
        image: VN6
      },
      {
        title: "Nha Trang - Thủ đô biển đảo",
        image: VN7
      },
      {
        title: "Đà Nẵng - Thành phố biển đáng sống",
        image: VN8
      }
    ]
  },
  "tuNhien": {
    title: "Du Lịch Tự Nhiên",
    description: "Du lịch tự nhiên tại Việt Nam là cơ hội khám phá những kỳ quan thiên nhiên độc đáo. Từ những dãy núi hùng vĩ, thác nước hùng vĩ đến những vườn quốc gia đa dạng sinh học, mỗi điểm đến đều mang đến trải nghiệm gần gũi với thiên nhiên.",
    highlights: [
      {
        title: "Sapa - Vẻ đẹp núi rừng Tây Bắc",
        image: VN9
      },
      {
        title: "Vườn quốc gia Phong Nha - Kẻ Bàng",
        image: VN10
      },
      {
        title: "Cao nguyên đá Đồng Văn",
        image: VN11
      },
      {
        title: "Vườn quốc gia Cúc Phương",
        image: VN12
      }
    ]
  },
  "nhanTao": {
    title: "Du Lịch Nhân Tạo",
    description: "Du lịch nhân tạo tại Việt Nam là sự kết hợp hoàn hảo giữa công nghệ hiện đại và văn hóa truyền thống. Từ những công viên giải trí đến những khu phức hợp vui chơi, mỗi điểm đến đều mang đến trải nghiệm thú vị và hiện đại.",
    highlights: [
      {
        title: "Sun World Ba Na Hills",
        image: VN13
      },
      {
        title: "VinWonders Phú Quốc",
        image: VN14
      },
      {
        title: "Sun World Hạ Long Complex",
        image: VN15
      },
      {
        title: "Đảo Hòn Ngọc Việt",
        image: VN16
      }
    ]
  }
};

export function VietnamTourismIntro({ category }: VietnamTourismIntroProps) {
  const content = categoryDescriptions[category as keyof typeof categoryDescriptions] || categoryDescriptions.all;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{content.description}</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {content.highlights.map((highlight, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[550px]">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {highlight.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {content.highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  emblaApi?.selectedScrollSnap() === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 