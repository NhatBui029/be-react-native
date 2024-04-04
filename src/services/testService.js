const { PrismaClient } = require('@prisma/client')
const data = require('../data/products')
const prisma = new PrismaClient()

module.exports = {
    addUser: async () => {
        return await prisma.user.create({
            data: {
                name: 'TheodoreBui',
                email: 'nhatBui2434@prisma.io',
                posts: {
                    create: {
                        title: 'Hello World',
                        content: 'Hello'
                    },
                },
            }
        });
    },
    addProfileUser: async () => {
        return await prisma.profile.create({
            data: {
                bio: 'hello nhat',
                userId: 6
            }
        })
    },
    getAllUser: async () => {
        const allUser = await prisma.user.findMany({
            select: {
                name: true,
                phone: true,
                account: {
                    select: {
                        email: true,
                        username: true,
                        password: true,
                    },
                },
            },
        });
        return allUser;
    },
    addProduct: async () => {
        const res = await prisma.product.create({
            data: {
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
            include: {// create array
                images: true,
                options: true
            }
        });
        return res;
    }
}

