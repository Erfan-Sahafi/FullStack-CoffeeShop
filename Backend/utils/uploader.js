const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,"..","public","products","covers"))
    },
    filename:(req,file,cb)=>{
        const fileName = crypto.createHash('SHA256').update(file.originalname).digest('hex')
        const ext = path.extname(file.originalname)
        cb(null,fileName + ext)
    }
})