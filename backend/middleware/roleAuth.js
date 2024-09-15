const jwt = require('jsonwebtoken')

const authorizeRole = (requiredRoles) => {
    return (req, res, next) => {
        const token = req.header('Authorization').replace('Bearer ', '')

        if(!token){
            return res.json({ Message: "Unauthorized" })
        }

        try {
            const decoded  = jwt.verify(token, SECRET_KEY)
            if(!requiredRoles.includes(decoded.role)){
                res.json({ Message: "Forbidden: Insuficient Permission" })
            }
            req.user = decoded;
            next()
        } catch (error) {
            res.json({ Message: "Unauthorized" })
        }
    }
}

module.exports = authorizeRole;