const fs = require('fs')
require('dotenv').config()

const getContent = (path) => {
    return files = fs.readdirSync(path, (err, result) => {
        if (err) throw err
        return result
})}


module.exports = (req, res) => {
    content = getContent(process.env.SAVE_STORAGE + '/' + req.params.path)
    
    directories = []
    filesArray = []
    content.forEach(file => {
        if(fs.lstatSync(process.env.SAVE_STORAGE + '/' + req.params.path + '/' + file).isDirectory() === true) {
            directories.push(file)
        }
    });
    content.forEach(file => {
        if(fs.lstatSync(process.env.SAVE_STORAGE + '/' + req.params.path + '/' + file).isFile() === true) {
            filesArray.push(file)
        }
    });
    
    res.json({path: req.params, files: filesArray, directories: directories})
}
    

