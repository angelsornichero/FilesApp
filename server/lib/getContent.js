const fs = require('fs')
const error = require('../middlewares/error-response')
const normalizePath = require('./path') 
const whatUser = require('../auth/whatUser')
require('dotenv').config()

const getContent = (path, res) => {
    try {
    return files = fs.readdirSync(path, (err, result) => {
        if (err) throw err
        return result
        })
    }
    catch {
        error({statusCode: 404, message: '[!] The path is not valid'}, res)
    }
}




module.exports = (req, res) => {
    
    const path = normalizePath(req, req.params.path)
    const user = whatUser(req)
    
    content = getContent(path.absolutePath, res)
    
    directories = []
    filesArray = []
    console.log(content)
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
    
    res.json({user: user, path: path.relativePath, files: filesArray, directories: directories})
}
    

