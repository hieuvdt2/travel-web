import { Culture } from "@/lib/api/types"
import VHMienBac from "../app/asset/images/van-hoa-mien-bac.png"
import VHMienTrung from "../app/asset/images/van-hoa-mien-trung.jpg"
import VHMienNam from "../app/asset/images/van-hoa-mine-nam.jpg"

// Dữ liệu mẫu cho các nét văn hóa
// export const cultures: Culture[] = [
//   {
//     id:1,
//     name: "Miền Bắc",
//     description: "Văn hóa đậm đà bản sắc dân tộc với lịch sử lâu đời, lễ hội truyền thống và ẩm thực đặc sắc",
//     image: "",
//     features: [
//       "Lễ hội truyền thống: Hội Lim, Hội Gióng, Hội Đền Hùng",
//       "Ẩm thực: Phở, Bún chả, Bánh cuốn",
//       "Di tích lịch sử: Hoàng thành Thăng Long, Văn Miếu Quốc Tử Giám",
//       "Làng nghề truyền thống: Làng gốm Bát Tràng, Làng lụa Vạn Phúc",
//     ],
//     region: "mienBac",
//   },
//   {
//     id: 2,
//     name: "Miền Trung",
//     description: "Vùng đất của di sản văn hóa thế giới, cố đô Huế và những làn điệu dân ca đặc sắc",
//     image: "/images/mienTrung-vietnam.png",
//     features: [
//       "Di sản văn hóa: Cố đô Huế, Phố cổ Hội An, Thánh địa Mỹ Sơn",
//       "Âm nhạc: Ca Huế, Hò Quảng, Bài Chòi",
//       "Ẩm thực: Bún bò Huế, Mì Quảng, Bánh xèo",
//       "Nghề truyền thống: Nghề làm nón lá, Làng nghề mộc Kim Bồng",
//     ],
//     region: "mienTrung",
//   },
//   {
//     id: 3,
//     name: "Miền Nam",
//     description: "Vùng đất trẻ trung, năng động với văn hóa đa dạng, phóng khoáng và giao thoa nhiều nền văn hóa",
//     image: "/images/mienNam-vietnam.png",
//     features: [
//       "Âm nhạc: Đờn ca tài tử, Cải lương",
//       "Lễ hội: Lễ hội Nghinh Ông, Lễ hội Bà Chúa Xứ",
//       "Ẩm thực: Hủ tiếu Nam Vang, Bánh tráng trộn, Cơm tấm",
//       "Văn hóa sông nước: Chợ nổi Cái Răng, Văn hóa miệt vườn",
//     ],
//     region: "mienNam",
//   },
// ]

export const cultures = [
  {
    id: "mienBac",
    name: "Miền Bắc",
    description: "Văn hóa đậm đà bản sắc dân tộc với lịch sử lâu đời, lễ hội truyền thống và ẩm thực đặc sắc",
    image: VHMienBac,
    features: [
      "Lễ hội truyền thống: Hội Lim, Hội Gióng, Hội Đền Hùng",
      "Ẩm thực: Phở, Bún chả, Bánh cuốn",
      "Di tích lịch sử: Hoàng thành Thăng Long, Văn Miếu Quốc Tử Giám",
      "Làng nghề truyền thống: Làng gốm Bát Tràng, Làng lụa Vạn Phúc",
    ],
  },
  {
    id: "mienTrung",
    name: "Miền Trung",
    description: "Vùng đất của di sản văn hóa thế giới, cố đô Huế và những làn điệu dân ca đặc sắc",
    image: VHMienTrung,
    features: [
      "Di sản văn hóa: Cố đô Huế, Phố cổ Hội An, Thánh địa Mỹ Sơn",
      "Âm nhạc: Ca Huế, Hò Quảng, Bài Chòi",
      "Ẩm thực: Bún bò Huế, Mì Quảng, Bánh xèo",
      "Nghề truyền thống: Nghề làm nón lá, Làng nghề mộc Kim Bồng",
    ],
  },
  {
    id: "mienNam",
    name: "Miền Nam",
    description: "Vùng đất trẻ trung, năng động với văn hóa đa dạng, phóng khoáng và giao thoa nhiều nền văn hóa",
    image: VHMienNam,
    features: [
      "Âm nhạc: Đờn ca tài tử, Cải lương",
      "Lễ hội: Lễ hội Nghinh Ông, Lễ hội Bà Chúa Xứ",
      "Ẩm thực: Hủ tiếu Nam Vang, Bánh tráng trộn, Cơm tấm",
      "Văn hóa sông nước: Chợ nổi Cái Răng, Văn hóa miệt vườn",
    ],
  },
]
// export default cultures
