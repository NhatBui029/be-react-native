const express = require('express')
const route = express.Router();
const { PrismaClient } = require('@prisma/client');
const userService = require('../services/userService');

const prisma = new PrismaClient()

route.post('/add', async (req, res) => {
    try {
        const { email, username, password, userId } = req.body;
        console.log(email, username, password);
        const newUser = await userService.addUser(email, username, password, userId);
        res.send({ mes: newUser })
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

module.exports = route;