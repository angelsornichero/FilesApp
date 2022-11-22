const express = require('express')
const fileupload = require('express-fileupload')
const router = require('./router/routes')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000
// Middlewares
app.use(fileupload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
app.use('/', router)

app.listen(port, () =>{
    console.log('Listen on port: ', port)
})