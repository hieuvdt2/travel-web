import { Region } from "@/types";

interface VietnamTourismIntroProps {
  region: Region;
}

const regionDescriptions = {
  north: {
    title: "Du Lịch Miền Bắc",
    description: "Miền Bắc Việt Nam nổi tiếng với vẻ đẹp thiên nhiên hùng vĩ của núi rừng Tây Bắc, vịnh Hạ Long kỳ vĩ, và nền văn hóa đặc sắc của đồng bào dân tộc thiểu số. Đây là nơi bạn có thể khám phá những di tích lịch sử quan trọng như Hoàng thành Thăng Long, chùa Trấn Quốc, và trải nghiệm ẩm thực phong phú của Hà Nội.",
    highlights: [
      "Vịnh Hạ Long - Di sản thiên nhiên thế giới",
      "Sapa - Vẻ đẹp núi rừng Tây Bắc",
      "Hà Nội - Thủ đô nghìn năm văn hiến",
      "Tam Cốc - Bích Động - Vịnh Hạ Long trên cạn"
    ]
  },
  central: {
    title: "Du Lịch Miền Trung",
    description: "Miền Trung Việt Nam là nơi hội tụ của những bãi biển đẹp nhất, di sản văn hóa phong phú và ẩm thực đặc sắc. Từ Đà Nẵng với bãi biển Mỹ Khê được bình chọn là một trong những bãi biển đẹp nhất thế giới, đến Huế với quần thể di tích cố đô, và Hội An với phố cổ được UNESCO công nhận là di sản văn hóa thế giới.",
    highlights: [
      "Hội An - Phố cổ di sản văn hóa thế giới",
      "Đà Nẵng - Thành phố đáng sống nhất Việt Nam",
      "Huế - Cố đô lịch sử",
      "Nha Trang - Thủ đô biển đảo"
    ]
  },
  south: {
    title: "Du Lịch Miền Nam",
    description: "Miền Nam Việt Nam là vùng đất của sự sôi động, hiện đại và ẩm thực phong phú. Từ Sài Gòn nhộn nhịp với những tòa nhà chọc trời và cuộc sống về đêm sôi động, đến Đồng bằng sông Cửu Long với những vườn trái cây trĩu quả và chợ nổi độc đáo.",
    highlights: [
      "TP.HCM - Thành phố không ngủ",
      "Phú Quốc - Đảo ngọc phương Nam",
      "Đồng bằng sông Cửu Long - Vùng sông nước",
      "Vũng Tàu - Thành phố biển"
    ]
  }
};

export function VietnamTourismIntro({ region }: VietnamTourismIntroProps) {
  const content = regionDescriptions[region] || regionDescriptions.north;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{content.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-semibold text-primary mb-2">{highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 