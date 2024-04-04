const express = require('express')
const route = express.Router();
const { PrismaClient } = require('@prisma/client');
const productService = require('../services/productService');

const prisma = new PrismaClient()

route.get('/getAll', async (req, res) => {
    try {
        const allProduct = await productService.getAllProduct();
        res.set('Access-Control-Allow-Origin', '*');
        res.json(allProduct);
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

route.get('/getById/:id', async (req, res) => {
    try {   
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.json(product)
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

module.exports = route;