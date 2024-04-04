const express = require('express')
const route = express.Router();
const TestService = require('../services/testService');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

route.get('/addProduct', async (req, res) => {
    try {
        const allProduct = await TestService.addProduct();
        res.send({ mes: allProduct })
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

route.get('/getAll', async (req, res) => {
    try {
        const newUser = await TestService.getAllUser();
        res.json(newUser)
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

module.exports = route;