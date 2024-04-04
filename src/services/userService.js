const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    addUser: async (email, username, password, userId) => {
        return await prisma.user.create({
            data: {
                userId: userId,
                name: '',
                phone: '',
                birthday: '',
                account: {
                    create: {
                        email: email,
                        username: username,
                        password: password
                    }
                },
                cart:{
                    create: {
                        quantity: 0
                    }
                }
            }
        });
    },
    getUserbyUserId: async (userId) => {
        return await prisma.user.findFirst({
            select: {
                id: true
            },
            where: {
                userId: userId
            }
        })
    }
}
