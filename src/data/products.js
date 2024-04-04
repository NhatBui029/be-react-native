const data = [
    {
        name: 'Giày Nike Jordan1 Low',
        description: 'Air Jordan 1 Retro Low được phát hành lần đầu tiên vào năm 2004. \
                            Bao gồm màu xanh hải quân trắng, đen và nửa đêm này. Tương tự như bản \
                            phát hành Retro + từ năm 2001, đôi này có phần trên bằng da lộn màu trắng\
                            với các điểm nhấn màu xanh nước biển và đen nubuck được hoàn thiện bằng thương \
                            hiệu bạc kim loại trên lưỡi gà. Sự khác biệt chính giữa hai bản phát hành là điểm \
                            nhấn màu đen ở âm thấp và điểm nhấn màu bạc ở âm trung / cao. Hình dạng của chúng \
                            cũng khá độc đáo, vì chúng không phải là bản dựng hoàn toàn giống với AJ 1 Low ban \
                            đầu từ ’85-86. Phiên bản phát hành lại này như 1 lần hoài cổ mà Nike muốn đem lại \
                            sự trải nghiệm cho người dùng.',
        oldPrice: 1230000,
        newPrice: 999000,
        countInStock: 4,
        sold: 11,
        rating: 4,
        images: {
            create: [
                {
                    url: 'https://img.lazcdn.com/g/p/2c9bed6faeecc52094cd3552629c37d7.jpg_720x720q80.jpg'
                }
            ]
        },
        options: {
            create: [
                { name: '38' },
                { name: '39' },
                { name: '40' },
                { name: '41' },
                { name: '42' },
                { name: '43' },
            ]
        }
    },
    {
        name: 'Giày Adidas Samba OG',
        description: 'Ra đời trên sân bóng, giày Samba là biểu tượng kinh điển của phong cách đường phố. Phiên bản này trung thành với di sản, thể hiện qua thân giày bằng da mềm, dáng thấp, nhã nhặn, các chi tiết phủ ngoài bằng da lộn và đế gum, biến đôi giày trở thành item không thể thiếu trong tủ đồ của tất cả mọi người - cả trong và ngoài sân cỏ.',
        oldPrice: 2700000,
        newPrice: 1700000,
        countInStock: 10,
        sold: 16,
        rating: 4,
        images: {
            create: [
                {
                    url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Giay_Samba_OG_trang_B75806_01_standard.jpg'
                }
            ]
        },
        options: {
            create: [
                { name: '38' },
                { name: '39' },
                { name: '40' },
                { name: '41' },
                { name: '42' },
                { name: '43' },
            ]
        }
    },
    {
        name: 'Giày Adidas Gazelle Indoor',
        description: 'Ra đời trên sân bóng, giày Samba là biểu tượng kinh điển của phong cách đường phố. Phiên bản này trung thành với di sản, thể hiện qua thân giày bằng da mềm, dáng thấp, nhã nhặn, các chi tiết phủ ngoài bằng da lộn và đế gum, biến đôi giày trở thành item không thể thiếu trong tủ đồ của tất cả mọi người - cả trong và ngoài sân cỏ.',
        oldPrice: 2900000,
        newPrice: 1900000,
        countInStock: 19,
        sold: 13,
        rating: 5,
        images: {
            create: [
                {
                    url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/73c8db7094f048359bdbb26d4dd200ea_9366/Giay_Gazelle_Indoor_trang_IG1643_01_standard.jpg'
                }
            ]
        },
        options: {
            create: [
                { name: '38' },
                { name: '39' },
                { name: '40' },
                { name: '41' },
                { name: '42' },
                { name: '43' },
            ]
        }
    },
    {
        name: 'Giày Adidas Racer TR23',
        description: 'Thanh thoát, năng động và thoải mái tuyệt đối. Kết hợp hoàn hảo với quần jeans, váy và mọi item khác trong tủ đồ, đôi giày sneaker adidas này sẽ luôn là lựa chọn hàng đầu của bạn. Thân giày mượt mà cho cảm giác mềm mại, cùng lớp đệm Cloudfoam mang lại cảm giác nâng đỡ cần thiết vào những ngày bạn phải tất bật di chuyển khắp nơi.Làm từ một loạt chất liệu tái chế, thân giày có chứa tối thiểu 50% thành phần tái chế. Sản phẩm này đại diện cho một trong số rất nhiều các giải pháp của chúng tôi hướng tới chấm dứt rác thải nhựa.',
        oldPrice: 1800000,
        newPrice: 1100000,
        countInStock: 19,
        sold: 13,
        rating: 4,
        images: {
            create: [
                {
                    url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb7f79bbc0fb488ebe71de561b2e5d54_9366/Giay_Racer_TR23_Be_IG7346_01_standard.jpg'
                }
            ]
        },
        options: {
            create: [
                { name: '38' },
                { name: '39' },
                { name: '40' },
                { name: '41' },
                { name: '42' },
                { name: '43' },
            ]
        }
    },
    {
        name: 'Giày Adidas Trainer Dropset 2.0 Earth',
        description: 'Bất kể mục tiêu của bạn là gì, đôi giày sneaker tập luyện adidas này sẽ giúp bạn chinh phục tất cả. Giày có dáng thấp tạo cảm giác sát đất tối ưu mang lại sự ổn định, tư thế chuẩn và chuyển động tự tin. Đế giữa mật độ kép có phần gót giày cứng hơn giúp truyền lực tối đa và mũi giày mềm hơn mang lại sự linh hoạt.Sản phẩm này làm từ sợi dệt có chứa 50% polyester tái chế và 50% sợi Parley Ocean Plastic — rác thải nhựa tái chế thu gom từ các vùng đảo xa, bãi biển, khu dân cư ven biển và đường bờ biển, nhằm ngăn chặn ô nhiễm đại dương. Sản phẩm này có tổng cộng 20% thành phần tái chế.',
        oldPrice: 3500000,
        newPrice: 3200000,
        countInStock: 45,
        sold: 43,
        rating: 4,
        images: {
            create: [
                {
                    url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6bf96b8e1dc4eaba906e57975e6d391_9366/Giay_Trainer_Dropset_2.0_Earth_Be_IG3083_01_standard.jpg'
                }
            ]
        },
        options: {
            create: [
                { name: '38' },
                { name: '39' },
                { name: '40' },
                { name: '41' },
                { name: '42' },
                { name: '43' },
            ]
        }
    },
    {
        name: 'Giày Adidas Trainer Duramo SL 2.0',
        description: 'Khi tập yoga buổi sáng, làm việc vặt trong ngày hay đi chơi tối cùng bạn bè, hãy giữ cho đôi chân bạn luôn thoải mái và đảm bảo phong cách chuẩn chỉnh với đôi giày adidas này. Kết hợp cùng chiếc quần bó ưa thích, bạn sẽ có được phong cách thể thao mà casual. Thân giày bằng vải lưới giúp bạn luôn mát mẻ, cùng lớp đệm siêu nhẹ nâng niu từng sải bước. Làm từ một nhóm chất liệu tái chế, thân giày có chứa ít nhất 50% thành phần tái chế. Sản phẩm này đại diện cho một trong số rất nhiều các giải pháp của chúng tôi hướng tới chấm dứt rác thải nhựa.',
        oldPrice: 1900000,
        newPrice: 1500000,
        countInStock: 35,
        sold: 43,
        rating: 4,
        images: {
            create: [
                {
                    url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/615492a8cb4e4f1f9e79af3501048a6b_9366/Giay_Duramo_SL_2.0_trai_cam_HP2387_01_standard.jpg'
                }
            ]
        },
        options: {
            create: [
                { name: '36' },
                { name: '37' },
                { name: '38' },
                { name: '39' },
                { name: '40' },
            ]
        }
    },
    {
        name: 'Giày Nike Air Jordan 1 Mid Smoke Grey',
        description: 'AirJordan 1 Mid Smoke Grey được giới thiệu lần đầu vào tháng 6 năm 2020 mới mức giá đề xuất là 115$. Đây là đôi giày thuộc phân hạng phổ thông khi không có bất kỳ một chất liệu cao cấp hay chi tiết khác biệt nào cả. Vật liệu chính của đôi giày vẫn là chất liệu da tổng hợp cùng với những họa tiết truyền thống như những đôi Air Jordan 1 khác. Có chăng điều tạo nên ấn tượng với đôi giày này chính là phối màu của nó. Air Jordan 1 Mid Smoke Grey có phối màu đơn giản nhưng rất tuyệt vời. Với phối màu đen, trắng và xám khói khiến Smoke Grey mặc dù mang tông màu trung tính những vẫn có những điểm nhấn nổi bật từ những mảng sáng tối khác nhau. Với phối màu trung tính, hiển nhiên đôi giày này rất dễ phối đồ với tủ quần áo sẵn có lẫn sử dụng hằng ngày.',
        oldPrice: 4350000,
        newPrice: 3500000,
        countInStock: 35,
        sold: 43,
        rating: 4,
        images: {
            create: [
                {
                    url: 'https://bizweb.dktcdn.net/100/413/756/products/image-1678972541420.png?v=1679577284337'
                }
            ]
        },
        options: {
            create: [
                { name: '38' },
                { name: '39' },
                { name: '40' },
                { name: '41' },
                { name: '42' },
                { name: '43' },
            ]
        }
    },
    {
        name: 'Giày Nike Air Jordan 1 Low GS Triple White',
        description: 'Nike Air Jordan 1 với lịch sử hơn 30 năm luôn được nhìn nhận như một trong những dòng sản phẩm thành công nhất của Nike. Nike Jordan 1 luôn bán hết một cách nhanh chóng ngay từ khi ra mắt đến nay, luôn là sản phẩm được các tín đồ thời trang chú ý hàng đầu. Air Jordan được đặt dựa theo ngôi sao bóng rổ lừng danh Michael Jordan – huyền thoại của NBA.',
        oldPrice: 2350000,
        newPrice: 1500000,
        countInStock: 35,
        sold: 43,
        rating: 5,
        images: {
            create: [
                {
                    url: 'https://bizweb.dktcdn.net/100/413/756/products/air-jordan-1-low-shoe-pcxgkc.png?v=1675918105223'
                }
            ]
        },
        options: {
            create: [
                { name: '36' },
                { name: '37' },
                { name: '38' },
                { name: '39' },
                { name: '40' },
            ]
        }
    },
]

module.exports = data

/*
model Product {
    id           Int           @id @default(autoincrement())
    name         String
    countInStock Int
    oldPrice     Float
    newPrice     Float
    sold         Int
    rating       Int
    description  String        @db.VarChar(5000)
    Image        Image[]
    Comment      Comment[]
    Option       Option[]
    CartDetail   CartDetail[]
    OrderDetail  OrderDetail[]
}
model Image {
    id        Int     @id @default(autoincrement())
    url       String? @db.VarChar(500)
    productId Int
    product   Product @relation(fields: [productId], references: [id])
}
model Option {
    id          Int           @id @default(autoincrement())
    name        String?       @unique @db.VarChar(20)
    productId   Int
    product     Product       @relation(fields: [productId], references: [id])
    OrderDetail OrderDetail[]
}
*/