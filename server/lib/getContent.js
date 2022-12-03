const fs = require('fs')
const error = require('../middlewares/error-response')
const normalizePath = require('./path') 
require('dotenv').config()

const getContent = (path, res) => {
    try {
    return files = fs.readdirSync(path, (err, result) => {
        if (err) throw err
        return result
        })
    }
    catch {
        // error({statusCode: 418, message: '[!] The path is not valid'}, res)
        
    }
}




module.exports = (req, res) => {
    const path = normalizePath(req, req.params.path)
    content = getContent(path.absolutePath, res)
    
    directories = []
    filesArray = []
    content.forEach(file => {
        if(fs.lstatSync(path.absolutePath + '/' + file).isDirectory() === true) {
            directories.push(file)
        }
    });
    content.forEach(file => {
        if(fs.lstatSync(path.absolutePath + '/' + file).isFile() === true) {
            filesArray.push(file)
        }
    });
    
    res.json({path: path.relativePath, files: filesArray, directories: directories})
}
    

