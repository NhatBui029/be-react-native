const testRoute = require('./testRoute')
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')
const cartRoute = require('./cartRoute')
const optionRoute = require('./optionRoute')

function routes (app) {
    app.use('/test', testRoute)
    app.use('/user', userRoute)
    app.use('/product', productRoute)
    app.use('/cart', cartRoute)
    app.use('/option', optionRoute)
}

module.exports = routes;