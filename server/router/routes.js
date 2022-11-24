require('dotenv').config()
const express = require('express');
const router = express.Router();
const error = require('../middlewares/error-response')
const getContent = require('../lib/getContent')
const uploadFiles = require('../lib/uploadFiles')
const register = require('../auth/register')
const login = require('../auth/login')
const {isAuthenticated} = require('../middlewares/authorization')

router.post('/api/upload/:path', isAuthenticated,(req, res) => uploadFiles(req, res))
router.post('/api/files/:path', isAuthenticated,(req, res) => getContent(req, res))
router.post('/api', (req, res) => res.json({message: '[*] WELCOME: You are using YourFilesApp a API, for see content visit /api/files/:path or for upload files /api/upload/:path but you must be authenticated'}))
router.post('/api/register', (req, res) => register(req, res))
router.post('/api/login', (req, res) => login(req, res))



module.exports = router;

