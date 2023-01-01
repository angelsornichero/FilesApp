const fs = require('fs')
const normalizePath = require('./path')
const error = require('../middlewares/error-response')

const checkPath = (path) => {
    try {fs.readdirSync(path)}
    catch (err) {return false}
    
}


module.exports = (req, res) => {
    const { fileName } = req.body
    const path = normalizePath(req, req.params.path)

    const checked = checkPath(path.absolutePath)

    if (checked === false) error({statusCode: 404, message: '[!] The path is not valid'}, res)

    let remove = null

    if (fs.lstatSync(path.absolutePath + '/' + fileName).isFile()){
        fs.unlinkSync(path.absolutePath + '/' + fileName, (err) => {
            if (err) remove = false
            else remove = true
        })
    }
    else {
        fs.rmSync(path.absolutePath + '/' + fileName, { recursive: true, force: true }, (err) => {
            if (err) remove = false
            else remove = true
        })
    }

    if (remove === false) error({statusCode: 404, message: '[!] Error on removing the file'}, res)

    res.json({success: true, message: '[*] File succesfully deleted'})

    

}