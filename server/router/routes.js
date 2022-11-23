require('dotenv').config()
const express = require('express');
const router = express.Router();
const error = require('../middlewares/error-response')
const getContent = require('../lib/getContent')
const uploadFiles = require('../lib/uploadFiles')
const register = require('../auth/register')
const login = require('../auth/login')

router.post('/api/upload', (req, res) => uploadFiles(req, res))
router.post('/api/files/:path', (req, res) => {getContent(req, res)})
router.post('/api', (req, res) => res.json({message: '[*] WELCOME: You are using YourFilesApp a API, for see content visit /api/:path or for upload files /api/upload'}))
router.post('/api/register', (req, res) => register(req, res))
router.post('/api/login', (req, res) => login(req, res))



module.exports = router;

