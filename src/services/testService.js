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
                name: 'Giày Air Jordan 1 Low WMNS - Sky J Orange',
                description: 'Luôn luôn trong, luôn tươi mới. Air Jordan 1 Low mang đến cho bạn một phần lịch sử và di sản của Jordan mà bạn cảm thấy thoải mái cả ngày. Chọn màu sắc của bạn, sau đó bước ra ngoài với thiết kế mang tính biểu tượng được xây dựng bằng sự kết hợp giữa các vật liệu cao cấp và Air được gói gọn ở gót chân.',
                oldPrice: 3999000,
                newPrice: 3450000,
                countInStock: 43,
                sold: 98,
                rating: 4,
                images: {
                    create: [
                        {
                            url: 'https://product.hstatic.net/1000361048/product/dc0774_080_c_a1172bb365c145daa311610b1601ad91_master.jpg'
                        }
                    ]
                },
                options: {
                    create: [
                        { name: '36', countInStock: 7, sold: 10 },
                        { name: '37',countInStock: 8, sold: 15 },
                        { name: '38' ,countInStock: 9, sold: 12},
                        { name: '39' ,countInStock: 5, sold: 16},
                        { name: '40' ,countInStock: 10, sold: 13},
                        { name: '41' ,countInStock: 12, sold: 15},
                        { name: '42' ,countInStock: 3, sold: 18},
                        { name: '42' ,countInStock: 6, sold: 12},
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

