const jwt = require("jsonwebtoken")
require("dotenv").config()

const adminAuth = (req, res, next) => {
    const token = req.headers.auth.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.keyword, function (err, decoded) {
            if (err) {
                res.status(400).send({
                    "message": "authentication failed"
                })
            } else {
                if (decoded.role !== "admin") {
                    res.status(400).send({
                        "message": "authentication failed"
                    })
                } else {
                    next()
                }
            }
        })
    } else {
        res.status(400).send({
            "message": "authentication failed"
        })
    }
}

module.exports = adminAuth