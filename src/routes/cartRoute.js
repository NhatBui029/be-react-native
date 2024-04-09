const express = require('express')
const route = express.Router();
const { PrismaClient } = require('@prisma/client');
const userService = require('../services/userService');
const cartService = require('../services/cartService');

const prisma = new PrismaClient()

route.post('/add', async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        const { userId, productId, optionId, quantity } = req.body;
        const user = await userService.getUserbyUserId(userId); // convert id of firebase to id of mysql (1-1)
        const cart = await cartService.getCartByUserId(user.id);
        const existingCartDetail = await cartService.getExistingCartDetail(cart.id, productId, optionId);

        const productAddToCart = existingCartDetail ?
            await cartService.updateCartDetail(existingCartDetail.id, quantity, true)
            : await cartService.addToCart(cart.id, productId, optionId, quantity);

        res.json(productAddToCart);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

route.post('/getAll', async (req, res) => {
    try {
        const { userId } = req.body;
        console.log(userId)
        const user = await userService.getUserbyUserId(userId);
        const cart = await cartService.getCartByUserId(user.id);
        const listCartDetail = await cartService.getCartDetailByCartId(cart.id);
        res.set('Access-Control-Allow-Origin', '*');
        res.json(listCartDetail);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
})

route.patch('/update', async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        const { id, quantity } = req.body;
        const updateCartDetail = await cartService.updateCartDetail(id, quantity);
        res.json(updateCartDetail);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
})

route.delete('/delete/:id', async (req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', '*');
        const { id } = req.params;
        const deleteCartDetail = await cartService.deleteCartDetail(id);
        res.json(deleteCartDetail);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
})

module.exports = route;