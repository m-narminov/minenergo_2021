const express = require('express')
const authRouter = require('./auth')
const gladeRouter = require('./glade')

const app = express()

app.use('/auth/', authRouter)
app.use('/glade/', gladeRouter)

module.exports = app
