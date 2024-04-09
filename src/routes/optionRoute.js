const express = require('express')
const route = express.Router();
const { PrismaClient } = require('@prisma/client');
const optionService = require('../services/optionService');

const prisma = new PrismaClient()

route.get('/getById/:id', async (req, res) => {
    try {   
        res.set('Access-Control-Allow-Origin', '*');
        const optionId = req.params.id;
        const option = await optionService.getOptionById(optionId);
        res.json(option.name)
    } catch (e) {
        console.error(e.message)
        await prisma.$disconnect()
        process.exit(1)
    }
});

module.exports = route;