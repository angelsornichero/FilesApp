const fs = require('fs')
const error = require('../middlewares/error-response')
const normalizePath = require('./path') 
const whatUser = require('../auth/whatUser')
require('dotenv').config()

const checkFilesExists = (path) => {
    console.log(path)
    fs.stat(path, function(err, stat) {
        if(err == null) {
            return true    
        }
        else {
            
            return false
        }
    })
}

module.exports = (req, res) => {
    const path = normalizePath(req, req.params.path)
    // const user = whatUser(req)
    const { fileName } = req.body
    
    const checked = checkFilesExists(path.absolutePath + '/'  + fileName)

    if (checked === false) error({statusCode: 404, message: 'The path is invalid or no exists'}, res)

    res.sendFile(path.absolutePath + '/' + fileName)
    


}