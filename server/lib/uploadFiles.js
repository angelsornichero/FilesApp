const error = require('../middlewares/error-response')


module.exports = (req, res) => { 
    const files = req.files.undefined
    if (!req.files) {
        error({statusCode: 400, message: 'NO files attached'}, res)
    }
    
    files.forEach(file => {
        console.log(file.name)
        file.mv(process.env.SAVE_STORAGE + '/' + file.name)

    });

    res.json({message: 'Files Uploaded correctly', succes: true})
}


