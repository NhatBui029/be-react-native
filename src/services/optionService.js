const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    getOptionById: async (optionId) => {
        return await prisma.option.findFirst({
            select: {
                name: true
            },
            where:{
                id: parseInt(optionId)
            }
        })
    }
}
