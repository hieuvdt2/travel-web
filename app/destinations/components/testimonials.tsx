import { Region } from "@/types";
import Image from "next/image";
import User1 from "@/app/asset/images/user-4.jpg";
import User2 from "@/app/asset/images/user-2.jpg";
import User3 from "@/app/asset/images/user-3.jpg";

interface TestimonialsProps {
  category: string;
}

interface Testimonial {
  id: number;
  name: string;
  avatar: any;
  rating: number;
  comment: string;
  destination: string;
}

const testimonials = {
  all: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: User1,
      rating: 5,
      comment:
        "Vịnh Hạ Long thực sự là một kỳ quan thiên nhiên tuyệt vời. Tôi đã có những trải nghiệm khó quên khi ngắm hoàng hôn trên vịnh.",
      destination: "Vịnh Hạ Long",
    },
  ],
  bien: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: User1,
      rating: 5,
      comment:
        "Vịnh Hạ Long thực sự là một kỳ quan thiên nhiên tuyệt vời. Tôi đã có những trải nghiệm khó quên khi ngắm hoàng hôn trên vịnh.",
      destination: "Vịnh Hạ Long",
    },
    {
      id: 2,
      name: "Trần Thị B",
      avatar: User2,
      rating: 4,
      comment:
        "Sapa mùa xuân thật đẹp với những ruộng bậc thang xanh mướt và hoa đào nở rộ. Không khí trong lành và con người thân thiện.",
      destination: "Sapa",
    },
  ],
  nhanTao: [
    {
      id: 23,
      name: "Lê Văn C",
      avatar: User2,
      rating: 5,
      comment:
        "Hội An là một thành phố cổ kính đầy quyến rũ. Ánh đèn lồng về đêm tạo nên một không khí rất đặc biệt.",
      destination: "Phú Thọ",
    },
    {
      id: 24,
      name: "Phạm Thị D",
      avatar: User2,
      rating: 4,
      comment:
        "Đà Nẵng có những bãi biển đẹp nhất Việt Nam. Bãi biển Mỹ Khê thực sự xứng đáng với danh hiệu bãi biển đẹp nhất thế giới.",
      destination: "Ninh Bình",
    },
  ],
  tamLinh: [
    {
      id: 13,
      name: "Hà Thị M",
      avatar: User2,
      rating: 5,
      comment:
        "Đền Hùng là 1 lễ hội rất vui và ý nghĩa.",
      destination: "Hội An",
    },
    {
      id: 14,
      name: "Hoàng Key",
      avatar: User2,
      rating: 4,
      comment:
        "Chùa Bái Đính rất rộn",
      destination: "Đà Nẵng",
    },
  ],
  tuNhien: [
    {
      id: 5,
      name: "Hoàng Văn E",
      avatar: User2,
      rating: 5,
      comment:
        "Phú Quốc là thiên đường nghỉ dưỡng tuyệt vời. Biển xanh, cát trắng và những resort sang trọng.",
      destination: "Phú Quốc",
    },
    {
      id: 6,
      name: "Đỗ Thị F",
      avatar: User3,
      rating: 4,
      comment:
        "Chợ nổi Cái Răng ở Cần Thơ là một trải nghiệm độc đáo. Tôi thích không khí nhộn nhịp và ẩm thực đặc sắc nơi đây.",
      destination: "Cần Thơ",
    },
  ],
};

export function Testimonials({ category }: TestimonialsProps) {
  const regionTestimonials =
    testimonials[category as keyof typeof testimonials] || testimonials.all;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Đánh Giá Từ Du Khách
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regionTestimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm text-gray-600">
                      {testimonial.rating}/5
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{testimonial.comment}</p>
              <p className="text-sm text-primary font-medium">
                {testimonial.destination}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
