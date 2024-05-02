const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`server is runnig in port ${port}...`)
})