const error = require('./error-response')
const jwt = require('jsonwebtoken')
const auth = {}


auth.isAuthenticated = (req, res, next) => {
    if (!req.headers.authorization) error({statusCode: 401, message: '[!] You have to put a header of authorization'}, res)
    token = req.headers.authorization.replace('token ', '')
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
        
    }
    catch(err) {
        error({statusCode: 401, message: '[!] The token is invalid'}, res)
    }
    
    return next()
}

module.exports = auth