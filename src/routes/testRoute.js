const express = require('express')
const route = express.Router();
const TestService = require('../services/testService');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

route.get('/add', async (req, res) => {
    try {
        const newUser = await TestService.addUser();
        res.send({ mes: newUser })
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

module.exports = route;