if(process.env.NODE_URL != "production"){
    require('dotenv').config();
}

const mongoose = require('mongoose')

async function DbConnect(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Successfully Connected to Database")
    } catch (error) {
        console.log(error)
    }
}

module.exports = DbConnect;