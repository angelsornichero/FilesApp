const error = require('../middlewares/error-response')
const normalizePath = require('./path')
const fs = require('fs')


const checkPath = (path) => {
    try {fs.readdirSync(path)}
    catch (err) {return false}
    
}

module.exports = (req, res) => {    
    const path = normalizePath(req, req.params.path)
    const files = req.files.undefined
    if (!req.files) {
            error({statusCode: 400, message: 'NO files attached'}, res)
        }
    if (checkPath(path.absolutePath) === false) error({statusCode: 418, message: '[!] The path is not valid'}, res)
    
    else {
        files.forEach(file => {
            file.mv(path.absolutePath + '/' + file.name)        
                
            
        })
    }
    
    
    
    res.json({message: 'Files Uploaded correctly', succes: true})
}


