const fs = require('fs')
const error = require('../middlewares/error-response')
const normalizePath = require('./path') 

const checkPath = (path) => {
    try {fs.readdirSync(path)}
    catch (err) {return false}
    
}

module.exports = (req, res) => {
    const { dirName } = req.body
    const path = normalizePath(req, req.params.path)
    const checked = checkPath(path.absolutePath)

    if (checked === false) error({statusCode: 404, message: '[!] The path is not valid'}, res)
    
    fs.mkdirSync(path.absolutePath + '/' + dirName)

    res.json({success: true, message: '[*] Directory made'})
}