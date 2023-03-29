const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth = (req, res, next) => {
    const token = req.headers.auth.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.keyword, function (err, decoded) {
            if (err) {
                res.send({
                    "message": "Please Login first"
                })
            } else {
                req.body.userId = decoded.userId
                next()
            }
        })
    } else {
        res.send({
            "message": "Please Login first"
        })
    }
}

module.exports = auth