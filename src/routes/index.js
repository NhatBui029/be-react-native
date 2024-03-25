const testRoute = require('./testRoute')

function routes (app) {
    app.use('/test', testRoute)
}

module.exports = routes;