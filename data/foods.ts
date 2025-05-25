import type { Food } from "@/types"

// export const foods: Food[] = [
//   {
//     id:' 1',
//     name: "Phở",
//     description: "Món súp mì truyền thống của Việt Nam với nước dùng thơm ngon, bánh phở mềm và thịt bò hoặc gà.",
//     longDescription:
//       "Phở là một trong những món ăn nổi tiếng nhất của Việt Nam, được yêu thích trên toàn thế giới. Món ăn này bao gồm bánh phở làm từ gạo, nước dùng đậm đà được ninh từ xương bò hoặc gà cùng với các loại gia vị như hồi, quế, đinh hương, và thịt bò tái hoặc chín, thịt gà xé. Phở thường được ăn kèm với các loại rau thơm như húng quế, ngò gai, giá đỗ và ớt, chanh. Mỗi vùng miền của Việt Nam có cách chế biến phở khác nhau, nhưng nổi tiếng nhất là phở Hà Nội với hương vị tinh tế và phở Nam Định với nước dùng đậm đà.",
//     imageUrl: "/images/pho.jpg",
//     origin: "Hà Nội, Nam Định",
//     regions: ["north"],
//     ingredients: [
//       "Bánh phở",
//       "Thịt bò hoặc gà",
//       "Xương bò hoặc gà",
//       "Hành, gừng",
//       "Gia vị: hồi, quế, đinh hương, hạt ngò",
//       "Rau thơm: húng quế, ngò gai, hành lá",
//     ],
//     howToEat:
//       "Phở thường được ăn nóng. Bạn có thể thêm giá đỗ, rau thơm, chanh, ớt tùy theo khẩu vị. Một số người thích thêm tương ớt hoặc tương đen.",
//     prepTime: "Khoảng 6-8 giờ để nấu nước dùng",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Phở Thìn - 13 Lò Đúc, Hà Nội",
//       "Phở Lý Quốc Sư - 10 Lý Quốc Sư, Hà Nội",
//       "Phở Gia Truyền - 49 Bát Đàn, Hà Nội",
//     ],
//   },
//   {
//     id: "2",
//     name: "Bún chả",
//     description: "Món bún ăn kèm với thịt lợn nướng, nước mắm chua ngọt và rau thơm, là đặc sản của Hà Nội.",
//     longDescription:
//       "Bún chả là một món ăn đặc trưng của Hà Nội, bao gồm bún (mì làm từ gạo), thịt lợn nướng (chả) và nước mắm pha chua ngọt với đu đủ và cà rốt ngâm chua. Thịt lợn được ướp với các loại gia vị như nước mắm, đường, tỏi, hành, sau đó nướng trên than hoa. Bún chả thường được ăn kèm với nhiều loại rau thơm như húng quế, kinh giới, rau diếp, và đôi khi có cả nem rán. Món ăn này đã trở nên nổi tiếng toàn cầu sau khi cựu Tổng thống Mỹ Barack Obama thưởng thức nó trong chuyến thăm Việt Nam năm 2016.",
//     imageUrl: "/images/bun-cha.jpg",
//     origin: "Hà Nội",
//     regions: ["north"],
//     ingredients: [
//       "Bún (mì gạo)",
//       "Thịt lợn (thường là thịt ba chỉ và thịt xay viên)",
//       "Nước mắm, đường, tỏi, ớt",
//       "Đu đủ và cà rốt ngâm chua",
//       "Rau thơm: húng quế, kinh giới, rau diếp",
//     ],
//     howToEat:
//       "Bún chả thường được phục vụ với bún để riêng, thịt nướng và nước mắm pha trong một bát. Bạn lấy một ít bún, nhúng vào bát nước mắm cùng với thịt và rau thơm, sau đó thưởng thức.",
//     prepTime: "Khoảng 1-2 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Bún Chả Hương Liên - 24 Lê Văn Hưu, Hà Nội",
//       "Bún Chả Đắc Kim - 1 Hàng Mành, Hà Nội",
//       "Bún Chả Duy Dừa - 8b Nguyễn Khuyến, Hà Nội",
//     ],
//   },
//   {
//     id: "3",
//     name: "Bánh mì",
//     description:
//       "Bánh mì Việt Nam là sự kết hợp hoàn hảo giữa ẩm thực Pháp và Việt Nam, với vỏ bánh giòn và nhân đa dạng.",
//     longDescription:
//       "Bánh mì Việt Nam là một loại sandwich độc đáo, kết hợp giữa bánh mì kiểu Pháp với các nguyên liệu đặc trưng của Việt Nam. Vỏ bánh mì giòn bên ngoài, mềm bên trong, được nhồi với nhiều loại nhân như thịt xá xíu, chả lụa, pate, thịt nguội, cùng với đồ chua (cà rốt và củ cải ngâm), dưa leo, ngò, ớt và xốt mayonnaise. Bánh mì có mặt ở khắp nơi tại Việt Nam, từ những xe đẩy ven đường đến các cửa hàng sang trọng, và mỗi nơi đều có công thức riêng. Món ăn này đã được Lonely Planet bình chọn là một trong những món ăn đường phố ngon nhất thế giới.",
//     imageUrl: "/images/banh-mi.jpg",
//     origin: "Sài Gòn (TP.HCM)",
//     regions: ["south", "central", "north"],
//     ingredients: [
//       "Bánh mì Pháp",
//       "Thịt (xá xíu, chả lụa, thịt nguội)",
//       "Pate",
//       "Rau sống (dưa leo, ngò, ớt)",
//       "Đồ chua (cà rốt, củ cải)",
//       "Xốt mayonnaise, maggi",
//     ],
//     howToEat:
//       "Bánh mì thường được ăn trực tiếp, không cần dùng đũa hay dao nĩa. Bạn có thể yêu cầu thêm hoặc bớt ớt tùy theo khẩu vị.",
//     prepTime: "Khoảng 5-10 phút",
//     type: "Món ăn nhanh",
//     bestPlacesToTry: [
//       "Bánh Mì Phượng - 2B Phan Châu Trinh, Hội An",
//       "Bánh Mì Huỳnh Hoa - 26 Lê Thị Riêng, TP.HCM",
//       "Bánh Mì Bảy Hổ - 12 Nguyễn Thị Nghĩa, TP.HCM",
//     ],
//   },
//   {
//     id: "4",
//     name: "Cao lầu",
//     description: "Món mì đặc trưng của Hội An với sợi mì màu vàng, thịt xá xíu, rau sống và bánh đa giòn.",
//     longDescription:
//       "Cao lầu là một món ăn đặc trưng của Hội An, có nguồn gốc từ sự giao thoa văn hóa giữa Việt Nam, Trung Quốc và Nhật Bản. Điểm đặc biệt của cao lầu nằm ở sợi mì có màu vàng đặc trưng, được làm từ gạo ngâm trong nước tro từ cây cau và nước giếng Bá Lễ - một giếng nước cổ ở Hội An. Món ăn bao gồm sợi mì, thịt xá xíu, rau sống (rau húng, giá đỗ, rau muống chẻ), và bánh đa giòn. Cao lầu không có nhiều nước như các món mì khác, thay vào đó, nó được tưới một ít nước xá xíu. Theo truyền thống, cao lầu chỉ có thể được làm đúng cách tại Hội An.",
//     imageUrl: "/images/cao-lau.jpg",
//     origin: "Hội An, Quảng Nam",
//     regions: ["central"],
//     ingredients: [
//       "Mì cao lầu (làm từ gạo ngâm nước tro)",
//       "Thịt xá xíu",
//       "Rau sống (rau húng, giá đỗ, rau muống chẻ)",
//       "Bánh đa giòn",
//       "Nước xá xíu",
//     ],
//     howToEat:
//       "Cao lầu thường được ăn ngay khi còn nóng. Bạn có thể trộn đều tất cả các thành phần trước khi thưởng thức, và thêm một chút tương ớt nếu muốn.",
//     prepTime: "Khoảng 1-2 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Cao Lầu Bà Bé - 16 Thái Phiên, Hội An",
//       "Cao Lầu Nam Sơn - 6A Trường Minh Lương, Hội An",
//       "Quán Cao Lầu Thanh - Chợ Hội An",
//     ],
//   },
//   {
//     id: "5",
//     name: "Bún bò Huế",
//     description: "Món bún bò cay nổi tiếng của Huế với nước dùng đậm đà, thịt bò, chả lụa và tiết.",
//     longDescription:
//       "Bún bò Huế là một món ăn đặc trưng của cố đô Huế, nổi tiếng với hương vị cay nồng và thơm ngon. Món ăn bao gồm bún (mì gạo), thịt bò, giò heo, chả lụa, và đôi khi có cả tiết. Điểm đặc biệt của bún bò Huế nằm ở nước dùng đậm đà, được nấu từ xương bò và xương heo, kết hợp với sả, gừng, ruốc, ớt, và mắm ruốc Huế. Màu đỏ đặc trưng của nước dùng đến từ ớt và annatto oil (dầu hạt điều). Bún bò Huế thường được ăn kèm với rau sống, giá đỗ, chanh, ớt, và các loại rau thơm.",
//     imageUrl: "/images/bun-bo-hue.jpg",
//     origin: "Huế, Thừa Thiên Huế",
//     regions: ["central"],
//     ingredients: [
//       "Bún (mì gạo)",
//       "Thịt bò, giò heo",
//       "Chả lụa, tiết",
//       "Sả, gừng, ớt",
//       "Mắm ruốc Huế",
//       "Rau sống, giá đỗ, chanh",
//     ],
//     howToEat:
//       "Bún bò Huế thường được ăn nóng. Bạn có thể thêm rau sống, giá đỗ, chanh, ớt tùy theo khẩu vị. Một số người thích thêm một chút mắm ruốc để tăng hương vị.",
//     prepTime: "Khoảng 3-4 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Bún Bò Huế Mụ Rơi - 11 Lý Thường Kiệt, Huế",
//       "Bún Bò Huế Bà Tuyết - 11A Lý Thường Kiệt, Huế",
//       "Bún Bò Huế O Phượng - 104 Mai Thúc Loan, Huế",
//     ],
//   },
//   {
//     id: "6",
//     name: "Cơm tấm",
//     description: "Món cơm đặc trưng của Sài Gòn với gạo tấm, sườn nướng, bì, chả trứng và nước mắm ngọt.",
//     longDescription:
//       "Cơm tấm, hay còn gọi là cơm tấm Sài Gòn, là một món ăn đặc trưng của miền Nam Việt Nam, đặc biệt là ở Thành phố Hồ Chí Minh. Món ăn bao gồm gạo tấm (gạo vỡ) nấu chín, thường được ăn kèm với sườn nướng, bì (da heo luộc thái sợi trộn với bột gạo rang), chả trứng, và đôi khi có thêm mỡ hành, dưa chua, và trứng ốp la. Điểm đặc biệt của cơm tấm nằm ở nước mắm ngọt đậm đà, được rưới lên trên cơm. Cơm tấm là món ăn phổ biến cho bữa sáng và bữa trưa ở Sài Gòn, và có thể tìm thấy ở khắp nơi từ những quán ven đường đến các nhà hàng sang trọng.",
//     imageUrl: "/images/com-tam.jpg",
//     origin: "Sài Gòn (TP.HCM)",
//     regions: ["south"],
//     ingredients: [
//       "Gạo tấm (gạo vỡ)",
//       "Sườn nướng",
//       "Bì (da heo luộc thái sợi)",
//       "Chả trứng",
//       "Mỡ hành, dưa chua",
//       "Nước mắm ngọt",
//     ],
//     howToEat:
//       "Cơm tấm thường được ăn với nước mắm ngọt rưới lên trên. Bạn có thể trộn đều tất cả các thành phần trước khi thưởng thức, hoặc ăn từng loại riêng biệt.",
//     prepTime: "Khoảng 1-2 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Cơm Tấm Ba Ghiền - 84 Đặng Văn Ngữ, TP.HCM",
//       "Cơm Tấm Bụi Sài Gòn - 100 Thái Văn Lung, TP.HCM",
//       "Cơm Tấm An Dương Vương - 25-27 An Dương Vương, TP.HCM",
//     ],
//   },
//   {
//     id: "7",
//     name: "Bánh xèo",
//     description:
//       "Bánh crepe giòn của Việt Nam với nhân tôm, thịt, giá đỗ, được ăn kèm với rau sống và nước mắm chua ngọt.",
//     longDescription:
//       "Bánh xèo là một món ăn truyền thống của Việt Nam, có nguồn gốc từ miền Trung nhưng phổ biến trên khắp cả nước. Tên gọi 'xèo' đến từ âm thanh khi đổ bột vào chảo dầu nóng. Bánh xèo là một loại bánh crepe giòn, được làm từ bột gạo, nước cốt dừa, nghệ (tạo màu vàng), nhân bên trong gồm tôm, thịt, giá đỗ, và đôi khi có nấm. Bánh xèo miền Nam thường lớn hơn và giòn hơn so với bánh xèo miền Trung. Món ăn này thường được ăn kèm với nhiều loại rau sống như xà lách, diếp cá, húng quế, và nước mắm pha chua ngọt.",
//     imageUrl: "/images/banh-xeo.jpg",
//     origin: "Miền Trung Việt Nam",
//     regions: ["central", "south"],
//     ingredients: [
//       "Bột gạo, nước cốt dừa, nghệ",
//       "Tôm, thịt lợn",
//       "Giá đỗ, nấm",
//       "Rau sống (xà lách, diếp cá, húng quế)",
//       "Nước mắm pha chua ngọt",
//     ],
//     howToEat:
//       "Bánh xèo thường được ăn bằng cách bẻ một miếng bánh, gói trong rau sống, sau đó chấm vào nước mắm pha chua ngọt. Một số người thích ăn bánh xèo với bánh tráng.",
//     prepTime: "Khoảng 30-45 phút",
//     type: "Món ăn nhẹ hoặc món chính",
//     bestPlacesToTry: [
//       "Bánh Xèo 46A - 46A Đinh Công Tráng, TP.HCM",
//       "Bánh Xèo Mười Xiềm - 190 Nam Kỳ Khởi Nghĩa, TP.HCM",
//       "Bánh Xèo Bà Dưỡng - 23 Hoàng Diệu 2, Đà Nẵng",
//     ],
//   },
//   {
//     id: "8",
//     name: "Chả cá Lã Vọng",
//     description: "Món cá đặc trưng của Hà Nội, được rán với nghệ và thì là, ăn kèm với bún, đậu phộng và mắm tôm.",
//     longDescription:
//       "Chả cá Lã Vọng là một món ăn truyền thống của Hà Nội, có lịch sử hơn 100 năm. Món ăn này được đặt theo tên của một nhà hàng nổi tiếng ở phố Chả Cá, Hà Nội. Chả cá được làm từ cá lăng hoặc cá quả, ướp với nghệ, gừng, tỏi, và các gia vị khác, sau đó được rán với dầu ăn. Điểm đặc biệt của món ăn này là cá được rán trực tiếp tại bàn ăn, cùng với thì là và hành lá. Chả cá thường được ăn kèm với bún, đậu phộng rang, rau thơm, và đặc biệt là mắm tôm - một loại mắm có mùi mạnh nhưng tạo nên hương vị độc đáo cho món ăn.",
//     imageUrl: "/images/cha-ca.jpg",
//     origin: "Hà Nội",
//     regions: ["north"],
//     ingredients: [
//       "Cá lăng hoặc cá quả",
//       "Nghệ, gừng, tỏi",
//       "Thì là, hành lá",
//       "Bún (mì gạo)",
//       "Đậu phộng rang",
//       "Mắm tôm",
//     ],
//     howToEat:
//       "Chả cá thường được rán trực tiếp tại bàn ăn. Bạn lấy một ít bún, đặt cá và rau thơm lên trên, rắc đậu phộng rang, sau đó chấm vào mắm tôm hoặc nước mắm tùy theo khẩu vị.",
//     prepTime: "Khoảng 1-2 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Chả Cá Lã Vọng - 14 Chả Cá, Hà Nội",
//       "Chả Cá Thăng Long - 19-21-31 Đường Thành, Hà Nội",
//       "Chả Cá Anh Vũ - 120 K1 Giảng Võ, Hà Nội",
//     ],
//   },
//   {
//     id: "9",
//     name: "Gỏi cuốn",
//     description: "Món cuốn tươi mát với bánh tráng, tôm, thịt lợn, bún, rau sống, ăn kèm với nước chấm đậu phộng.",
//     longDescription:
//       "Gỏi cuốn, còn được gọi là nem cuốn hoặc spring rolls, là một món ăn nhẹ phổ biến của Việt Nam. Món ăn này bao gồm bánh tráng (làm từ bột gạo) cuốn với tôm, thịt lợn luộc, bún (mì gạo), rau sống như xà lách, húng quế, và đôi khi có thêm giá đỗ, dưa leo. Gỏi cuốn không được chiên như nem rán, mà được ăn tươi, tạo cảm giác nhẹ nhàng và mát mẻ, đặc biệt phù hợp trong những ngày nóng. Món ăn này thường được chấm với nước chấm đậu phộng đặc biệt, được làm từ tương hột (hoisin sauce), đậu phộng rang nghiền và tỏi.",
//     imageUrl: "/images/goi-cuon.jpg",
//     origin: "Miền Nam Việt Nam",
//     regions: ["south", "central"],
//     ingredients: [
//       "Bánh tráng (làm từ bột gạo)",
//       "Tôm, thịt lợn luộc",
//       "Bún (mì gạo)",
//       "Rau sống (xà lách, húng quế, giá đỗ)",
//       "Nước chấm đậu phộng",
//     ],
//     howToEat:
//       "Gỏi cuốn thường được ăn bằng tay, chấm vào nước chấm đậu phộng. Bạn có thể ăn nguyên một cuốn hoặc cắt đôi tùy thích.",
//     prepTime: "Khoảng 30 phút",
//     type: "Món khai vị hoặc món ăn nhẹ",
//     bestPlacesToTry: [
//       "Quán Ngon 138 - 138 Nam Kỳ Khởi Nghĩa, TP.HCM",
//       "Wrap & Roll - Nhiều chi nhánh ở TP.HCM và Hà Nội",
//       "Gỏi Cuốn Hoàng Ty - 121 Nguyễn Thái Học, TP.HCM",
//     ],
//   },
//   {
//     id: "10",
//     name: "Hủ tiếu Nam Vang",
//     description: "Món súp mì gạo của miền Nam với nước dùng trong, ngọt, nhiều loại thịt và hải sản.",
//     longDescription:
//       "Hủ tiếu Nam Vang là một món ăn phổ biến ở miền Nam Việt Nam, có nguồn gốc từ ẩm thực Campuchia (Nam Vang là tên gọi tiếng Việt của Phnom Penh). Món ăn bao gồm mì gạo (có thể là mì khô hoặc mềm tùy theo sở thích), nước dùng trong và ngọt được nấu từ xương heo và tôm khô, cùng với nhiều loại thịt như thịt heo xá xíu, lòng heo, tôm, mực, và đôi khi có cả gan heo, cật heo. Hủ tiếu Nam Vang thường được ăn kèm với giá đỗ, hẹ, và các loại rau thơm. Món ăn này có thể được phục vụ với nước dùng (hủ tiếu nước) hoặc không có nước dùng (hủ tiếu khô, nước dùng để riêng).",
//     imageUrl: "/images/hu-tieu.jpg",
//     origin: "Miền Nam Việt Nam",
//     regions: ["south"],
//     ingredients: [
//       "Mì gạo (hủ tiếu)",
//       "Thịt heo xá xíu, lòng heo",
//       "Tôm, mực",
//       "Xương heo, tôm khô (để nấu nước dùng)",
//       "Giá đỗ, hẹ, rau thơm",
//     ],
//     howToEat:
//       "Hủ tiếu có thể được ăn với nước dùng (hủ tiếu nước) hoặc không có nước dùng (hủ tiếu khô, nước dùng để riêng). Bạn có thể thêm giá đỗ, rau thơm, chanh, ớt tùy theo khẩu vị.",
//     prepTime: "Khoảng 2-3 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Hủ Tiếu Nam Vang Nhân Quán - 68 Huỳnh Tịnh Của, TP.HCM",
//       "Hủ Tiếu Sa Đéc Ký Lân - 84 Nguyễn Du, TP.HCM",
//       "Hủ Tiếu Nam Vang Nhân Nghĩa - 125 Nguyễn Thị Minh Khai, TP.HCM",
//     ],
//   },
//   {
//     id: "11",
//     name: "Mì Quảng",
//     description: "Món mì đặc trưng của Quảng Nam với sợi mì vàng, ít nước, nhiều loại thịt, hải sản và đậu phộng.",
//     longDescription:
//       "Mì Quảng là một món ăn đặc trưng của miền Trung Việt Nam, đặc biệt là tỉnh Quảng Nam. Món ăn bao gồm sợi mì màu vàng (do được làm từ gạo ngâm với nghệ), ít nước dùng đậm đà, và nhiều loại thịt như thịt gà, thịt heo, tôm, và đôi khi có cả trứng luộc. Điểm đặc biệt của Mì Quảng là nước dùng ít hơn so với các món mì khác, chỉ đủ để thấm vào sợi mì. Món ăn thường được trang trí với đậu phộng rang nghiền, bánh tráng mè nướng giòn, và các loại rau thơm như húng quế, rau răm, giá đỗ, chuối xanh thái lát, và ớt.",
//     imageUrl: "/images/mi-quang.jpg",
//     origin: "Quảng Nam",
//     regions: ["central"],
//     ingredients: [
//       "Mì gạo màu vàng (do nghệ)",
//       "Thịt gà, thịt heo, tôm",
//       "Đậu phộng rang nghiền",
//       "Bánh tráng mè nướng giòn",
//       "Rau thơm (húng quế, rau răm, giá đỗ, chuối xanh)",
//     ],
//     howToEat:
//       "Mì Quảng thường được ăn bằng cách trộn đều tất cả các thành phần trước khi thưởng thức. Bạn có thể thêm một chút nước cốt chanh và ớt tùy theo khẩu vị.",
//     prepTime: "Khoảng 1-2 giờ",
//     type: "Món chính",
//     bestPlacesToTry: [
//       "Mì Quảng Bà Mua - 95 Trần Cao Vân, Đà Nẵng",
//       "Mì Quảng Ông Hai - 152 Hoàng Diệu, Đà Nẵng",
//       "Mì Quảng Bà Vị - 166 Lê Đình Dương, Đà Nẵng",
//     ],
//   },
//   {
//     id: "12",
//     name: "Bánh cuốn",
//     description: "Bánh mỏng làm từ bột gạo hấp, nhân thịt và nấm mèo, ăn kèm với chả lụa và nước mắm chua ngọt.",
//     longDescription:
//       "Bánh cuốn là một món ăn truyền thống của miền Bắc Việt Nam, đặc biệt phổ biến ở Hà Nội. Món ăn bao gồm những lớp bánh mỏng làm từ bột gạo hấp, cuộn với nhân thịt lợn xay và nấm mèo. Bánh cuốn thường được ăn kèm với chả lụa (giò lụa), hành phi, và rau thơm, cùng với nước mắm pha chua ngọt. Điểm đặc biệt của bánh cuốn nằm ở lớp bánh mỏng, mềm, và trong suốt, đòi hỏi kỹ thuật làm bánh tinh xảo. Bánh cuốn là món ăn phổ biến cho bữa sáng ở miền Bắc, nhưng cũng có thể được thưởng thức vào bất kỳ thời điểm nào trong ngày.",
//     imageUrl: "/images/banh-cuon.jpg",
//     origin: "Miền Bắc Việt Nam",
//     regions: ["north"],
//     ingredients: ["Bột gạo", "Thịt lợn xay", "Nấm mèo", "Hành phi", "Chả lụa (giò lụa)", "Nước mắm pha chua ngọt"],
//     howToEat:
//       "Bánh cuốn thường được ăn bằng cách chấm vào nước mắm pha chua ngọt. Bạn có thể ăn kèm với chả lụa và rau thơm.",
//     prepTime: "Khoảng 1 giờ",
//     type: "Món ăn nhẹ hoặc món chính",
//     bestPlacesToTry: [
//       "Bánh Cuốn Bà Hoành - 66 Tô Hiến Thành, Hà Nội",
//       "Bánh Cuốn Gia Truyền - 14 Hàng Gà, Hà Nội",
//       "Bánh Cuốn Thanh Trì - 127 Bùi Thị Xuân, Hà Nội",
//     ],
//   },
//   {
//     id: "13",
//     name: "Nem rán (Chả giò)",
//     description: "Món cuốn chiên giòn với nhân thịt, nấm, miến, ăn kèm với rau sống và nước mắm chua ngọt.",
//     longDescription:
//       "Nem rán (miền Bắc) hay chả giò (miền Nam) là một trong những món ăn truyền thống nổi tiếng nhất của Việt Nam. Món ăn bao gồm bánh tráng (làm từ bột gạo) cuốn với nhân thịt lợn xay, nấm mèo, miến, hành, cà rốt, và các gia vị, sau đó được chiên giòn. Nem rán thường được ăn kèm với nhiều loại rau sống như xà lách, húng quế, diếp cá, và nước mắm pha chua ngọt. Món ăn này thường xuất hiện trong các dịp lễ, Tết, hoặc các bữa tiệc gia đình, nhưng cũng là món ăn phổ biến hàng ngày. Nem rán đã trở thành một trong những món ăn Việt Nam được yêu thích trên toàn thế giới.",
//     imageUrl: "/images/nem-ran.jpg",
//     origin: "Việt Nam",
//     regions: ["north", "south"],
//     ingredients: [
//       "Bánh tráng (làm từ bột gạo)",
//       "Thịt lợn xay",
//       "Nấm mèo, miến",
//       "Hành, cà rốt",
//       "Rau sống (xà lách, húng quế, diếp cá)",
//       "Nước mắm pha chua ngọt",
//     ],
//     howToEat:
//       "Nem rán thường được ăn bằng cách gói trong rau sống, sau đó chấm vào nước mắm pha chua ngọt. Một số người thích ăn nem rán với bún.",
//     prepTime: "Khoảng 1-2 giờ",
//     type: "Món khai vị hoặc món ăn nhẹ",
//     bestPlacesToTry: [
//       "Quán Ngon 138 - 138 Nam Kỳ Khởi Nghĩa, TP.HCM",
//       "Nem Rán Bà Hạnh - 26 Phan Bội Châu, Hà Nội",
//       "Nem Rán Cô Tô - 79 Trần Hưng Đạo, Hà Nội",
//     ],
//   },
// ]
export const foods: Food[] = [
  {
    id: "1",
    name: "Phở",
    description: "Món súp mì truyền thống của Việt Nam với nước dùng thơm ngon, bánh phở mềm và thịt bò hoặc gà.",
    longDescription:
      "Phở là một trong những món ăn nổi tiếng nhất của Việt Nam, được yêu thích trên toàn thế giới. Món ăn này bao gồm bánh phở làm từ gạo, nước dùng đậm đà được ninh từ xương bò hoặc gà cùng với các loại gia vị như hồi, quế, đinh hương, và thịt bò tái hoặc chín, thịt gà xé. Phở thường được ăn kèm với các loại rau thơm như húng quế, ngò gai, giá đỗ và ớt, chanh. Mỗi vùng miền của Việt Nam có cách chế biến phở khác nhau, nhưng nổi tiếng nhất là phở Hà Nội với hương vị tinh tế và phở Nam Định với nước dùng đậm đà.",
    imageUrl: "/images/pho.jpg",
    origin: "Hà Nội, Nam Định",
    regions: ["north"],
    ingredients: [
      "Bánh phở",
      "Thịt bò hoặc gà",
      "Xương bò hoặc gà",
      "Hành, gừng",
      "Gia vị: hồi, quế, đinh hương, hạt ngò",
      "Rau thơm: húng quế, ngò gai, hành lá",
    ],
    howToEat:
      "Phở thường được ăn nóng. Bạn có thể thêm giá đỗ, rau thơm, chanh, ớt tùy theo khẩu vị. Một số người thích thêm tương ớt hoặc tương đen.",
    prepTime: "Khoảng 6-8 giờ để nấu nước dùng",
    type: "Món chính",
    bestPlacesToTry: [
      "Phở Thìn - 13 Lò Đúc, Hà Nội",
      "Phở Lý Quốc Sư - 10 Lý Quốc Sư, Hà Nội",
      "Phở Gia Truyền - 49 Bát Đàn, Hà Nội",
    ],
  },
  {
    id: "2",
    name: "Bún chả",
    description: "Món bún ăn kèm với thịt lợn nướng, nước mắm chua ngọt và rau thơm, là đặc sản của Hà Nội.",
    longDescription:
      "Bún chả là một món ăn đặc trưng của Hà Nội, bao gồm bún (mì làm từ gạo), thịt lợn nướng (chả) và nước mắm pha chua ngọt với đu đủ và cà rốt ngâm chua. Thịt lợn được ướp với các loại gia vị như nước mắm, đường, tỏi, hành, sau đó nướng trên than hoa. Bún chả thường được ăn kèm với nhiều loại rau thơm như húng quế, kinh giới, rau diếp, và đôi khi có cả nem rán. Món ăn này đã trở nên nổi tiếng toàn cầu sau khi cựu Tổng thống Mỹ Barack Obama thưởng thức nó trong chuyến thăm Việt Nam năm 2016.",
    imageUrl: "/images/bun-cha.jpg",
    origin: "Hà Nội",
    regions: ["north"],
    ingredients: [
      "Bún (mì gạo)",
      "Thịt lợn (thường là thịt ba chỉ và thịt xay viên)",
      "Nước mắm, đường, tỏi, ớt",
      "Đu đủ và cà rốt ngâm chua",
      "Rau thơm: húng quế, kinh giới, rau diếp",
    ],
    howToEat:
      "Bún chả thường được phục vụ với bún để riêng, thịt nướng và nước mắm pha trong một bát. Bạn lấy một ít bún, nhúng vào bát nước mắm cùng với thịt và rau thơm, sau đó thưởng thức.",
    prepTime: "Khoảng 1-2 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Bún Chả Hương Liên - 24 Lê Văn Hưu, Hà Nội",
      "Bún Chả Đắc Kim - 1 Hàng Mành, Hà Nội",
      "Bún Chả Duy Dừa - 8b Nguyễn Khuyến, Hà Nội",
    ],
  },
  {
    id: "3",
    name: "Bánh mì",
    description:
      "Bánh mì Việt Nam là sự kết hợp hoàn hảo giữa ẩm thực Pháp và Việt Nam, với vỏ bánh giòn và nhân đa dạng.",
    longDescription:
      "Bánh mì Việt Nam là một loại sandwich độc đáo, kết hợp giữa bánh mì kiểu Pháp với các nguyên liệu đặc trưng của Việt Nam. Vỏ bánh mì giòn bên ngoài, mềm bên trong, được nhồi với nhiều loại nhân như thịt xá xíu, chả lụa, pate, thịt nguội, cùng với đồ chua (cà rốt và củ cải ngâm), dưa leo, ngò, ớt và xốt mayonnaise. Bánh mì có mặt ở khắp nơi tại Việt Nam, từ những xe đẩy ven đường đến các cửa hàng sang trọng, và mỗi nơi đều có công thức riêng. Món ăn này đã được Lonely Planet bình chọn là một trong những món ăn đường phố ngon nhất thế giới.",
    imageUrl: "/images/banh-mi.jpg",
    origin: "Sài Gòn (TP.HCM)",
    regions: ["south", "central", "north"],
    ingredients: [
      "Bánh mì Pháp",
      "Thịt (xá xíu, chả lụa, thịt nguội)",
      "Pate",
      "Rau sống (dưa leo, ngò, ớt)",
      "Đồ chua (cà rốt, củ cải)",
      "Xốt mayonnaise, maggi",
    ],
    howToEat:
      "Bánh mì thường được ăn trực tiếp, không cần dùng đũa hay dao nĩa. Bạn có thể yêu cầu thêm hoặc bớt ớt tùy theo khẩu vị.",
    prepTime: "Khoảng 5-10 phút",
    type: "Món ăn nhanh",
    bestPlacesToTry: [
      "Bánh Mì Phượng - 2B Phan Châu Trinh, Hội An",
      "Bánh Mì Huỳnh Hoa - 26 Lê Thị Riêng, TP.HCM",
      "Bánh Mì Bảy Hổ - 12 Nguyễn Thị Nghĩa, TP.HCM",
    ],
  },
  {
    id: "4",
    name: "Cao lầu",
    description: "Món mì đặc trưng của Hội An với sợi mì màu vàng, thịt xá xíu, rau sống và bánh đa giòn.",
    longDescription:
      "Cao lầu là một món ăn đặc trưng của Hội An, có nguồn gốc từ sự giao thoa văn hóa giữa Việt Nam, Trung Quốc và Nhật Bản. Điểm đặc biệt của cao lầu nằm ở sợi mì có màu vàng đặc trưng, được làm từ gạo ngâm trong nước tro từ cây cau và nước giếng Bá Lễ - một giếng nước cổ ở Hội An. Món ăn bao gồm sợi mì, thịt xá xíu, rau sống (rau húng, giá đỗ, rau muống chẻ), và bánh đa giòn. Cao lầu không có nhiều nước như các món mì khác, thay vào đó, nó được tưới một ít nước xá xíu. Theo truyền thống, cao lầu chỉ có thể được làm đúng cách tại Hội An.",
    imageUrl: "/images/cao-lau.jpg",
    origin: "Hội An, Quảng Nam",
    regions: ["central"],
    ingredients: [
      "Mì cao lầu (làm từ gạo ngâm nước tro)",
      "Thịt xá xíu",
      "Rau sống (rau húng, giá đỗ, rau muống chẻ)",
      "Bánh đa giòn",
      "Nước xá xíu",
    ],
    howToEat:
      "Cao lầu thường được ăn ngay khi còn nóng. Bạn có thể trộn đều tất cả các thành phần trước khi thưởng thức, và thêm một chút tương ớt nếu muốn.",
    prepTime: "Khoảng 1-2 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Cao Lầu Bà Bé - 16 Thái Phiên, Hội An",
      "Cao Lầu Nam Sơn - 6A Trường Minh Lương, Hội An",
      "Quán Cao Lầu Thanh - Chợ Hội An",
    ],
  },
  {
    id: "bun-bo-hue",
    name: "Bún bò Huế",
    description: "Món bún bò cay nổi tiếng của Huế với nước dùng đậm đà, thịt bò, chả lụa và tiết.",
    longDescription:
      "Bún bò Huế là một món ăn đặc trưng của cố đô Huế, nổi tiếng với hương vị cay nồng và thơm ngon. Món ăn bao gồm bún (mì gạo), thịt bò, giò heo, chả lụa, và đôi khi có cả tiết. Điểm đặc biệt của bún bò Huế nằm ở nước dùng đậm đà, được nấu từ xương bò và xương heo, kết hợp với sả, gừng, ruốc, ớt, và mắm ruốc Huế. Màu đỏ đặc trưng của nước dùng đến từ ớt và annatto oil (dầu hạt điều). Bún bò Huế thường được ăn kèm với rau sống, giá đỗ, chanh, ớt, và các loại rau thơm.",
    imageUrl: "/images/bun-bo-hue.jpg",
    origin: "Huế, Thừa Thiên Huế",
    regions: ["central"],
    ingredients: [
      "Bún (mì gạo)",
      "Thịt bò, giò heo",
      "Chả lụa, tiết",
      "Sả, gừng, ớt",
      "Mắm ruốc Huế",
      "Rau sống, giá đỗ, chanh",
    ],
    howToEat:
      "Bún bò Huế thường được ăn nóng. Bạn có thể thêm rau sống, giá đỗ, chanh, ớt tùy theo khẩu vị. Một số người thích thêm một chút mắm ruốc để tăng hương vị.",
    prepTime: "Khoảng 3-4 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Bún Bò Huế Mụ Rơi - 11 Lý Thường Kiệt, Huế",
      "Bún Bò Huế Bà Tuyết - 11A Lý Thường Kiệt, Huế",
      "Bún Bò Huế O Phượng - 104 Mai Thúc Loan, Huế",
    ],
  },
  {
    id: "com-tam",
    name: "Cơm tấm",
    description: "Món cơm đặc trưng của Sài Gòn với gạo tấm, sườn nướng, bì, chả trứng và nước mắm ngọt.",
    longDescription:
      "Cơm tấm, hay còn gọi là cơm tấm Sài Gòn, là một món ăn đặc trưng của miền Nam Việt Nam, đặc biệt là ở Thành phố Hồ Chí Minh. Món ăn bao gồm gạo tấm (gạo vỡ) nấu chín, thường được ăn kèm với sườn nướng, bì (da heo luộc thái sợi trộn với bột gạo rang), chả trứng, và đôi khi có thêm mỡ hành, dưa chua, và trứng ốp la. Điểm đặc biệt của cơm tấm nằm ở nước mắm ngọt đậm đà, được rưới lên trên cơm. Cơm tấm là món ăn phổ biến cho bữa sáng và bữa trưa ở Sài Gòn, và có thể tìm thấy ở khắp nơi từ những quán ven đường đến các nhà hàng sang trọng.",
    imageUrl: "/images/com-tam.jpg",
    origin: "Sài Gòn (TP.HCM)",
    regions: ["south"],
    ingredients: [
      "Gạo tấm (gạo vỡ)",
      "Sườn nướng",
      "Bì (da heo luộc thái sợi)",
      "Chả trứng",
      "Mỡ hành, dưa chua",
      "Nước mắm ngọt",
    ],
    howToEat:
      "Cơm tấm thường được ăn với nước mắm ngọt rưới lên trên. Bạn có thể trộn đều tất cả các thành phần trước khi thưởng thức, hoặc ăn từng loại riêng biệt.",
    prepTime: "Khoảng 1-2 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Cơm Tấm Ba Ghiền - 84 Đặng Văn Ngữ, TP.HCM",
      "Cơm Tấm Bụi Sài Gòn - 100 Thái Văn Lung, TP.HCM",
      "Cơm Tấm An Dương Vương - 25-27 An Dương Vương, TP.HCM",
    ],
  },
  {
    id: "banh-xeo",
    name: "Bánh xèo",
    description:
      "Bánh crepe giòn của Việt Nam với nhân tôm, thịt, giá đỗ, được ăn kèm với rau sống và nước mắm chua ngọt.",
    longDescription:
      "Bánh xèo là một món ăn truyền thống của Việt Nam, có nguồn gốc từ miền Trung nhưng phổ biến trên khắp cả nước. Tên gọi 'xèo' đến từ âm thanh khi đổ bột vào chảo dầu nóng. Bánh xèo là một loại bánh crepe giòn, được làm từ bột gạo, nước cốt dừa, nghệ (tạo màu vàng), nhân bên trong gồm tôm, thịt, giá đỗ, và đôi khi có nấm. Bánh xèo miền Nam thường lớn hơn và giòn hơn so với bánh xèo miền Trung. Món ăn này thường được ăn kèm với nhiều loại rau sống như xà lách, diếp cá, húng quế, và nước mắm pha chua ngọt.",
    imageUrl: "/images/banh-xeo.jpg",
    origin: "Miền Trung Việt Nam",
    regions: ["central", "south"],
    ingredients: [
      "Bột gạo, nước cốt dừa, nghệ",
      "Tôm, thịt lợn",
      "Giá đỗ, nấm",
      "Rau sống (xà lách, diếp cá, húng quế)",
      "Nước mắm pha chua ngọt",
    ],
    howToEat:
      "Bánh xèo thường được ăn bằng cách bẻ một miếng bánh, gói trong rau sống, sau đó chấm vào nước mắm pha chua ngọt. Một số người thích ăn bánh xèo với bánh tráng.",
    prepTime: "Khoảng 30-45 phút",
    type: "Món ăn nhẹ hoặc món chính",
    bestPlacesToTry: [
      "Bánh Xèo 46A - 46A Đinh Công Tráng, TP.HCM",
      "Bánh Xèo Mười Xiềm - 190 Nam Kỳ Khởi Nghĩa, TP.HCM",
      "Bánh Xèo Bà Dưỡng - 23 Hoàng Diệu 2, Đà Nẵng",
    ],
  },
  {
    id: "cha-ca",
    name: "Chả cá Lã Vọng",
    description: "Món cá đặc trưng của Hà Nội, được rán với nghệ và thì là, ăn kèm với bún, đậu phộng và mắm tôm.",
    longDescription:
      "Chả cá Lã Vọng là một món ăn truyền thống của Hà Nội, có lịch sử hơn 100 năm. Món ăn này được đặt theo tên của một nhà hàng nổi tiếng ở phố Chả Cá, Hà Nội. Chả cá được làm từ cá lăng hoặc cá quả, ướp với nghệ, gừng, tỏi, và các gia vị khác, sau đó được rán với dầu ăn. Điểm đặc biệt của món ăn này là cá được rán trực tiếp tại bàn ăn, cùng với thì là và hành lá. Chả cá thường được ăn kèm với bún, đậu phộng rang, rau thơm, và đặc biệt là mắm tôm - một loại mắm có mùi mạnh nhưng tạo nên hương vị độc đáo cho món ăn.",
    imageUrl: "/images/cha-ca.jpg",
    origin: "Hà Nội",
    regions: ["north"],
    ingredients: [
      "Cá lăng hoặc cá quả",
      "Nghệ, gừng, tỏi",
      "Thì là, hành lá",
      "Bún (mì gạo)",
      "Đậu phộng rang",
      "Mắm tôm",
    ],
    howToEat:
      "Chả cá thường được rán trực tiếp tại bàn ăn. Bạn lấy một ít bún, đặt cá và rau thơm lên trên, rắc đậu phộng rang, sau đó chấm vào mắm tôm hoặc nước mắm tùy theo khẩu vị.",
    prepTime: "Khoảng 1-2 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Chả Cá Lã Vọng - 14 Chả Cá, Hà Nội",
      "Chả Cá Thăng Long - 19-21-31 Đường Thành, Hà Nội",
      "Chả Cá Anh Vũ - 120 K1 Giảng Võ, Hà Nội",
    ],
  },
  {
    id: "goi-cuon",
    name: "Gỏi cuốn",
    description: "Món cuốn tươi mát với bánh tráng, tôm, thịt lợn, bún, rau sống, ăn kèm với nước chấm đậu phộng.",
    longDescription:
      "Gỏi cuốn, còn được gọi là nem cuốn hoặc spring rolls, là một món ăn nhẹ phổ biến của Việt Nam. Món ăn này bao gồm bánh tráng (làm từ bột gạo) cuốn với tôm, thịt lợn luộc, bún (mì gạo), rau sống như xà lách, húng quế, và đôi khi có thêm giá đỗ, dưa leo. Gỏi cuốn không được chiên như nem rán, mà được ăn tươi, tạo cảm giác nhẹ nhàng và mát mẻ, đặc biệt phù hợp trong những ngày nóng. Món ăn này thường được chấm với nước chấm đậu phộng đặc biệt, được làm từ tương hột (hoisin sauce), đậu phộng rang nghiền và tỏi.",
    imageUrl: "/images/goi-cuon.jpg",
    origin: "Miền Nam Việt Nam",
    regions: ["south", "central"],
    ingredients: [
      "Bánh tráng (làm từ bột gạo)",
      "Tôm, thịt lợn luộc",
      "Bún (mì gạo)",
      "Rau sống (xà lách, húng quế, giá đỗ)",
      "Nước chấm đậu phộng",
    ],
    howToEat:
      "Gỏi cuốn thường được ăn bằng tay, chấm vào nước chấm đậu phộng. Bạn có thể ăn nguyên một cuốn hoặc cắt đôi tùy thích.",
    prepTime: "Khoảng 30 phút",
    type: "Món khai vị hoặc món ăn nhẹ",
    bestPlacesToTry: [
      "Quán Ngon 138 - 138 Nam Kỳ Khởi Nghĩa, TP.HCM",
      "Wrap & Roll - Nhiều chi nhánh ở TP.HCM và Hà Nội",
      "Gỏi Cuốn Hoàng Ty - 121 Nguyễn Thái Học, TP.HCM",
    ],
  },
  {
    id: "hu-tieu",
    name: "Hủ tiếu Nam Vang",
    description: "Món súp mì gạo của miền Nam với nước dùng trong, ngọt, nhiều loại thịt và hải sản.",
    longDescription:
      "Hủ tiếu Nam Vang là một món ăn phổ biến ở miền Nam Việt Nam, có nguồn gốc từ ẩm thực Campuchia (Nam Vang là tên gọi tiếng Việt của Phnom Penh). Món ăn bao gồm mì gạo (có thể là mì khô hoặc mềm tùy theo sở thích), nước dùng trong và ngọt được nấu từ xương heo và tôm khô, cùng với nhiều loại thịt như thịt heo xá xíu, lòng heo, tôm, mực, và đôi khi có cả gan heo, cật heo. Hủ tiếu Nam Vang thường được ăn kèm với giá đỗ, hẹ, và các loại rau thơm. Món ăn này có thể được phục vụ với nước dùng (hủ tiếu nước) hoặc không có nước dùng (hủ tiếu khô, nước dùng để riêng).",
    imageUrl: "/images/hu-tieu.jpg",
    origin: "Miền Nam Việt Nam",
    regions: ["south"],
    ingredients: [
      "Mì gạo (hủ tiếu)",
      "Thịt heo xá xíu, lòng heo",
      "Tôm, mực",
      "Xương heo, tôm khô (để nấu nước dùng)",
      "Giá đỗ, hẹ, rau thơm",
    ],
    howToEat:
      "Hủ tiếu có thể được ăn với nước dùng (hủ tiếu nước) hoặc không có nước dùng (hủ tiếu khô, nước dùng để riêng). Bạn có thể thêm giá đỗ, rau thơm, chanh, ớt tùy theo khẩu vị.",
    prepTime: "Khoảng 2-3 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Hủ Tiếu Nam Vang Nhân Quán - 68 Huỳnh Tịnh Của, TP.HCM",
      "Hủ Tiếu Sa Đéc Ký Lân - 84 Nguyễn Du, TP.HCM",
      "Hủ Tiếu Nam Vang Nhân Nghĩa - 125 Nguyễn Thị Minh Khai, TP.HCM",
    ],
  },
  {
    id: "mi-quang",
    name: "Mì Quảng",
    description: "Món mì đặc trưng của Quảng Nam với sợi mì vàng, ít nước, nhiều loại thịt, hải sản và đậu phộng.",
    longDescription:
      "Mì Quảng là một món ăn đặc trưng của miền Trung Việt Nam, đặc biệt là tỉnh Quảng Nam. Món ăn bao gồm sợi mì màu vàng (do được làm từ gạo ngâm với nghệ), ít nước dùng đậm đà, và nhiều loại thịt như thịt gà, thịt heo, tôm, và đôi khi có cả trứng luộc. Điểm đặc biệt của Mì Quảng là nước dùng ít hơn so với các món mì khác, chỉ đủ để thấm vào sợi mì. Món ăn thường được trang trí với đậu phộng rang nghiền, bánh tráng mè nướng giòn, và các loại rau thơm như húng quế, rau răm, giá đỗ, chuối xanh thái lát, và ớt.",
    imageUrl: "/images/mi-quang.jpg",
    origin: "Quảng Nam",
    regions: ["central"],
    ingredients: [
      "Mì gạo màu vàng (do nghệ)",
      "Thịt gà, thịt heo, tôm",
      "Đậu phộng rang nghiền",
      "Bánh tráng mè nướng giòn",
      "Rau thơm (húng quế, rau răm, giá đỗ, chuối xanh)",
    ],
    howToEat:
      "Mì Quảng thường được ăn bằng cách trộn đều tất cả các thành phần trước khi thưởng thức. Bạn có thể thêm một chút nước cốt chanh và ớt tùy theo khẩu vị.",
    prepTime: "Khoảng 1-2 giờ",
    type: "Món chính",
    bestPlacesToTry: [
      "Mì Quảng Bà Mua - 95 Trần Cao Vân, Đà Nẵng",
      "Mì Quảng Ông Hai - 152 Hoàng Diệu, Đà Nẵng",
      "Mì Quảng Bà Vị - 166 Lê Đình Dương, Đà Nẵng",
    ],
  },
  {
    id: "banh-cuon",
    name: "Bánh cuốn",
    description: "Bánh mỏng làm từ bột gạo hấp, nhân thịt và nấm mèo, ăn kèm với chả lụa và nước mắm chua ngọt.",
    longDescription:
      "Bánh cuốn là một món ăn truyền thống của miền Bắc Việt Nam, đặc biệt phổ biến ở Hà Nội. Món ăn bao gồm những lớp bánh mỏng làm từ bột gạo hấp, cuộn với nhân thịt lợn xay và nấm mèo. Bánh cuốn thường được ăn kèm với chả lụa (giò lụa), hành phi, và rau thơm, cùng với nước mắm pha chua ngọt. Điểm đặc biệt của bánh cuốn nằm ở lớp bánh mỏng, mềm, và trong suốt, đòi hỏi kỹ thuật làm bánh tinh xảo. Bánh cuốn là món ăn phổ biến cho bữa sáng ở miền Bắc, nhưng cũng có thể được thưởng thức vào bất kỳ thời điểm nào trong ngày.",
    imageUrl: "/images/banh-cuon.jpg",
    origin: "Miền Bắc Việt Nam",
    regions: ["north"],
    ingredients: ["Bột gạo", "Thịt lợn xay", "Nấm mèo", "Hành phi", "Chả lụa (giò lụa)", "Nước mắm pha chua ngọt"],
    howToEat:
      "Bánh cuốn thường được ăn bằng cách chấm vào nước mắm pha chua ngọt. Bạn có thể ăn kèm với chả lụa và rau thơm.",
    prepTime: "Khoảng 1 giờ",
    type: "Món ăn nhẹ hoặc món chính",
    bestPlacesToTry: [
      "Bánh Cuốn Bà Hoành - 66 Tô Hiến Thành, Hà Nội",
      "Bánh Cuốn Gia Truyền - 14 Hàng Gà, Hà Nội",
      "Bánh Cuốn Thanh Trì - 127 Bùi Thị Xuân, Hà Nội",
    ],
  },
  {
    id: "nem-ran",
    name: "Nem rán (Chả giò)",
    description: "Món cuốn chiên giòn với nhân thịt, nấm, miến, ăn kèm với rau sống và nước mắm chua ngọt.",
    longDescription:
      "Nem rán (miền Bắc) hay chả giò (miền Nam) là một trong những món ăn truyền thống nổi tiếng nhất của Việt Nam. Món ăn bao gồm bánh tráng (làm từ bột gạo) cuốn với nhân thịt lợn xay, nấm mèo, miến, hành, cà rốt, và các gia vị, sau đó được chiên giòn. Nem rán thường được ăn kèm với nhiều loại rau sống như xà lách, húng quế, diếp cá, và nước mắm pha chua ngọt. Món ăn này thường xuất hiện trong các dịp lễ, Tết, hoặc các bữa tiệc gia đình, nhưng cũng là món ăn phổ biến hàng ngày. Nem rán đã trở thành một trong những món ăn Việt Nam được yêu thích trên toàn thế giới.",
    imageUrl: "/images/nem-ran.jpg",
    origin: "Việt Nam",
    regions: ["north", "south"],
    ingredients: [
      "Bánh tráng (làm từ bột gạo)",
      "Thịt lợn xay",
      "Nấm mèo, miến",
      "Hành, cà rốt",
      "Rau sống (xà lách, húng quế, diếp cá)",
      "Nước mắm pha chua ngọt",
    ],
    howToEat:
      "Nem rán thường được ăn bằng cách gói trong rau sống, sau đó chấm vào nước mắm pha chua ngọt. Một số người thích ăn nem rán với bún.",
    prepTime: "Khoảng 1-2 giờ",
    type: "Món khai vị hoặc món ăn nhẹ",
    bestPlacesToTry: [
      "Quán Ngon 138 - 138 Nam Kỳ Khởi Nghĩa, TP.HCM",
      "Nem Rán Bà Hạnh - 26 Phan Bội Châu, Hà Nội",
      "Nem Rán Cô Tô - 79 Trần Hưng Đạo, Hà Nội",
    ],
  },
]