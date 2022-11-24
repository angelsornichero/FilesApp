const jwt = require('jsonwebtoken')

module.exports = (req) => {
    token = req.headers.authorization.replace('token ', '')
    decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded.username
} 