const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const routes = require('./routes');
var cors = require('cors');
require('dotenv').config()

app.use(cors()); 

app.use(
    express.urlencoded({
        extended: true,
    }),
    morgan('dev'),
    express.json()
);

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})