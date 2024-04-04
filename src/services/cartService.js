const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    addToCart: async (cartId, productId, optionId, quantity) => {
        return await prisma.cartDetail.create({
            data: {
                cartId: parseInt(cartId),
                productId: productId,
                optionId: optionId,
                quantity: quantity
            }
        })
    },
    getCartByUserId: async (userId) => {
        return await prisma.cart.findFirst({
            where: {
                userId: parseInt(userId)
            },
            select: {
                id: true
            }
        })
    },
    getExistingCartDetail: async (cartId, productId, optionId) => {
        return await prisma.cartDetail.findFirst({
            where: {
                cartId,
                optionId,
                productId
            }
        })
    },
    updateCartDetail: async (id, quantity, incrementBoolean) => {
        let updateData = {
            quantity: typeof incrementBoolean == 'boolean' ? {
                [incrementBoolean ? 'increment' : 'decrement']: parseInt(quantity)
            } : parseInt(quantity)
        };

        return await prisma.cartDetail.update({
            where: {
                id: parseInt(id)
            },
            data: updateData
        })
    },
    getCartDetailByCartId: async (cartId) => {
        return await prisma.cartDetail.findMany({
            where: {
                cartId: parseInt(cartId)
            },
            select: {
                id: true,
                quantity: true,
                optionId: true,
                productId: true
            }
        })
    },
    deleteCartDetail: async (cartDetailId) =>{
        return await prisma.cartDetail.delete({
            where: {
                id: parseInt(cartDetailId)
            }
        })
    }
}
