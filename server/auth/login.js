const pool = require('../db')
const error = require('../middlewares/error-response')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

module.exports = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) error({statusCode: 401, message: '[!] You have to put a username or a password'}, res)
    
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    if (rows.length <= 0) error({statusCode: 401, message: '[!] Your username is not registered, please register in /api/register'}, res)
    const user = rows[0]

    const validPassword = await bcrypt.compare(password, user.encrypt_password);
    if (!validPassword) error({statusCode: 401, message: '[!] Your password is incorrect'}, res)

    
    const jwt = jsonwebtoken.sign({ username: username, password: user.encrypt_password}, process.env.JWT_SECRET);

    console.log(req.headers.authorization)
    res.json({message: '[*] Your are correctly login', success: true, token: jwt})

}