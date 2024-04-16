const express = require('express')
const route = express.Router();
const { PrismaClient } = require('@prisma/client');
const userService = require('../services/userService');

const prisma = new PrismaClient()

route.post('/register', async (req, res) => {
    try {
        const { email, username, password, userId } = req.body;
        const newUser = await userService.addUser(email, username, password, userId);
        console.log('new user: ',newUser)
        res.send({ mes: newUser })
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

route.post('/getInfoUser', async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await userService.getUserbyUserId(userId);
        const infoUser = await userService.getInfoUser(user.id);
        res.send(infoUser);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

route.patch('/edit/account', async (req, res) => {
    try {
        const {userId, email, username, password} = req.body;
        const user = await userService.getUserbyUserId(userId);
        const editUser = await userService.editAccount(user.id, username, password, email);
        res.send(editUser);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

route.patch('/edit/info', async (req, res) => {
    try {
        const {userId, name, phone, birthday, address} = req.body;
        const user = await userService.getUserbyUserId(userId);
        const existingAddress  = await userService.getAddressByUserId(user.id);
        if(!existingAddress){
            const newAddress = await userService.createAddress(user.id, address);
        }
        const editUser = await userService.editInfo(user.id,  name, phone, birthday, address);
        res.send(editUser);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

module.exports = route;