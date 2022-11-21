require('dotenv').config()


const storage = process.env.STORAGE

if(!storage) {
    console.error('storage path not defined', 'Write a path in .env')
    process.exit(1)
}

module.exports = storage