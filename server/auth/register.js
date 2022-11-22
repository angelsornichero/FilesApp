const pool = require('../db')
const error = require('../middlewares/error-response')
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
    const { name, username, password, repeat_password, email } = req.body
    if (!name || !username || !password || !repeat_password || !email) error({statusCode: 400, message: 'There are some fields left: name, username, password, repeat_password, email'}, res)
    if (password !== repeat_password) error({statusCode: 400, message: 'Fields password and repeat_password must be the same'}, res)

    const encrypt_password = bcrypt.hashSync(password, 8)

    const user = { name, username, encrypt_password, email }
    pool.query(`INSERT INTO users SET ?`, [user])

    res.json({message: 'User correctly registered', succes: true})
}
