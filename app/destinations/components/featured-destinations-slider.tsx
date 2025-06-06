import Image from "next/image";
import VH1 from '@/app/asset/images/vh1.jpg'
import VH2 from '@/app/asset/images/vh2.jpg'
import VH3 from '@/app/asset/images/vh3.jpg'
import VH4 from '@/app/asset/images/vh4.jpg'
import VH5 from '@/app/asset/images/vh5.jpg'
import VH6 from '@/app/asset/images/vh6.jpg'
import VH7 from '@/app/asset/images/vh7.jpg'
import VH8 from '@/app/asset/images/vh8.jpg'
import VH9 from '@/app/asset/images/vh9.jpg'
import VH10 from '@/app/asset/images/vh10.jpg'
import VH11 from '@/app/asset/images/vh11.jpg'
import VH12 from '@/app/asset/images/vh12.jpg'
import VH13 from '@/app/asset/images/vh13.jpg'



interface FeaturedDestinationsSliderProps {
  category: string;
}

const featuredDestinations = {
  all: [
    {
      id: 1,
      name: "Vịnh Hạ Long",
      image: VH1,
      description: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi",
    },
    {
      id: 2,
      name: "Hội An",
      image: VH2,
      description: "Phố cổ di sản văn hóa thế giới",
    },
    {
      id: 3,
      name: "Phú Quốc",
      image: VH3,
      description: "Đảo ngọc phương Nam",
    }
  ],
  tamLinh: [
    {
      id: 1,
      name: "Chùa Hương",
      image: VH5,
      description: "Di tích quốc gia đặc biệt với cảnh quan thiên nhiên hùng vĩ",
    },
    {
      id: 2,
      name: "Chùa Bái Đính",
      image:VH6,
      description: "Ngôi chùa lớn nhất Đông Nam Á",
    },
    {
      id: 3,
      name: "Chùa Thiên Mụ",
      image:VH7,
      description: "Biểu tượng văn hóa Huế",
    }
  ],
  bien: [
    {
      id: 1,
      name: "Vịnh Hạ Long",
      image: VH1,
      description: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi",
    },
    {
      id: 2,
      name: "Phú Quốc",
      image: VH3,
      description: "Đảo ngọc phương Nam với những bãi biển đẹp nhất",
    },
    {
      id: 3,
      name: "Nha Trang",
      image: VH4,
      description: "Thủ đô biển đảo với vịnh biển xinh đẹp",
    }
  ],
  tuNhien: [
    {
      id: 1,
      name: "Sapa",
      image: VH8,
      description: "Vẻ đẹp núi rừng Tây Bắc và văn hóa dân tộc",
    },
    {
      id: 2,
      name: "Phong Nha - Kẻ Bàng",
      image: VH9,
      description: "Di sản thiên nhiên thế giới với hệ thống hang động",
    },
    {
      id: 3,
      name: "Cao nguyên đá Đồng Văn",
      image: VH10,
      description: "Công viên địa chất toàn cầu",
    }
  ],
  nhanTao: [
    {
      id: 1,
      name: "Sun World Ba Na Hills",
      image:VH11,
      description: "Thiên đường giải trí với Cầu Vàng nổi tiếng",
    },
    {
      id: 2,
      name: "VinWonders Phú Quốc",
      image: VH12,
      description: "Công viên giải trí hiện đại bậc nhất",
    },
    {
      id: 3,
      name: "Sun World Hạ Long Complex",
      image: VH13,
      description: "Khu phức hợp giải trí ven biển",
    }
  ]
};

export function FeaturedDestinationsSlider({
  category,
}: FeaturedDestinationsSliderProps) {
  const destinations = featuredDestinations[category as keyof typeof featuredDestinations] || featuredDestinations.all;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Địa Điểm Nổi Bật
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {destinations.map((destination) => (
    <div
      key={destination.id}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      {/* Wrapper cho hình ảnh với chiều cao cố định */}
      <div className="relative h-80 w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Overlay gradient và nội dung */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <h3 className="text-lg font-semibold text-white">{destination.name}</h3>
        <p className="text-sm text-white/90 line-clamp-2">{destination.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
