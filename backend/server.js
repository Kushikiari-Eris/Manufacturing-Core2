if(process.env.NODE_URL != "production"){
    require('dotenv').config();
}

const express = require('express')
const userRoute = require('./routes/userRoute.js')
const DbConnect = require('./config/DbConnect.js')
const createHttpError = require('http-errors')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(cors())
app.use(express.json())
DbConnect()
app.use(morgan('dev'))

app.use('/api/user', userRoute)

app.get('/', (req,res) =>{
    res.json({ Hello: "World"})
})

app.use((req, res, next) =>{
    next(createHttpError.NotFound())
})
app.use((error, req, res, next) =>{
    error.status = error.status || 500
    res.status(error.status)
    res.send(error)
})




app.listen(process.env.PORT)