const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    addUser: async () => {
        return await prisma.user.create({
            data: {
                name: 'TheodoreBui',
                email: 'nhatBui24@prisma.io',
                posts: {
                    create: {
                        title: 'Hello World',
                        content: 'Hello'
                    },
                },
                profile: {
                    create: { bio: 'tet tihc' },
                },
            }
        });
    },
    getAllUser: async () => {
        const allUser = await prisma.user.findMany({
            select: {
                name: true,
                email: true,
                posts: {
                    select: {
                        title: true,
                    },
                },
            },
        });
        return allUser;
    }
}


