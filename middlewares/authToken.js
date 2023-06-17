const jwt = require("jsonwebtoken")

const authenticateToken = (req, res, next)=>{
    const authHeader = req.headers["authorization"]
    if(!authHeader) throw new Error("invalid token")

    const token = authHeader.split(" ")[1]

    if(token === null) return res.status(400)

    jwt.verify(token, process.env.JWT_SECRET, (err, data)=>{
        if(err) return res.send(400)

        req.user = data
        
        next()
    })

}

module.exports = authenticateToken