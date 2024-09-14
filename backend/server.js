if(process.env.NODE_URL != "production"){
    require('dotenv').config();
}

const express = require('express')
const DbConnect = require('./config/DbConnect.js')
const app = express()

app.use(express.json())
DbConnect()

app.get('/', (req, res) =>{
    res.json({ Hello: "World" })
})

app.listen(process.env.PORT)