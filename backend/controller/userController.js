const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'skdjfskjefksjenfksjenf'

const registerCreation = async (req, res) =>{
    try {
        const { username, email, mobile, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, email, mobile, password: hashedPassword })
        res.status(200).json({ Message: " User Created Successfully "})
    } catch (error) {
        res.status(404).json({ error:"Email already exist"})
    }
}

const registerFindCreatedUser = async (req, res) =>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(404).json({ Message: "Unable to get Users" })
    }
}

const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"Email not Found"})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(401).json({message: "Incorrect Password"})
        }
        const { role } = user;
        const token = jwt.sign({userId: user._id, role}, SECRET_KEY, {expiresIn: '7d'})
        res.status(200).json({token,
            role: user.role,
            message: 'Login Successfully'})
    } catch (error) {
        res.status(500).json({ error: "Error Logging In"})
    }
}

module.exports ={
    registerCreation,
    registerFindCreatedUser,
    login
}