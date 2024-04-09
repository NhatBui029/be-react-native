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
                cart: {
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
    },
    getInfoUser: async (id) => {
        return await prisma.user.findFirst({
            select: {
                id: true,
                name: true,
                phone: true,
                birthday: true,
                address: {
                    select: {
                        address: true,
                    }
                },
                account: {
                    select: {
                        email: true,
                        username: true,
                        password: true
                    }
                }
            },
            where: {
                id: parseInt(id)
            }
        })
    },
    editAccount: async (userId, username, password, email) => {
        return await prisma.account.update({
            where: {
                userId: userId
            },
            data: {
                email: email,
                username: username,
                password: password
            }
        })
    },
    editInfo: async (userId, name, phone, birthday, address) => {
        return await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name: name,
                phone: phone,
                birthday: birthday,
                address: {
                    update: {
                        where: { userId: userId },
                        data: { address: address }
                    }
                }
            }
        })
    },
    getAddressByUserId: async (userId) => {
        return await prisma.address.findFirst({
            where: { userId: userId }
        });
    },
    createAddress: async (userId, address) => {
        return await prisma.address.create({
            data: {
                userId: userId,
                address: address
            }
        });
    }
}
