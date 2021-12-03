const jwt = require('express-jwt')
const secret = process.env.JWT_SECRET || '123'

const authenticate = jwt({
  secret: secret,
})

module.exports = authenticate
