const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    getAllProduct: async () => {
        return await prisma.product.findMany({
            select: {
                id: true,
                name: true,
                countInStock: true,
                oldPrice: true,
                newPrice: true,
                sold: true,
                rating: true,
                description: true,
                images: {
                    select: {
                        id: true,
                        url: true
                    }
                },
                options: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    },
    getProductById: async (productId) => {
        return await prisma.product.findFirst({
            select: {
                id: true,
                name: true,
                countInStock: true,
                oldPrice: true,
                newPrice: true,
                sold: true,
                rating: true,
                description: true,
                images: {
                    select: {
                        id: true,
                        url: true
                    }
                },
                options: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            where:{
                id: parseInt(productId)
            }
        })
    }
}
