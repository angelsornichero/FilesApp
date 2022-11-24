const path = require('path');
const storage = require('../storage');
const whatUser = require('../auth/whatUser')

const slash = process.platform === 'win32' ? '\\' : '/';

module.exports = (req, urlPath) => {
    if (urlPath === '-') relativePath = whatUser(req)
    else relativePath = urlPath ? whatUser(req) + '/' + urlPath.replaceAll('-', '/', slash).replaceAll('.', '').replaceAll('//', '/') : slash;
    const absolutePath = path.join(storage, relativePath);
    return { relativePath, absolutePath };
};