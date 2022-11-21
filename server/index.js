const express = require('express')
const fileupload = require('express-fileupload')
const router = require('./router/routes')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 3000
// Middlewares
app.use(fileupload())

// Routes
app.use('/', router)

app.listen(port, () =>{
    console.log('Listen on port: ', port)
})