const CONFIG = require('./config/config')
const express = require('express')
const errorHandler = require('./Middleware/errorHandler')
const signup = require('./routes/signup')
const login = require('./Controllers/login')
const blog = require('./routes/blog')

const app = express()

console.log(CONFIG.DATABASE_CONNECT_STRING)
// connect to db
require('./Middleware/db')(CONFIG.DATABASE_CONNECT_STRING)

// parse information from request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/signup', signup)
app.use('/api/login', login)
app.use('/api/blog', blog)

// use error handler middleware
app.use(errorHandler)

module.exports = app